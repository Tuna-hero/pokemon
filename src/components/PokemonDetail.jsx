import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPokemonDetail } from '../redux/pokemonSlice';

function PokemonDetail() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { detail, loading, error } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemonDetail(name));
  }, [dispatch, name]);

  const fallbackImages = {
    'mr-mime': 'https://img.pokemondb.net/sprites/black-white/anim/normal/mr-mime.gif',
    'farfetchd': 'https://img.pokemondb.net/sprites/black-white/anim/normal/farfetchd.gif',
  };

  const imageUrl = fallbackImages[name]
    ? fallbackImages[name]
    : `http://pokestadium.com/sprites/xy/${name}.gif`;

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (!detail) return null;

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textTransform: 'capitalize' }}>{name}</h1>
      <img
        src={imageUrl}
        alt={name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';
        }}
        style={{ width: '150px', height: '150px' }}
      />
      <h3>Height: {detail.height}</h3>
      <h3>Weight: {detail.weight}</h3>
      <h3>Types:</h3>
      <ul>
        {detail.types.map((typeInfo) => (
          <li key={typeInfo.slot}>{typeInfo.type.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonDetail;
