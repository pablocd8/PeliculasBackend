import React, { useState } from 'react';
import './App.css';

function FilmModalForm({ isOpen, toggleModal, pelicula , setPeliculas }) {
  const [formData, setFormData] = useState({
    id: pelicula.id,
    name: pelicula.name,
    year: pelicula.year,
    image: pelicula.image,
  });

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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    changeFilm(formData);
    e.preventDefault();
    console.log("Film Data:", formData);
    toggleModal(); // Cierra el modal al enviar el formulario
  };

  return (
    <div className="FilmModalForm">
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>

              <div className="form-group">
                <label>Year:</label>
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>

              <div className="form-group">
                <label>Image:</label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>

              <div className="modal-buttons">
                <button type="submit" className="submit-btn">Submit</button>
                <button type="button" onClick={toggleModal} className="close-btn">Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilmModalForm;
