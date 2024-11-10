import React,{ userState } from "react";
import Formulario from "./FormNewFilm";
import { peliculas } from "./films";

const AñadirPelicula = () =>{
    const handleOnSubmit =(peliculas) =>{
        console.log(peliculas);
    };
    return (
        <>
          <Formulario handleOnSubmit={handleOnSubmit} />
        </>
      );
};
export default AñadirPelicula;

