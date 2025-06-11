import React from "react";
import { useMovie } from "../contexts/MovieContext";

function Favorite() {
  const { movies } = useMovie();
  console.log(movies);
  return (
    <>
      <h1>Favorite</h1>
    </>
  );
}

export default Favorite;
