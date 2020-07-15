import React, { Component, Fragment } from 'react';
import moviesAPI from '../../services/movies-api';
import css from './Details.module.css';

class Details extends Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    this.findMovieCharacters();
  }

  async findMovieCharacters() {
    const { charactersFromSelectedMovie } = this.props;
    const urlOfcharactersFromSelectedMovie = charactersFromSelectedMovie.flat();
    const urlIDs = urlOfcharactersFromSelectedMovie.map(url => {
      const forDelete = 'http://swapi.dev/api/people/';
      const urlID = url.replace(forDelete, '');
      return urlID;
    });

    const characters = await Promise.all(
      urlIDs.map(id => {
        return moviesAPI.getCharacterById(id);
      }),
    );
    this.setState({ characters });
  }

  render() {
    const { targetMovie } = this.props;
    const { characters } = this.state;

    return (
      <Fragment>
        {targetMovie.map(movie => (
          <div className={css.font} key={movie.episode_id}>
            <h2>{movie.title}</h2>
            <p>description: {movie.opening_crawl}</p>
            <div>
              <p>
                <span>director: </span>
                {movie.director}
              </p>
              <p>
                <span>producer: </span>
                {movie.producer}
              </p>
              <p>
                <span>release date: </span>
                {movie.release_date}
              </p>
              <p>
                <span>characters: </span>
              </p>
              <p>
                <span />
                {characters.map(character => (
                  <span key={character.url}>{character.name}, </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}

export default Details;
