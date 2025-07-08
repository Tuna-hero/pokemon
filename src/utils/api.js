import axios from 'axios';
export const fetchAllPokemon = () => axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
