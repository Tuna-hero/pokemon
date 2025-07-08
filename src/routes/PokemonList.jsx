import React, { useEffect, useState } from 'react';
import { fetchAllPokemon } from '../utils/api';
import PokemonCard from '../components/PokemonCard';
import PokemonHeader from '../components/PokemonHeader';
import SearchBar from '../components/SearchBar';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllPokemon()
      .then((res) => setPokemonList(res.data.results))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filtered = pokemonList.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="list-page">
      <PokemonHeader />
      <SearchBar value={search} onChange={setSearch} />
      {loading ? <p>Loading...</p> : (
        <div className="pokemon-list">
          {filtered.map((p) => (
            <PokemonCard key={p.name} name={p.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
