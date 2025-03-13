import { Link } from "react-router-dom"
import styles from "./Movie.module.css";

function Movie({
  id,
  coverImage,
  title,
  summary,
  genres,
  year,
}: {
  id: number;
  coverImage: string;
  title: string;
  summary: string;
  genres: string[];
  year: number;
}) {
  return (
    <div className={styles.movie}>
      <img src={coverImage} alt={title} className={styles.movie__img} />
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}>
          {title}
        </Link>
      </h2>
      <h3 className={styles.movie__year}>{year}</h3>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul className={styles.movie__genres}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
