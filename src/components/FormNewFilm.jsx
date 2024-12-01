import React, { useState } from 'react';
import SelectGenres from './Generos';
import './App.css';
import { usePeliculas } from '../PeliculasContext';

function Formulario() {
  const { agregarPelicula } = usePeliculas();
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState('');
  const [genres, setGenres] = useState([]); 
  const [newGenre, setNewGenre] = useState(''); 

  const agregarPeliculaHandler = (e) => {
    e.preventDefault();

    if (!name || !year || !image) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const peliculaNueva = { name, year, image, genres };

    fetch('http://localhost:5000/peliculas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(peliculaNueva),
    })
      .then((response) => response.json())
      .then((data) => {
        agregarPelicula(data);
        setName('');
        setYear('');
        setImage('');
        setGenres([]);
        setNewGenre('');
      })
      .catch((error) => {
        console.error('Error al añadir la película:', error);
        alert('Hubo un error al añadir la película.');
      });
  };

  const handleAddGenre = (e) => {
    e.preventDefault();
    if (newGenre && !genres.includes(newGenre)) {
      setGenres([...genres, newGenre]);
      setNewGenre('');
    } else {
      alert('Por favor ingrese un género válido y no repetido.');
    }
  };

  const handleDeleteGenre = (genre) => {
    setGenres(genres.filter(g => g !== genre));
  };

  return (
    <div>
      <h1 className="text-white my-2 text-center text-3xl font-bold">Añadir una Película</h1>
      <form onSubmit={agregarPeliculaHandler} id="form-pelicula">
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Año"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Link imagen"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Crear</button>
        <div>
          <input
            type="text"
            value={newGenre}
            onChange={(e) => setNewGenre(e.target.value)}
            placeholder="Añadir nuevo género"
          />
          <button onClick={handleAddGenre}>Añadir Género</button>
        </div>
        <SelectGenres selectedGenres={genres} setSelectedGenres={setGenres} />
      </form>
    </div>
  );
}

export default Formulario;
