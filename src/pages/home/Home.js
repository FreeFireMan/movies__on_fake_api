// import styles from './Home.module.css'
import {useEffect, useState} from "react";
import {FilmList, PaginationWrapper} from "../../components";
import {genresService, moviesService, RenderLoadingIndicator} from "../../services";
import {useHistory} from "react-router-dom";

const margeMoviesWithGenre = (movies, genres) => {
  return movies.map(movie => {
    const {genre_ids} = movie
    const movieGenresList = genre_ids.map(genreId => genres.find(el => el.id === genreId))
    return {...movie, movieGenresList}
  })
}

export function Home() {

  const history = useHistory()
  const [genresList, setGenreList] = useState([])
  const [IsLoading, setIsLoading] = useState(null)
  const [moviesData, setMoviesData] = useState(null)

  const fetchMovies = (params) => {
    try {
      return moviesService.getMovies(params)
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
      const [{results, ...rest}, genres] = await Promise.all(requests)
      setMoviesData({movies: margeMoviesWithGenre(results, genres), ...rest})
      setGenreList(genres)
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMoviesData()
  }, [])
  const onFilmsClick = (film) => history.push(`/movie/${film.id}`)
  const handlePageChange = async (page) => {
    const {results, ...rest} = await fetchMovies({page})
    setMoviesData({
      movies: margeMoviesWithGenre(results, genresList),
      ...rest
    })
  }


  return (
      <div>
        {IsLoading || IsLoading === null
            ? <RenderLoadingIndicator/>
            : <PaginationWrapper
                currentPage={moviesData.page}
                totalPage={moviesData.total_pages}
                onPrevClick={handlePageChange}
                onNextClick={handlePageChange}
                handlerLastPage={handlePageChange}
                handlerFirstPage={handlePageChange}
            >
              <FilmList items={moviesData.movies} onFilmsClick={onFilmsClick}/>
            </PaginationWrapper>
        }
      </div>
  );
}

