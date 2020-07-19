import React, { Component, Fragment } from 'react';
import moviesAPI from '../../services/movies-api';
import MovieDetails from '../../ui/MovieDetails/MovieDetails';

class Details extends Component {
  state = {
    characters: [],
    planets: [],
    // vehicles: [],
    // starships: [],
    // species: [],
  };

  componentDidMount() {
    this.findMovieDetails();
  }

  async findMovieDetails() {
    const {
      charactersFromSelectedMovie,
      planetsFromSelectedMovie,
    } = this.props;

    const allCharacterUrlFromMovie = charactersFromSelectedMovie.map(url => {
      const forDelete = 'http://swapi.dev/api/people/';
      const urlID = url.replace(forDelete, '');
      return urlID;
    });

    const allPlanetsUrlFromMovie = planetsFromSelectedMovie.map(url => {
      const forDelete = 'http://swapi.dev/api/planets/';
      const urlID = url.replace(forDelete, '');
      return urlID;
    });

    const characters = await Promise.all(
      allCharacterUrlFromMovie.map(id => {
        return moviesAPI.getCharacterById(id);
      }),
    );

    const planets = await Promise.all(
      allPlanetsUrlFromMovie.map(id => {
        return moviesAPI.getPlanetById(id);
      }),
    );

    this.setState({
      characters,
      // starships,
      // vehicles,
      planets,
      // species,
    });
  }

  render() {
    const { targetMovie } = this.props;
    const { characters, planets } = this.state;

    return (
      <Fragment>
        <MovieDetails
          targetMovie={targetMovie}
          characters={characters}
          planets={planets}
        />
      </Fragment>
    );
  }
}

export default Details;
