import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMoviedsHandler = async () => {
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();
    const transformedMoveies = await data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformedMoveies);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviedsHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
