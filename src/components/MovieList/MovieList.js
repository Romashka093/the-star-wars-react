/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
// import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  // console.log(movies);
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.episode_id} id={movie.episode_id}>
          <a href={movie.url} />
          {movie.title}
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
