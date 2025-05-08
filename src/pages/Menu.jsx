//Pagina que tendra el menu del restaurante donde mostramos los platillos de Mexico y El Salvador.
import React, { useState } from 'react';
import { handleDishExpansion, salvadoranDishes, mexicanDishes } from '../JS/script.js';

function Menu() {
  const [expandedDish, setExpandedDish] = useState(null); 

  return (
    <main className="page-container">
      <div className="container my-5">
        <h2 className="section-title animate__animated animate__fadeIn">Nuestro Menú</h2>
        <div className="menu-layout">
          {/* Comidas Salvadoreñas - Lado Izquierdo */}
          <div className="menu-section">
            <div className="dish-fan"> {/*Modificamos el nombre*/}
            <div className="fan-container"> {/* Otro contener para que pueda separar las tarjetas de las banderas */}
              {salvadoranDishes.map((dish, index) => (
                //Aseguramos que cada imagen sea clickable y se renderice correctamente
                <div
                  key={index}
                  className={`fan-card ${expandedDish === dish.name ? 'expanded' : ''}`}
                  onClick={() => handleDishExpansion(dish.name, expandedDish, setExpandedDish)}
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="fan-image"
                  />
                  <div className="fan-title">{dish.name}</div>
                </div>
              ))}
              </div>
              {/* Aseguramos que la bandera tenga onError para depuración -> Cambie la bandera dentro del mismo
              div del abanico, para que no haya tanto espacio.*/}
              {/* Contenedor para la bandera */}
              <div className="flag-container">
                <img 
                  src="/imagenes/bandera_sv.jpg" 
                  alt="Bandera de El Salvador" 
                  className="flag" 
                  onError={(e) => { e.target.src = '/imagenes/placeholder.jpg'; console.log('Bandera no encontrada: /imagenes/bandera_sv.jpg'); }}
                />
              </div>
            </div>
            {expandedDish && salvadoranDishes.find(d => d.name === expandedDish) && (
              <div className="dish-details-overlay animate__animated animate__fadeIn">
                <div className="dish-details-content">
                <div className="dish-details-inner">
                    <img src={salvadoranDishes.find(d => d.name === expandedDish).image} alt={expandedDish} className="full-image" />
                    <div className="dish-details-text">
                      <h5>{expandedDish}</h5>
                      <p>{salvadoranDishes.find(d => d.name === expandedDish).description}</p>
                      <button onClick={() => setExpandedDish(null)} className="btn btn-secondary btn-sm">Cerrar</button>
                    </div>
                  </div>
                </div>
              </div>
            )}  
          </div>

          {/* Comidas Mexicanas - Lado Derecho */}
          <div className="menu-section">
            <div className="dish-fan">
              <div className="fan-container"> {/* Contenedor para separar los abanicos de la bandera */}
              {mexicanDishes.map((dish, index) => (
                <div
                key={index}
                className={`fan-card ${expandedDish === dish.name ? 'expanded' : ''}`}
                onClick={() => handleDishExpansion(dish.name, expandedDish, setExpandedDish)}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="fan-image"
                />
                <div className="fan-title">{dish.name}</div>
              </div>
            ))}
            </div>
              {/* Contenedor para la bandera */}
              <div className="flag-container">
                <img 
                  src="/imagenes/bandera_mx.jpg" 
                  alt="Bandera de México" 
                  className="flag" 
                  onError={(e) => { e.target.src = '/imagenes/placeholder.jpg'; console.log('Bandera no encontrada: /imagenes/bandera_mx.jpg'); }}
                />
              </div>
          </div>
            {expandedDish && mexicanDishes.find(d => d.name === expandedDish) && (
              <div className="dish-details-overlay animate__animated animate__fadeIn">
                <div className="dish-details-content">
                <div className="dish-details-inner">
                    <img src={mexicanDishes.find(d => d.name === expandedDish).image} alt={expandedDish} className="full-image" />
                    <div className="dish-details-text">
                      <h5>{expandedDish}</h5>
                      <p>{mexicanDishes.find(d => d.name === expandedDish).description}</p>
                      <button onClick={() => setExpandedDish(null)} className="btn btn-secondary btn-sm">Cerrar</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Menu;