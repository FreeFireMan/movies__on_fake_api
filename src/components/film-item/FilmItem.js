import  styles from './FilmItem.module.css'


const imgBuilder = (posterPath, size = 200) => `https://image.tmdb.org/t/p/w${size}${posterPath}`

export const FilmItem = (props) => {

  const {original_title, overview, release_date, vote_average, vote_count, poster_path} = props
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

  return (
      <div className={styles.wrapper}>
        <div
          style={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: '80%',
            backgroundPosition: 'center',
            height: 350,
            width: '100%',
            backgroundImage: `url(${imgBuilder(poster_path)})`
          }}>
          {/*<img src={imgBuilder(poster_path)} alt={`${poster_path} poster`}/>*/}
        </div>
        <div>
          <h2>{original_title}</h2>
          <span>Rating: {vote_average} (total votes: {vote_count})</span>
          <p>{overview}</p>
          <span>Release date: {release_date}</span>
        </div>
      </div>
  );
}

