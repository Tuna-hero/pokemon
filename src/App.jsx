import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PokemonList from './routes/PokemonList';
import PokemonDetail from './routes/PokemonDetail';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PokemonList />} />
      <Route path="/pokemon/:name" element={<PokemonDetail />} />
    </Routes>
  );
};

export default App;