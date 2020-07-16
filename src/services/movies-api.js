import axios from 'axios';

axios.defaults.baseURL = 'https://swapi.dev/api/';

export default {
  async getAllMovie() {
    try {
      const movies = await axios
        .get(`films/?format=json`)
        .then(movies => movies.data.results);
      return movies;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  async getCharacterById(id) {
    try {
      const character = await axios
        .get(`people/${id}?format=json`)
        .then(data => data.data);
      return character;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  async getPlanetById(id) {
    try {
      const planet = await axios
        .get(`planets/${id}?format=json`)
        .then(planet => planet.data);
      console.log(planet);
      return planet;
      // http://swapi.dev/api/planets/1/
    } catch (error) {}
  },
};
