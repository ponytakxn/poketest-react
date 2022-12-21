import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import HomePage from './pages/HomePage';
import PokemonDetailsPage from './pages/PokemonDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />
      </Routes>
    </BrowserRouter>   
    
  );
}

export default App;
