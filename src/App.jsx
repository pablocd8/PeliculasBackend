import { useState } from 'react';
import Formulario from './FormNewFilm.jsx';
import './App.css';
import ListaPeliculas from './GridFilms.jsx';
import { peliculas } from './films.js';

function App() {
  return (
    <div className="App">
      <Formulario/>
      <ListaPeliculas peliculas={peliculas}/>
    </div>
  );
}

export default App;
