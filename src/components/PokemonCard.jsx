import React from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ name }) => {
  const navigate = useNavigate();
  const imageUrl = `https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`;

  return (
    <div className="pokemon-card" onClick={() => navigate(`/pokemon/${name}`)}>
      <img src={imageUrl} alt={name} />
      <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
    </div>
  );
};

export default PokemonCard;
