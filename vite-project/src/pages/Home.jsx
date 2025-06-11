import React from "react";
import MovieList from "../components/MovieList";
import MovieForm from "../components/MovieForm";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <MovieForm />
      <MovieList />
    </>
  );
}

export default Home;
