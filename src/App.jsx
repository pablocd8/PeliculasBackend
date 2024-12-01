import React from 'react';
import Formulario from './components/FormNewFilm.jsx';
import ListaPeliculas from './components/GridFilms.jsx';
import { PeliculasProvider } from './PeliculasContext';

function App() {
  return (
    <PeliculasProvider>
      <div className="App">
        <Formulario />
        <ListaPeliculas />
      </div>
    </PeliculasProvider>
  );
}

export default App;
