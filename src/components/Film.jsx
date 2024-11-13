import React from "react";
import EliminarPelicula from "./Eliminar";
import ActualizarPelicula from "./Update";
function Film({ pelicula, onEliminar , setPeliculas}) {
    return (
        <li> 
            <EliminarPelicula onEliminar={() => onEliminar(pelicula)}/>
            <img src={pelicula.image} alt={pelicula.name} />
            <p>{pelicula.name}</p>
            <p>{pelicula.year}</p>
            <ActualizarPelicula pelicula = {pelicula} setPeliculas = {setPeliculas}/>
        </li>
    )
}

export default Film;
