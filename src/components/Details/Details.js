import React, { Component, Fragment } from 'react';
// import moviesAPI from '../../services/movies-api';
// import css from './Details.module.css';

class Details extends Component {
  render() {
    const { movies } = this.props;
    console.log(movies);
    return (
      <Fragment>
        {movies.map(movie => (
          <div>
            <h2 key={movie.episode_id}>{movie.title}</h2>
            <p>description: {movie.opening_crawl}</p>

            <table>
              <thead>
                <tr>
                  <th>director</th>
                  <th>producer</th>
                  <th>release date</th>
                  <th>director</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{movie.director}</td>
                  <td>{movie.producer}</td>
                  <td>{movie.release_date}</td>
                  <td>{movie.director}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </Fragment>
    );
  }
}

export default Details;
