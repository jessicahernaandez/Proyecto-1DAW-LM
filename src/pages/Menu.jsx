//Pagina que tendra el menu del restaurante donde mostramos los platillos de Mexico y El Salvador.
import React, { useState } from 'react';
import { platosSalvadoreños, platosMexicanos } from '../JS/script.js';
import '../CSS/Menu.css';
import 'animate.css';

//Crea una variable de estado (platilloSeleccionado) que inicialmente es null y 
//una función (setPlatilloSeleccionado) para actualizarla. 
//Esto controla qué platillo se muestra en el modal.
function Menu() {
  const [platilloSeleccionado, setPlatilloSeleccionado] = useState(null);

  //Usa el operador spread (...) para combinar los arreglos de 
  //platillos salvadoreños y mexicanos en un solo arreglo (todosLosPlatillos).
  const todosLosPlatillos = [...platosSalvadoreños, ...platosMexicanos];

  return (
    <main className="contenedor-principal my-5">
      <h2 className="titulo-menu text-center mb-4 animate__animated animate__fadeIn">Nuestro Menú</h2>
      <div className="cuadricula-platillos">
        {/*Itera sobre todosLosPlatillos y crea una tarjeta por cada platillo.*/}
        {todosLosPlatillos.map((platillo, indice) => (
          //Define una columna para cada tarjeta con un margen inferior (mb-4).
          <div key={indice} className="columna-platillo mb-4">
            <div className="tarjeta-platillo h-100 shadow-sm animate__animated animate__zoomIn"
            onClick={() => setPlatilloSeleccionado(platillo)}> {/*Es la tarjeta clicable.*/}
              <img src={platillo.image} alt={platillo.name} className="imagen-platillo" /> {/*Muestra la imagen del platillo. */}
              <div className="contenido-tarjeta">
                <h5 className="nombre-platillo">{platillo.name}</h5> {/*Muestra el nombre dentro de la tarjeta.*/}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*Ventana emergente para detalles
      -> Renderiza la ventana solo si platilloSeleccionado no es null.*/}
      {platilloSeleccionado && (
        <div className="ventana-detalles animate__animated animate__fadeIn">
          <div className="contenido-ventana"> {/*Contiene los detalles del platillo.*/}
            {/*Muestra la imagen del platillo seleccionado.*/}
            <img src={platilloSeleccionado.image} alt={platilloSeleccionado.name} className="imagen-detalles" />
            {/*Muestra el nombre y la descripción.*/}
            <h3>{platilloSeleccionado.name}</h3>
            <p>{platilloSeleccionado.description}</p>
            <button className="btn btn-danger boton-cerrar"
             onClick={() => setPlatilloSeleccionado(null)}>
              Cerrar
            </button> {/*Botón para cerrar la ventana, usando Bootstrap y restaurando el estado a null.*/}
          </div>
        </div>
      )}
    </main>
  );
}

export default Menu;