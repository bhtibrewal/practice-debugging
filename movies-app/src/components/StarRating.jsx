import { useMovies } from "../context/useMovies";
import { Button } from "./Button";

export const StarRating = ({ movie }) => {
  const { handleRating } = useMovies();
  return (
    <div className="star_rating_section">
      <Button onClick={() => handleRating(movie.imdbID, "-")}>-</Button>
      <div className="rating" data-testid="star-rating">
        {Array(movie.rating)
          .fill("")
          .map((item) => (
            <span>⭐</span>
          ))}
      </div>
      <Button onClick={() => handleRating(movie.imdbID, "+")}>+</Button>
    </div>
  );
};
