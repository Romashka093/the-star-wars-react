import React, { Component, Fragment } from 'react';
import moviesAPI from '../../services/movies-api';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import TitlePage from '../../components/Title/TitlePage';
import css from './Movie.module.css';

class Movie extends Component {
  state = {
    movies: [],
    searchQuery: '',
    foundMovies: [],
    isSorted: false,
    sortedMovies: [],
    isOpen: true,
    movieID: [],
    targetMovie: [],
    charactersFromSelectedMovie: [],
    planetsFromSelectedMovie: [],
  };
  componentDidMount() {
    moviesAPI.getAllMovie().then(movies => {
      this.setState({ movies });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.searchMovies(this.state.searchQuery);
      this.toggleSortMovies();
      const searchedMovies = this.state.movies;
      const foundMovies = searchedMovies.filter(movie =>
        movie.title
          .toLowerCase()
          .includes(this.state.searchQuery.toLowerCase()),
      );
      this.setState({ foundMovies });
    }
  }

  searchMovies = searchQuery => {
    moviesAPI.getAllMovie(searchQuery).then(movies =>
      this.setState({
        movies,
      }),
    );
  };

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

  toggleSortMovies = () => {
    this.sortMovies();
  };

  handleChange = evt => {
    this.setState({
      searchQuery: evt.target.value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.searchQuery === '' || this.state.searchQuery === ' ') {
      return;
    }
  };

  handleOpenItem = evt => {
    evt.preventDefault();
    const targetId = Number(evt.target.id);
    const foFindMovieFtomTarget = this.state.movies;
    const targetMovie = foFindMovieFtomTarget.filter(
      id => id.episode_id === targetId,
    );
    const charactersFromSelectedMovie = targetMovie
      .map(movie => movie.characters)
      .flat();
    const planetsFromSelectedMovie = targetMovie
      .map(movie => movie.planets)
      .flat();

    this.setState({
      isOpen: !this.state.isOpen,
      movieID: targetId,
      targetMovie,
      charactersFromSelectedMovie,
      planetsFromSelectedMovie,
    });
  };

  render() {
    const {
      movies,
      searchQuery,
      foundMovies,
      movieID,
      targetMovie,
      isOpen,
      charactersFromSelectedMovie,
      planetsFromSelectedMovie,
    } = this.state;
    return (
      <Fragment>
        <header>
          <h1 className={css.title}>The Star Wars</h1>
        </header>
        <main className={css.container}>
          <SearchBar
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            searchQuery={searchQuery}
            toggleSortMovies={this.toggleSortMovies.bind(this)}
          />
          {movies.length === 0 ? (
            <TitlePage />
          ) : (
            <MovieList
              isOpen={isOpen}
              movies={movies}
              foundMovies={foundMovies}
              handleOpenItem={this.handleOpenItem}
              movieID={movieID}
              targetMovie={targetMovie}
              charactersFromSelectedMovie={charactersFromSelectedMovie}
              planetsFromSelectedMovie={planetsFromSelectedMovie}
            />
          )}
        </main>
      </Fragment>
    );
  }
}

export default Movie;
