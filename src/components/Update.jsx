import React, {useState} from 'react'
import Formulario from "./FormNewFilm";
import FilmModalForm from './FilmModalForm';

function ActualizarPelicula({pelicula , setPeliculas}){
    const [isOpen, setIsOpen] = useState(false);
    // Función para abrir/cerrar el modal
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    return(
        <div>
            <button className="bg-[#3d53fb] text-white border-none rounded-lg py-2 px-3 cursor-pointer transition-colors duration-300 mt-2 hover:bg-[#6273f6]"
            onClick={toggleModal}
>
Editar Película
            </button>
            <FilmModalForm isOpen={isOpen} toggleModal={toggleModal} pelicula={pelicula} setPeliculas={setPeliculas}/>
        </div>
    )
}
export default ActualizarPelicula;