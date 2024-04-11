import { useMovies } from "../context/useMovies";
import { Button } from "./Button";
import { StarRating } from "./StarRating";

export const MovieCard = ({ movie, inQueue }) => {
  const { addMovieToQueue, removeFromQueue } = useMovies();
  return (
    <div className="card" data-testid="movie-card">
      <p className="card_title">{movie.Title}</p>
      <img src={movie.Poster} alt="movie poster" className="card_image" />
      <StarRating movie={movie} data-testid="star-rating-section" />
      <Button
        onClick={() =>
          inQueue
            ? removeFromQueue(movie.imdbID)
            : addMovieToQueue(movie.imdbID)
        }
      >
        {inQueue ? "Remove from Queue" : "Add to queue"}
      </Button>
    </div>
  );
};
