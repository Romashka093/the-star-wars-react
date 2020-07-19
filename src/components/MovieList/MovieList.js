import React, { Component } from 'react';
import ItemMovie from '../../ui/ItemMovie/ItemMovie';
import Details from '../Details/Details';

class MovieList extends Component {
  // state = {};

  render() {
    const {
      movies,
      foundMovies,
      handleOpenItem,
      movieID,
      targetMovie,
      isOpen,
      charactersFromSelectedMovie,
      planetsFromSelectedMovie,
    } = this.props;

    return (
      <ul>
        {foundMovies.length === 0
          ? movies.map(movie => (
              <li key={movie.episode_id}>
                <ItemMovie
                  id={movie.episode_id}
                  handleOpenItem={handleOpenItem}
                  name={movie.title}
                />
                {!isOpen && movieID === movie.episode_id && (
                  <Details
                    movieID={movieID}
                    targetMovie={targetMovie}
                    charactersFromSelectedMovie={charactersFromSelectedMovie}
                    planetsFromSelectedMovie={planetsFromSelectedMovie}
                  />
                )}
              </li>
            ))
          : foundMovies.map(movie => (
              <li key={movie.episode_id}>
                <ItemMovie
                  id={movie.episode_id}
                  handleOpenItem={handleOpenItem}
                  name={movie.title}
                />
                {!isOpen && movieID === movie.episode_id && (
                  <Details
                    movieID={movieID}
                    targetMovie={targetMovie}
                    charactersFromSelectedMovie={charactersFromSelectedMovie}
                    planetsFromSelectedMovie={planetsFromSelectedMovie}
                  />
                )}
              </li>
            ))}
      </ul>
    );
  }
}

export default MovieList;

// const MovieList = ({
//   movies,
//   foundMovies,
//   handleOpenItem,
//   movieID,
//   targetMovie,
//   isOpen,
//   charactersFromSelectedMovie,
//   planetsFromSelectedMovie,
// }) => {
//   console.log('foundMovies :>> ', foundMovies);
//   return (
// <ul>
//   {foundMovies.length === 0
//     ? movies.map(movie => (
//         <li key={movie.episode_id}>
//           <ItemMovie
//             id={movie.episode_id}
//             handleOpenItem={handleOpenItem}
//             name={movie.title}
//           />
//           {!isOpen && movieID === movie.episode_id && (
//             <Details
//               movieID={movieID}
//               targetMovie={targetMovie}
//               charactersFromSelectedMovie={charactersFromSelectedMovie}
//               planetsFromSelectedMovie={planetsFromSelectedMovie}
//             />
//           )}
//         </li>
//       ))
//     : foundMovies.map(movie => (
//         <li key={movie.episode_id}>
//           <ItemMovie
//             id={movie.episode_id}
//             handleOpenItem={handleOpenItem}
//             name={movie.title}
//           />
//           {!isOpen && movieID === movie.episode_id && (
//             <Details
//               movieID={movieID}
//               targetMovie={targetMovie}
//               charactersFromSelectedMovie={charactersFromSelectedMovie}
//               planetsFromSelectedMovie={planetsFromSelectedMovie}
//             />
//           )}
//         </li>
//       ))}
// </ul>
//   );
// };

// export default MovieList;
