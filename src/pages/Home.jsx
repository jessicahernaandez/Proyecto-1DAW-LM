import React from 'react';

function Home() {
  return (
    <div className="contenedor-principal">
      <div className="contenedor-imagen-titulo">
        <h1 className="titulo-principal animate__animated animate__fadeIn">Bienvenidos a Sabor Salvadoreño y Mexicano</h1>
        <p className="pequeña-intro animate__animated animate__fadeIn animate__delay-1s">
          Disfruta de los auténticos sabores de El Salvador y México...
        </p>
      </div>
      <div className="contenedor-boton">
        <a href="/menu" className="boton-personalizado animate__animated animate__fadeIn animate__delay-2s">
          Ver el Menú
        </a>
      </div>
    </div>
  );
}

export default Home;