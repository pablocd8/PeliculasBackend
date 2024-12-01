import React, { createContext, useContext, useState, useEffect } from 'react';

const PeliculasContext = createContext();


export const PeliculasProvider = ({ children }) => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetchPeliculas();
  }, []);

  const fetchPeliculas = async () => {
    try {
      const response = await fetch('http://localhost:5000/peliculas');
      const data = await response.json();
      setPeliculas(data);
    } catch (error) {
      console.error('Error al cargar las películas:', error);
    }
  };

  const agregarPelicula = (nuevaPelicula) => {
    setPeliculas((prevPeliculas) => [...prevPeliculas, nuevaPelicula]);
  };

  const eliminarPelicula = async (peliculaAEliminar) => {
    try {
      await fetch(`http://localhost:5000/peliculas/${peliculaAEliminar.id}`, {
        method: 'DELETE',
      });
      setPeliculas((prevPeliculas) =>
        prevPeliculas.filter((pelicula) => pelicula.id !== peliculaAEliminar.id)
      );
    } catch (error) {
      console.error('Error al eliminar la película:', error);
    }
  };

  return (
    <PeliculasContext.Provider
      value={{ peliculas, agregarPelicula, eliminarPelicula }}
    >
      {children}
    </PeliculasContext.Provider>
  );
};
export const usePeliculas = () => useContext(PeliculasContext);
