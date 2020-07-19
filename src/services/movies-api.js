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
      return planet;
      // http://swapi.dev/api/planets/1/
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  // async getStarshipsById(id) {
  //   try {
  //     const starships = await axios
  //       .get(`starships/${id}?format=json`)
  //       .then(starship => starship.data);
  //     console.log(starships);
  //     return starships;
  //     // http://swapi.dev/api/starships/2/,
  //   } catch (error) {
  // console.log(error);
  // throw error;
  // }
  // },

  // async getVehiclesById(id) {
  //   try {
  //     const vehicles = await axios
  //       .get(`vehicles/${id}?format=json`)
  //       .then(vehicle => vehicle.data);
  //     console.log(vehicles);
  //     return vehicles;
  //     // http://swapi.dev/api/vehicles/4/,
  //   } catch (error) {
  // console.log(error);
  // throw error;

  // },

  // async getSpeciesById(id) {
  //   try {
  //     const species = await axios
  //       .get(`species/${id}?format=json`)
  //       .then(species => species.data);
  //     console.log(species);
  //     return species;
  //     // http://swapi.dev/api/species/1/,
  //   } catch (error) {
  // console.log(error);
  // throw error;

  // },
};
