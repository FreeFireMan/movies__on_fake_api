import styles from "./SearchPanel.module.css";
import {useEffect, useState} from "react";
import {moviesService, RenderLoadingIndicator} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {setIsVisible} from "../../redux/action-creators";

export const SearchPanel = () => {

  const history = useHistory()
  const {isVisible} = useSelector(({movies: {isVisible}}) => ({isVisible}))
  const [searchValue, setSearchValue] = useState('')
  const [searchInfo, setSearchInfo] = useState(null)
  // const [isVisible, setIsVisible] = useState(null)
  const dispatch = useDispatch()

  const getMovies = () => {
    moviesService.getMoviesBySearchValue({query: searchValue})
        .then(response => setSearchInfo(response))
  }

  useEffect(() => {
    dispatch(setIsVisible(false))
    if (searchValue) {
      dispatch(setIsVisible(true))
      getMovies()
    }
  }, [searchValue])

  const typeSearchValue = (value) => {
    setSearchValue(value)
    setSearchInfo('')
  }

  const choseMovieInPanel = async (id) => {
    dispatch(setIsVisible(false))

    history.push(`/movie/${id}`)
    setSearchInfo('fgfg')
  }


  return (
      <div className={styles.searchPanelWrapper}>
        <div>
          <input onInput={(e) => typeSearchValue(e.currentTarget.value)}
                 className={styles.searchInput} value={searchValue}
          />
          {isVisible && <div className={styles.dropDownPanel}>
            {searchInfo
                ? searchInfo.results.length > 0
                    ? searchInfo.results.map(({name, id}, i) =>
                        <p key={id} onClick={() => choseMovieInPanel(id)}
                           className={i === 0 || i === searchInfo.results.length - 1 ? styles.searchIFL : styles.searchItem}
                        >
                          {name}
                        </p>
                    )
                    : <h3 className={styles.notFound}>Sorry... Film not found 🥺</h3>
                : <RenderLoadingIndicator/>
            }
          </div>
          }
        </div>

        <button className={styles.searchBtn}>search</button>

      </div>
  );
}
