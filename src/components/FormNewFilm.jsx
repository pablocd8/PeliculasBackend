import React, { useState } from 'react';
import CrearPelicula from './Crear';  

function Formulario({ agregarPelicula }) {
  const [name, setName] = useState('');  
  const [year, setYear] = useState('');  
  const [image, setImage] = useState(''); 
  const agregarPeliculaHandler = (e) => {
    e.preventDefault(); 

    if (!name || !year || !image) { 
      alert('Por favor, complete todos los campos.');
      return;
    }

    const peliculaNueva = {
      name,    
      year,    
      image,  
    };

    console.log('Enviando película:', peliculaNueva);

    fetch('http://localhost:5000/peliculas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(peliculaNueva),
    })
      .then((response) => response.json())
      .then((data) => {
        agregarPelicula(data);  
        setName(''); 
        setYear(''); 
        setImage(''); 
      })
      .catch((error) => {
        console.error('Error al añadir la película:', error);
        alert('Hubo un error al añadir la película.');
      });
  };

  return (
    <div>
      <h1 className="text-white my-2 text-center text-3xl font-bold">Añadir una Película</h1>
      <form onSubmit={agregarPeliculaHandler} id="form-pelicula">
        <input
          type="text"
          id="Nombre"
          placeholder="Nombre"
          required
          value={name}        
          onChange={(e) => setName(e.target.value)}  
        />
        <input
          type="text"
          id="year"
          placeholder="Año"
          required
          value={year}       
          onChange={(e) => setYear(e.target.value)}  
        />
        <input
          type="text"
          id="imagen"
          placeholder="Link imagen"
          value={image}       
          onChange={(e) => setImage(e.target.value)}  
        />
        <CrearPelicula handleClick={agregarPeliculaHandler} />
      </form>
    </div>
  );
}

export default Formulario;
