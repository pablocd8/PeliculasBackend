import React from "react";
import Film from "./Film";

function ListaPeliculas({ peliculas }) {
    return (
        <div>
            <h1 className ='text-white my-2 text-center text-3xl font-bold'>Lista de Películas</h1>  
            {console.log(peliculas)}
            <ul> 
                {peliculas.map((pelicula) => (
                    <Film key={pelicula.id} pelicula={pelicula} />
                ))}
            </ul>
        </div>
    );
}

export default ListaPeliculas;
