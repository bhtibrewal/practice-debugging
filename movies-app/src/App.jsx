import "./App.css";

import { MoviesDashboard } from "./components/MoviesDashboard";
import { useMovies } from "./context/useMovies";
import { MoviesQueue } from "./components/MoviesQueue";
import { Button } from "./components/Button";

// on click of fetch movies button call fetchMovies
// default rating will be 0 for each movie
export default function App() {
  const { isLoading, fetchMovies, queue } = useMovies();
  return (
    <div className="App">
      <Button onClick={fetchMovies}>Fetch Movies</Button>
      {isLoading ? <p>loading...</p> : <MoviesDashboard />}

      {queue.length ? <MoviesQueue /> : null}
    </div>
  );
}
