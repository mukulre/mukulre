//context, provider, consumer

import { createContext, useState, useContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      year: "2010",
      genre: "Sci-Fi",
      watched: true,
      favorite: true,
    },
    {
      id: 2,
      title: "The Godfather",
      year: "1972",
      genre: "Crime",
      watched: true,
      favorite: false,
    },
    {
      id: 3,
      title: "Interstellar",
      year: "2014",
      genre: "Sci-Fi",
      watched: false,
      favorite: false,
    },
  ]);
  return (
    <>
      <MovieContext.Provider value={{ movies }}>
        {children}
      </MovieContext.Provider>
    </>
  );
};

//consumer
export const useMovie = () => useContext(MovieContext);

// arrow func
// callback
// async
// props
// state
