import styles from './BaseLayout.module.css'
import {NavLink} from "react-router-dom";

export const BaseLayout = ({children}) => {

  return (
      <div className={styles.mainWrapper}>
        <header>
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
        </header>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
  )
}
