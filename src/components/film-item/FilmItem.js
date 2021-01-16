import styles from './FilmItem.module.css'


const imgBuilder = (posterPath, size = 200) => `https://image.tmdb.org/t/p/w${size}${posterPath}`

export const FilmItem = (props) => {

  const {original_title, release_date, vote_average, vote_count, poster_path} = props
  let {overview} = props
// adult: false
// backdrop_path: "/srYya1ZlI97Au4jUYAktDe3avyA.jpg"
// genre_ids: Array(3) [ 14, 28, 12 ]
// id: 464052
// original_language: "en"
// original_title: "Wonder Woman 1984"
// overview: "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah."
// popularity: 3280.252
// poster_path: "/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
// release_date: "2020-12-16"
// title: "Wonder Woman 1984"
// video: false
// vote_average: 7.2
// vote_count: 2685

  if (overview.length>200) {
     overview = `${overview.slice(0,200)} ...`
  }

  return (

      <div className={styles.wrapper}>
        <div
            style={{
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100%',
              backgroundPosition: 'center',
              height: 300,
              width: '100%',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              backgroundImage: `url(${imgBuilder(poster_path)})`
            }}>
          {/*<img src={imgBuilder(poster_path)} alt={`${poster_path} poster`}/>*/}
        </div>
        <div className={styles.textWrapper}>
          <h3>{original_title}</h3>
          <span><b>Rating:</b> {vote_average} (total votes: {vote_count})</span>
          <p className={styles.overview}>{overview}</p>
          <span><b>Release date:</b> {release_date}</span>
        </div>
      </div>
  );
}

