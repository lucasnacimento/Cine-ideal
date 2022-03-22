import { Movie } from "../../types/movie";
import { IMAGE_URL } from "../../config/request";

import "./styles.css";
import { Link } from "react-router-dom";

type Props = {
  movie: Movie;
};

function MovieCard({ movie }: Props) {
  return (
    <>
    <Link to={`/movie-details/${movie.id}`}>
        <img src={`${IMAGE_URL}${movie.poster_path}`} alt="aquaman" />
    </Link>
      <span>{movie.title}</span>
    </>
  );
}

export default MovieCard;
