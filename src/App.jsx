import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';

function App() {
  return (
    <Routes>
      <Route path="/pokemon" element={<PokemonList />} />
      <Route path="/pokemon/:name" element={<PokemonDetail />} />
      <Route path="*" element={<Navigate to="/pokemon" replace />} />
    </Routes>
  );
}

export default App;
