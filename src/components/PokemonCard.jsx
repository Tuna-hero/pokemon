import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const fallbackImages = {
  'mr-mime': 'https://img.pokemondb.net/sprites/black-white/anim/normal/mr-mime.gif',
  'farfetchd': 'https://img.pokemondb.net/sprites/black-white/anim/normal/farfetchd.gif',
};

function PokemonCard({ name }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/pokemon/${name}`);
  };

  const imageName = name.toLowerCase();
  const imageUrl = fallbackImages[imageName]
    ? fallbackImages[imageName]
    : `http://pokestadium.com/sprites/xy/${imageName}.gif`;

  return (
    <div
      onClick={handleClick}
      style={{
        width: '150px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '10px',
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: '#fff',
        transition: 'background 0.3s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = '#ccc')}
      onMouseLeave={(e) => (e.currentTarget.style.background = '#fff')}
    >
      <img
        src={imageUrl}
        alt={name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';
        }}
        style={{ width: '96px', height: '96px' }}
      />
      <p style={{ textTransform: 'capitalize', marginTop: '8px' }}>{name}</p>
    </div>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PokemonCard;
