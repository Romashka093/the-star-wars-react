import axios from 'axios';

axios.defaults.baseURL = 'http://swapi.dev/api/';

export default {
  async getAllMovie() {
    try {
      const movies = await axios
        .get(`films/`)
        .then(movies => movies.data.results);
      return movies;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  async getMovieById(id) {
    try {
      const movie = await axios.get(`films/${id}`);
      // .then((movie) => movie.data.results)
      console.log(movie);
      return movie;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
