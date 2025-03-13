import { Link } from "react-router-dom"

function Movie({
  coverImage,
  title,
  summary,
  genres,
}: {
  coverImage: string;
  title: string;
  summary: string;
  genres: string[];
}) {
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h2>
        <Link to="/movie">
          {title}
        </Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
