import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});


export const getPokemonList = (limit = 151) =>
  api.get(`/pokemon?limit=${limit}`).then(res => res.data);


export const getPokemonDetail = (name) =>
  api.get(`/pokemon/${name}`).then(res => res.data);

export default api;
