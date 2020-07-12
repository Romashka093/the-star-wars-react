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
      throw error;
    }
  },
  async getMovieFromSearch(query) {
    try {
      const movies = await axios
        .get(`films/`)
        .then(movies => movies.data.results);
      return movies;
    } catch (error) {
      throw error;
    }
  },
};
