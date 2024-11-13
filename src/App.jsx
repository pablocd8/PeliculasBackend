import React, { useState, useEffect } from 'react';
// import './App.css';
import Formulario from './components/FormNewFilm.jsx';
import ListaPeliculas from './components/GridFilms.jsx';

function App() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/peliculas')
      .then((response) => response.json())
      .then((data) => setPeliculas(data))
      .catch((error) => console.error('Error al cargar las películas:', error));
  }, []);


  const agregarPelicula = (nuevaPelicula) => {
    setPeliculas((prevPeliculas) => [...prevPeliculas, nuevaPelicula]);
  };

  const eliminarPelicula = (peliculaAEliminar) => {
    fetch(`http://localhost:5000/peliculas/${peliculaAEliminar.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setPeliculas((prevPeliculas) =>
          prevPeliculas.filter((pelicula) => pelicula.id !== peliculaAEliminar.id)
        );
      })
      .catch((error) => console.error('Error al eliminar la película:', error));
  };

  return (
    <div className="App">
      <Formulario agregarPelicula={agregarPelicula} />
      <ListaPeliculas peliculas={peliculas} onEliminar={eliminarPelicula} setPeliculas={setPeliculas}/>
    </div>
  );
}

export default App;
