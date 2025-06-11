import React, { useState } from "react";

function MovieForm() {
  const [movie, setMovie] = useState({
    title: "",
    year: "",
    genre: "",
    watched: false,
    favorite: false,
  });
  const handleChange = (event) => {
    setMovie((prevMovie) => ({
      ...prevMovie,
      [event.target.name]: event.target.value,
    }));
    console.log(movie);
  };
  return (
    <>
      <form>
        <section>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={movie.title}
            onChange={handleChange}
          />
        </section>
        <section>
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={movie.genre}
            onChange={handleChange}
          />
        </section>
        <section>
          <label>Year:</label>
          <input
            type="text"
            name="year"
            value={movie.year}
            onChange={handleChange}
          />
        </section>
        <section>
          <button type="submit">Add Movie</button>
          <button type="reset">Reset</button>
        </section>
      </form>
    </>
  );
}

export default MovieForm;
