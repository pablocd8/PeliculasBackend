import React from 'react';
import Film from './Film';
import { usePeliculas } from '../PeliculasContext';

function ListaPeliculas() {
  const { peliculas, eliminarPelicula } = usePeliculas();

  return (
    <div>
      <h1 className='text-white my-2 text-center text-3xl font-bold'>Lista de Películas</h1>
      <ul>
        {peliculas.map((pelicula) => (
          <Film key={pelicula.id} pelicula={pelicula} onEliminar={eliminarPelicula} />
        ))}
      </ul>
    </div>
  );
}

export default ListaPeliculas;
