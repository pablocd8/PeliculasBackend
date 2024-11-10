import React, { useState } from "react";
import Formulario from "./FormNewFilm";
import { peliculas } from "./films";
function CrearPelicula() {


  return (
    <div>
      <button
        className="bg-[#3d53fb] text-white border-none rounded-lg py-2 px-3 cursor-pointer transition-colors duration-300 mt-2 hover:bg-[#6273f6]"
        
      >
        Añadir
      </button>
    </div>
  );
}

export default CrearPelicula;