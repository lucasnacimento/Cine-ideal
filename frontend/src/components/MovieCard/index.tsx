import { Movie } from "../../types/movie";
import { IMAGE_URL } from "../../config/request";
import "./styles.css";

type Props = {
  movie: Movie;
};

function MovieCard({ movie }: Props) {
  return (
    <>
      <a href="https://google.com.br">
        <img src={`${IMAGE_URL}${movie.poster_path}`} alt="aquaman" />
      </a>
      <span>{movie.title}</span>
    </>
  );
}

export default MovieCard;
