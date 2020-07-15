import React from 'react';
import ItemMovie from '../../ui/ItemMovie/ItemMovie';
import Details from '../Details/Details';
// import css from './MovieList.module.css';

const MovieList = ({
  movies,
  foundMovies,
  handleOpenItem,
  isOpen,
  movieID,
  targetMovie,
  charactersFromSelectedMovie,
}) => {
  return (
    <ul>
      {foundMovies.length === 0
        ? movies.map(movie => (
            <li key={movie.episode_id} onClick={handleOpenItem}>
              <ItemMovie
                id={movie.episode_id}
                isOpen={isOpen}
                handleOpenItem={handleOpenItem}
                name={movie.title}
              />
              {movieID === movie.episode_id && (
                <Details
                  movieID={movieID}
                  charactersFromSelectedMovie={charactersFromSelectedMovie}
                  targetMovie={targetMovie}
                />
              )}
            </li>
          ))
        : foundMovies.map(movie => (
            <li key={movie.episode_id} onClick={handleOpenItem}>
              <ItemMovie
                id={movie.episode_id}
                isOpen={isOpen}
                handleOpenItem={handleOpenItem}
                name={movie.title}
              />
              {movieID === movie.episode_id && (
                <Details
                  movieID={movieID}
                  charactersFromSelectedMovie={charactersFromSelectedMovie}
                  targetMovie={targetMovie}
                />
              )}
            </li>
          ))}
    </ul>
  );
};

export default MovieList;
