import React, { useState } from 'react';
import ListaPeliculas from './GridFilms';
import CrearPelicula from './Crear';
function Formulario({peliculas}) {

  return (
    <div>
      <h1 className='text-white my-2 text-center text-3xl font-bold'>Añadir una Película</h1>
      <form id="form-pelicula">
        <input type="text" id="Nombre" placeholder="Nombre" required />
        <input type="text" id="year" placeholder="Año" required />
        <input type="text" id="imagen" placeholder="Link imagen" />
        <CrearPelicula/>
      </form>
    </div>
  );
}

export default Formulario;
