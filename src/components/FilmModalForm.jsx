import React, { useState } from 'react';
import SelectGenres from './Generos';

function FilmModalForm({ isOpen, toggleModal, pelicula, setPeliculas }) {
  const [formData, setFormData] = useState({
    id: pelicula.id,
    name: pelicula.name,
    year: pelicula.year,
    image: pelicula.image,
    genres: pelicula.genres || [], 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const changeFilm = (formData) => {
    fetch(`http://localhost:5000/peliculas/${formData.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setPeliculas((prevPeliculas) =>
            prevPeliculas.map((pelicula) =>
              pelicula.id === formData.id ? { ...pelicula, ...formData } : pelicula
            )
          );
        } else {
          console.error('Error al actualizar la película en el servidor');
        }
      })
      .catch((error) => console.error('Error al actualizar la película seleccionada:', error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeFilm(formData);
    toggleModal();
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Nombre"
            />
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              placeholder="Año"
            />
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              placeholder="Imagen"
            />
            <SelectGenres selectedGenres={formData.genres} setSelectedGenres={(newGenres) => setFormData({ ...formData, genres: newGenres })}
            />
            <button type="submit">Guardar</button>
            <button type="button" onClick={toggleModal}>
              Cerrar
            </button>
          </form>
        </div>
      </div>
    )
  );
}

export default FilmModalForm;
