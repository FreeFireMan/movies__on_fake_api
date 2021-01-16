import styles from './Home.module.css'
import {useEffect, useState} from "react";
import {FilmList} from "../../components";
import {genresService, moviesService} from "../../services";
import {useHistory} from "react-router-dom";

export function Home() {

  const history = useHistory()
  const [movieList, setMovieList] = useState([])
  const [IsLoading, setIsLoading] = useState(null)


  const fetchMovies = async () => {

    try {
      const {results, page, total_pages, total_results} = await moviesService.getMovies()
      return results
    } catch (e) {
      console.error(e)
    }
  }
  const fetchGenres = async () => {

    try {
      const {genres} = await genresService.getGenres()
      return genres
    } catch (e) {
      console.error(e)
    }
  }
  const fetchMoviesData = async () => {
    const requests = [fetchMovies(), fetchGenres()]

    try {
      setIsLoading(true)

      const [movies, genres] = await Promise.all(requests)

      const margeWithGenresMovies = movies.map(movie => {
        const {genre_ids} = movie
        const movieGenresList = genre_ids.map(genreId => genres.find(el => el.id === genreId))
        return {...movie, movieGenresList}
      })

      setMovieList(margeWithGenresMovies)
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  const renderLoadingIndicator = () =>
      (<div className={styles.loading}>Loading...</div>)


  useEffect(() => {
    fetchMoviesData()
  }, [])

  const onFilmsClick = (film) => {
    history.push(`/movie/${film.id}`)
  }

  return (
      <div>
        {IsLoading || IsLoading === null
            ? renderLoadingIndicator()
            : <FilmList items={movieList} onFilmsClick={onFilmsClick}/>}
      </div>
  );
}
