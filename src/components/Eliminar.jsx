import React from "react";

function EliminarPelicula({onEliminar}) {
    
    return (
        <div>
            <button className="bg-black text-white p-2 rounded" aria-label="Eliminar película"
            onClick={onEliminar}
            
            >❌</button>
        </div>
    );
}

export default EliminarPelicula;
