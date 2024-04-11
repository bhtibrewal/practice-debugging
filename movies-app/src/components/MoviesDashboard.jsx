import { useMovies } from "../context/useMovies";
import { MovieCard } from "./MovieCard";

export const MoviesDashboard = () => {
  const { movies } = useMovies();
  return (
    <section className="dashboard">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.imdbID} />
      ))}
    </section>
  );
};
