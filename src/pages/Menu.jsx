//Pagina que tendra el menu del restaurante donde mostramos los platillos de Mexico y El Salvador.

import React from 'react';

function Menu() {

return (
    <div className="container my-5">
      {/*Titulo de la seccion*/}
      <h2 className="text-center mb-4 animate__animated animate__fadeIn">Nuestro Menú</h2>
      {/*Lista de platillos*/}
      <div className="row">
        {/*Platillo 1: Pupusas*/}
        <div className="col-md-4 mb-4 animate__animated animate__fadeIn animate__delay-1s">
          <div className="card h-100">
            <img src="imagenes/pupusas.jpg" className="card-img-top" alt="Pupusas de queso" />
            <div className="card-body">
              <h5 className="card-title">Pupusas de Queso</h5>
              <p className="card-text">Deliciosas pupusas salvadoreñas rellenas de queso, servidas con curtido y salsa.</p>
            </div>
          </div>
        </div>
        {/* Platillo 2: Tacos al Pastor */}
        <div className="col-md-4 mb-4 animate__animated animate__fadeIn animate__delay-1s">
          <div className="card h-100">
            <img src="imagenes/tacos.jpg" className="card-img-top" alt="Tacos al pastor" />
            <div className="card-body">
              <h5 className="card-title">Tacos al Pastor</h5>
              <p className="card-text">Tacos mexicanos con carne marinada, piña, cilantro y cebolla.</p>
            </div>
          </div>
        </div>
        {/* Platillo 3: Tamales */}
        <div className="col-md-4 mb-4 animate__animated animate__fadeIn animate__delay-1s">
          <div className="card h-100">
            <img src="imagenes/tamales.jpg" className="card-img-top" alt="Tamales de pollo" />
            <div className="card-body">
              <h5 className="card-title">Tamales de Pollo</h5>
              <p className="card-text">Tamales salvadoreños/mexicanos de pollo envueltos en hoja de plátano.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;