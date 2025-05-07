//Páginas de formulario para reservas en el formulario

import React from 'react';

function Reservations() {
  return (
    <div className="container my-5">
      {/* Título de la sección */}
      <h2 className="text-center mb-4 animate__animated animate__fadeIn">Haz tu Reserva</h2>
      {/* Formulario */}
      <form id="reservation-form" className="animate__animated animate__fadeIn animate__delay-1s">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="email" placeholder="tu@email.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="fecha" className="form-label">Fecha</label>
          <input type="date" className="form-control" id="fecha" />
        </div>
        <div className="mb-3">
          <label htmlFor="personas" className="form-label">Número de Personas</label>
          <input type="number" className="form-control" id="personas" min="1" placeholder="1" />
        </div>
        <button type="submit" className="btn btn-primary">Reservar</button>
      </form>
    </div>
  );
}

export default Reservations;