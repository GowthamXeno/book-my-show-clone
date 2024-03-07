import React, { createContext, useState } from "react";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
//   const [movie, setMovie] = useState({
//     id: 0,
//     original_title: "ksx",
//     overview: "dwd",
//     backdrop_path: "dd",
//     poster_path: "dd",
//   });
const movie = "Hello"
//   const value = { movie, setMovie };
  return (
    <MovieContext.Provider value={movie}>{children}</MovieContext.Provider>
  );
};

export default MovieProvider;
