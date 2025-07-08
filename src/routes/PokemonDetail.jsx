import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPokemonDetail } from '../redux/pokemonSlice';

const PokemonDetail = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { detail, loading } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemonDetail(name));
  }, [name]);

  if (loading || !detail) return <p>Loading...</p>;

  return (
    <div className="detail-page">
      <button onClick={() => navigate(-1)}>&larr; Back</button>
      <h2>{detail.name.toUpperCase()}</h2>
      <img src={detail.sprites.front_default} alt={detail.name} />
      <p>ID: {detail.id}</p>
      <p>Type: {detail.types.map((t) => t.type.name).join(', ')}</p>
      <p>Height: {detail.height}</p>
      <h3>Abilities</h3>
      <ul>
        {detail.abilities.map((a) => (
          <li key={a.ability.name}>{a.ability.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetail;
