//Pagina que tendra el menu del restaurante donde mostramos los platillos de Mexico y El Salvador.
import React, { useState } from 'react';
import { platosSalvadoreños, platosMexicanos } from '../JS/script.js';
import '../CSS/Menu.css';
import 'animate.css';

function Menu() {
  const [platilloSeleccionado, setPlatilloSeleccionado] = useState(null);

  // Combina los platillos salvadoreños y mexicanos
  const todosLosPlatillos = [...platosSalvadoreños, ...platosMexicanos];

  return (
    <main className="contenedor-principal my-5">
      <h2 className="titulo-menu text-center mb-4 animate__animated animate__fadeIn">Nuestro Menú</h2>
      <div className="cuadricula-platillos">
        {todosLosPlatillos.map((platillo, indice) => (
          <div key={indice} className="columna-platillo mb-4">
            <div
              className="tarjeta-platillo h-100 shadow-sm animate__animated animate__zoomIn"
              onClick={() => setPlatilloSeleccionado(platillo)}
            >
              <img src={platillo.image} alt={platillo.name} className="imagen-platillo" />
              <div className="contenido-tarjeta">
                <h5 className="nombre-platillo">{platillo.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ventana emergente para detalles */}
      {platilloSeleccionado && (
        <div className="ventana-detalles animate__animated animate__fadeIn">
          <div className="contenido-ventana">
            <img src={platilloSeleccionado.image} alt={platilloSeleccionado.name} className="imagen-detalles" />
            <h3>{platilloSeleccionado.name}</h3>
            <p>{platilloSeleccionado.description}</p>
            <button
              className="btn btn-danger boton-cerrar"
              onClick={() => setPlatilloSeleccionado(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Menu;