import { useMemo } from "react";
import { useMovies } from "../context/useMovies";
import { MovieCard } from "./MovieCard";

export const MoviesQueue = () => {
  const { queue, movies } = useMovies();
  const moviesInQueue = useMemo(() => {
    debugger;
    return movies.filter((movie) =>
      queue.some((movieId) => movieId === movie.imdbID),
    );
  }, [queue, movies]);
  return (
    <>
      <h3>My Queue </h3>
      <section className="movies_queue_section dashboard">
        {moviesInQueue.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} inQueue={true} />
        ))}
      </section>
    </>
  );
};
