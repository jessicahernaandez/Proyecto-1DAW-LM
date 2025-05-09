//Páginas de formulario para reservas en el formulario

import React, { useEffect } from 'react';
import '../CSS/Reservations.css'//Importar estilos específicos de Reservas
import { inicializarValidacion } from '../JS/validacion.js'; //Importar la función de inicialización

//Esto configura el event listener en el formulario (id="formulario-reserva") para que ejecute validarFormulario al enviarse.
function Reservations() {
  //Llamamos a inicializarValidacion() cuando el componente se monta (es decir, cuando la página de reservas se carga).
  useEffect(() => {
    inicializarValidacion(); 
  }, []); //'[]' asegura que solo se ejecute 1 vez.

  return (
    <div className="contenedor-reservas">
      {/* Título de la sección */}
      <h2 className="titulo-reservas mb-4 animate__animated animate__fadeIn">Haz tu Reserva</h2>
      {/* Formulario */}
      <form id="formulario-reserva" className="animate__animated animate__fadeIn animate__delay-1s">
        <div className="mb-3">
          <label htmlFor="nombre" className="etiqueta-formulario">Nombre</label>
          <input type="text" className="campo-formulario" id="nombre" placeholder="Tu nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="etiqueta-formulario">Correo Electrónico</label>
          <input type="email" className="campo-formulario" id="email" placeholder="tu@email.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="fecha" className="etiqueta-formulario">Fecha</label>
          <input type="date" className="campo-formulario" id="fecha"/>
        </div>
        <div className="mb-3">
          <label htmlFor="personas" className="etiqueta-formulario">Número de Personas</label>
          <input type="number" className="campo-formulario" id="personas" min="1" placeholder="1" />
        </div>
        <button type="submit" className="boton-reserva">Reservar</button>
      </form>
      {/*Inicialmente está oculto con style={{ display: 'none' }}.
      -> Cuando validacion.js despacha el evento formSuccess, el listener en validacion.js lo hace visible (display: 'block').
      Después de 3 segundos, el evento formHideSuccess lo oculta nuevamente (display: 'none').*/}
      <div className="mensaje-exito animate__animated animate__fadeIn" style={{ display: 'none' }}>
         ¡Reserva realizada con éxito!
      </div>
    </div>
  );
}

export default Reservations;