import {FilmItem} from "../film-item";
import styles from './FilmList.module.css'

export const FilmList = ({items}) => {


  return (
      <div className={styles.wrapper}>
        {items.map(item => (<div className={styles.itemWrapper} key={item.id}><FilmItem {...item}/></div>))}
      </div>
  );
}
