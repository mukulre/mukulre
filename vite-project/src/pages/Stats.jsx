import React from "react";
import { useMovie } from "../contexts/MovieContext";

function Stats() {
  const { movies } = useMovie();
  console.log(movies);
  return (
    <>
      <h1>Stats</h1>
    </>
  );
}

export default Stats;
