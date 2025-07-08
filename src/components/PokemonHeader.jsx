import React from 'react';
import logo from '../assets/pokemonlogo.png';

const PokemonHeader = () => (
  <div className="pokemon-header">
    <img src={logo} alt="pokemon logo" className="pokemon-logo" />
    <h1>Generation 1</h1>
    <p>151 Pokémon</p>
  </div>
);

export default PokemonHeader;
