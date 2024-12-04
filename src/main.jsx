import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Game from './components/Game/Game';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />  {/* Home page */}
      <Route path="/game" element={<Game />} />  {/* Game page */}
    </Routes>
  );
}

export default App;
