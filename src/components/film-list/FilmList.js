import {FilmItem} from "../film-item";
import styles from './FilmList.module.css'

export const FilmList = ({items, onFilmsClick}) => {

  return (
      <div className={styles.wrapper}>
          {items.map(item => (<div onClick={() => onFilmsClick(item)} className={styles.itemWrapper} key={item.id}>
          <FilmItem {...item}/></div>))}
      </div>
  );

}
