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
    foundMovies: [],
    isSorted: true,
    sortedMovies: [],
  };
  componentDidMount() {
    moviesAPI.getAllMovie().then(movies => {
      this.setState({ movies });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevState :>> ', prevState);
    console.log('this.state :>> ', this.state);
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.searchMovies(this.state.searchQuery);
      const searchedMovies = this.state.movies;
      const foundMovies = searchedMovies.filter(movie =>
        movie.title
          .toLowerCase()
          .includes(this.state.searchQuery.toLowerCase()),
      );
      this.setState({ foundMovies });
      this.toggleSortMovies();
    }
  }
  // componentWillUnmount() {
  // 	// убирать слушатели после componentDidMount
  // }

  sortMovies() {
    const sortedMovies = this.state.movies;
    let newSortedMovies = sortedMovies;

    if (this.state.isSorted) {
      newSortedMovies = sortedMovies.sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1,
      );
    } else {
      newSortedMovies = sortedMovies.sort((a, b) =>
        a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1,
      );
    }
    this.setState({
      isSorted: !this.state.isSorted,
      sortedMovies: newSortedMovies,
    });

    const sortedMoviesFromFoundMovies = this.state.foundMovies;
    let newSortedMoviesFromFoundMovies = sortedMoviesFromFoundMovies;

    if (this.state.isSorted) {
      newSortedMoviesFromFoundMovies = sortedMoviesFromFoundMovies.sort(
        (a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1),
      );
    } else {
      newSortedMoviesFromFoundMovies = sortedMoviesFromFoundMovies.sort(
        (a, b) => (a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1),
      );
    }
    this.setState({
      isSorted: !this.state.isSorted,
      sortedMovies: newSortedMoviesFromFoundMovies,
    });
  }

  toggleSortMovies(evt) {
    this.sortMovies();
  }

  searchMovies = searchQuery => {
    moviesAPI.getAllMovie(searchQuery).then(movies =>
      this.setState({
        movies,
      }),
    );
  };

  handleChange = evt => {
    this.setState({
      searchQuery: evt.target.value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.searchQuery === '') {
      return;
    }
  };

  render() {
    const { movies, searchQuery, foundMovies } = this.state;
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
            toggleSortMovies={this.toggleSortMovies.bind(this)}
          />
          <MovieList movies={movies} foundMovies={foundMovies} />
          <Details />
        </main>
      </Fragment>
    );
  }
}

export default Movie;
