import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonList } from '../redux/pokemonSlice';
import PokemonCard from './PokemonCard';

function PokemonList() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.pokemon);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  const filteredList = list.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Pokemon List</h1>
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px', padding: '8px', width: '300px' }}
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {filteredList.map((pokemon) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} />
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
