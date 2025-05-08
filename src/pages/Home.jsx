import React from 'react';

function Home() {
  return (
    <div className="container text-center my-5">
      <h1 className="display-4 animate__animated animate__fadeIn">Bienvenidos a Sabor Salvadoreño y Mexicano
      </h1>
      <p className="lead animate__animated animate__fadeIn animate__delay-1s">
        Disfruta de los auténticos sabores de El Salvador y México...
      </p>
      <a href="/menu" className="btn btn-primary btn-lg mt-3 animate__animated animate__fadeIn animate__delay-2s">
        Ver el Menú
      </a> </div>
  );
}

export default Home;