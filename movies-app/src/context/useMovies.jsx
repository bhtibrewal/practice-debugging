import { createContext, useContext, useState } from "react";

const MoviesContext = createContext();

export const MoviesContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [queue, setQueue] = useState([]);

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://www.omdbapi.com/?s=action&apikey=4640ef30&page=1"
      );
      const data = await response.json();
      setMovies(data.Search.map((movie) => ({ ...movie, rating: 0 })));
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const handleRating = (movieId, buttonText) => {
    setMovies((prev) => {
      const updatedMovies = prev.map((movie) => {
        if (movie.imdbID === movieId) {
          let newMovieObj = { ...movie };
          if (buttonText === "-") {
            newMovieObj["rating"] =
              newMovieObj["rating"] > 0
                ? newMovieObj["rating"] - 1
                : newMovieObj["rating"];
          } else {
            newMovieObj["rating"] =
              newMovieObj["rating"] < 5
                ? newMovieObj["rating"] + 1
                : newMovieObj["rating"];
          }
          return newMovieObj;
        } else return movie;
      });
      return updatedMovies;
    });
  };

  const addMovieToQueue = (movieId) => {
    if (queue.includes(movieId)) alert("movie is present in queue");
    else setQueue((prev) => [...prev, movieId]);
  };

  const removeFromQueue = (movieId) => {
    setQueue((prev) => {
      const filteredQueue = prev.filter((id) => id !== movieId);
      return filteredQueue;
    });
  };
  return (
    <MoviesContext.Provider
      value={{
        isLoading,
        movies,
        fetchMovies,
        queue,
        handleRating,
        addMovieToQueue,
        removeFromQueue
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = () => {
  const context = useContext(MoviesContext);
  return context;
};
