/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
// import css from './MovieList.module.css';

const MovieList = ({ movies, foundMovies }) => {
  return (
    <ul>
      {foundMovies.length === 0
        ? movies.map(movie => (
            <li key={movie.episode_id} id={movie.episode_id}>
              <a href={movie.url} />
              {movie.title}
            </li>
          ))
        : foundMovies.map(movie => (
            <li key={movie.episode_id} id={movie.episode_id}>
              <a href={movie.url} />
              {movie.title}
            </li>
          ))}
    </ul>
  );
};

export default MovieList;
