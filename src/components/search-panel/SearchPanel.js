import styles from "./SearchPanel.module.css";
import {useEffect, useState} from "react";
import {moviesService, RenderLoadingIndicator} from "../../services";
import {useHistory} from "react-router-dom";

export const SearchPanel = () => {

  const history = useHistory()
  const [searchValue, setSearchValue] = useState('')
  const [searchInfo, setSearchInfo] = useState(null)
  const [isVisible, setIsVisible] = useState(null)

  const getMovies = () => {
    moviesService.getMoviesBySearchValue({query: searchValue})
        .then(response => setSearchInfo(response))
  }

  useEffect(() => {
    if (searchValue) {
      setIsVisible(true)
      getMovies()
    } else {
      setIsVisible(false)

    }
  }, [searchValue])

  const typeSearchValue = (value) => {
    setSearchValue(value)
    setSearchInfo(null)
  }

  console.log(searchInfo)

  return (
      <div className={styles.searchPanelWrapper}>
        <div>
          <input onInput={(e) => typeSearchValue(e.currentTarget.value)}
                 className={styles.searchInput}
          />
          {isVisible && <div className={styles.dropDownPanel}>
            {searchInfo
                ? searchInfo.results.length > 0
                    ? searchInfo.results.map((item, i) =>
                        console.log(item)
                        // <p className={i === 0 || i === searchInfo.results.length - 1 ? styles.searchIFL : styles.searchItem}
                        //    onClick={() => history.push(item)} key={i}>
                        //   {item.name}
                        // </p>
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
