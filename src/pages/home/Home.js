import styles from './Home.module.css'
import {useEffect, useState} from "react";
import {FilmList} from "../../components";
import {moviesService} from "../../services";

export function Home() {

  const [movieList, setMovieList] = useState([])
  const [IsLoading, setIsLoading] = useState(null)

  const fetchMovies = async () => {

    try {
      setIsLoading(true)
      const {results, page, total_pages, total_results} = await moviesService.getMovies()
      setMovieList(results)
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  const renderLoadingIndicator = () =>
      (<div className={styles.loading}>Loading...</div>)


  useEffect(() => {
    fetchMovies()
  }, [])


  return (
      <div>
        {IsLoading || IsLoading === null ? renderLoadingIndicator() : <FilmList items={movieList}/>}
      </div>
  );
}
