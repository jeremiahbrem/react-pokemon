import React from 'react';
import './App.css';
import Pokegame from './Pokegame.js';

function App() {
  return (
    <div className="App">
      <h1 className="App-headline">Pokedex</h1>
      <Pokegame />
    </div>
  );
}

export default App;

// {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},