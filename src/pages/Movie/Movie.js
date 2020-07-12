// import React from 'react';
import React, { Component, Fragment } from 'react';
import moviesAPI from '../../services/movies-api';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import Details from '../../components/Details/Details';
// import css from '.Movie.module.css';

class Movie extends Component {
  state = {
    movies: [],
    searchQuery: '',
  };
  componentDidMount() {
    moviesAPI.getAllMovie().then(movies => {
      this.setState({ movies });
    });
    moviesAPI.getMovieFromSearch();
  }

  componentDidUpdate(prevProps, prevState) {
    // сделать проверки между prevProps и prevProps
  }
  // componentWillUnmount() {
  // 	// убирать слушатели после componentDidMount
  // }

  handleChange = evt => {
    console.dir(evt.target);
    console.log(evt.target.value);
    this.setState({
      searchQuery: evt.target.value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.searchQuery === '') {
      return;
    }
    this.props.history.push({
      search: `?query=${this.state.searchQuery}`,
    });
    this.serchMovies(this.state.searchQuery);
  };

  render() {
    const { movies, searchQuery } = this.state;
    return (
      <Fragment>
        <header>
          <h1>The star wars movies</h1>
        </header>
        <main>
          <SearchBar
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            searchQuery={searchQuery}
          />
          <MovieList movies={movies} />
          <Details />
        </main>
      </Fragment>
    );
  }
}

export default Movie;
