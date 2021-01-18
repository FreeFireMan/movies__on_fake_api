// import styles from './Home.module.css'
import {useEffect, useState} from "react";
import {FilmList} from "../../components";
import {genresService, moviesService, RenderLoadingIndicator} from "../../services";
import {useHistory} from "react-router-dom";


export const PaginationWrapper = ({children, currentPage, totalPage, onPrevClick, onNextClick}) => {

  const handlerPrevClick = () => {
    if (currentPage - 1 > 0) {
      onPrevClick(currentPage -1)
    }
  }
  const handlerNextClick = () => {
    if (currentPage + 1 <= totalPage) {
      onNextClick(currentPage +1)
    }
  }

  return (
      <div>
        <div>
          <button onClick={handlerPrevClick}>prev page</button>
          <span>{currentPage} of {totalPage}</span>
          <button onClick={handlerNextClick}>next page</button>
        </div>
        {children}
      </div>
  );
}


export function Home() {

  const history = useHistory()
  const [movieList, setMovieList] = useState([])
  const [genreList, setGenreList] = useState([])
  const [IsLoading, setIsLoading] = useState(null)
  const [movieData, setMovieData] = useState(null)


  const fetchMovies = async (params) => {

    try {
      const {results, page, total_pages, total_results} = await moviesService.getMovies(params)
      setMovieData({page, total_pages, total_results})
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
  const fetchMoviesData = async (movieParams) => {
    const requests = genreList.length ? [fetchMovies(movieParams)] : [fetchMovies(movieParams), fetchGenres()]

    try {
      setIsLoading(true)

      const [movies, genres = genreList] = await Promise.all(requests)
      !genreList && setGenreList(genres)
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

  useEffect(() => {
    fetchMoviesData()
  }, [])
  const onFilmsClick = (film) => {
    history.push(`/movie/${film.id}`)
  }

  const handlePageChange = (page) => {
    fetchMoviesData({page})
  }

  return (
      <div>
        {IsLoading || IsLoading === null
            ? <RenderLoadingIndicator/>
            : <PaginationWrapper
                currentPage={movieData.page}
                totalPage={movieData.total_pages}
                onPrevClick={handlePageChange}
                onNextClick={handlePageChange}
            >
              <FilmList items={movieList} onFilmsClick={onFilmsClick}/>
            </PaginationWrapper>
        }
      </div>
  );
}
