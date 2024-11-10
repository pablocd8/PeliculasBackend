import React from "react";
import EliminarPelicula from "./Eliminar";
import ActualizarPelicula from "./Update";
function Film({ pelicula }) {
    return (
        <li> 
            <EliminarPelicula/>
            <img src={pelicula.image} alt={pelicula.name} />
            <p>{pelicula.name}</p>
            <p>{pelicula.year}</p>
            <ActualizarPelicula/>
        </li>
    );
}

export default Film;
