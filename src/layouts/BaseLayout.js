import styles from './BaseLayout.module.css'
import {NavLink} from "react-router-dom";
import {SearchPanel} from "../components";

export const BaseLayout = ({children}) => {

  return (
      <div className={styles.mainWrapper}>
        <header className={styles.headerWrapper}>
          <nav>
            <NavLink to='/' exact activeStyle={{
              fontWeight: "bold",
              color: "red"
            }} >
              Home
            </NavLink>
            <NavLink to='/movie' activeStyle={{
              fontWeight: "bold",
              color: "red"
            }} >💅
              Movie
            </NavLink>
          </nav>
          <SearchPanel/>
        </header>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
  )
}
