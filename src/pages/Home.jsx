import React from 'react';
import '../CSS/Home.css'; //Importar sus estilos especificos

function Home() {
  return (
    <div className="contenedor-principal">
      <div className="contenedor-imagen-titulo">
        <h1 className="titulo-principal animate__animated animate__fadeIn">Bienvenidos a Sabor Salvadoreño y Mexicano</h1>
        <p className="pequeña-intro animate__animated animate__fadeIn animate__delay-1s">
          Disfruta de los auténticos sabores de El Salvador y México... <br></br>
          ¡Te invitamos a probar nuestras especialidades y a vivir una experiencia gastronómica única!
        </p>
      </div>
      <div className="contenedor-boton">
        <a href="/menu" className="boton-personalizado animate__animated animate__fadeIn animate__delay-2s">
          Ver el Menú
        </a>
      </div>
      {/* Agregar las banderas */}
      <img src="/imagenes/bandera_sv.jpg" alt="Bandera de El Salvador" className="bandera bandera-salvador animate__animated animate__fadeIn animate__delay-3s" />
      <img src="/imagenes/bandera_mx.jpg" alt="Bandera de México" className="bandera bandera-mexico animate__animated animate__fadeIn animate__delay-4s" />
    </div>
  );
}

export default Home;