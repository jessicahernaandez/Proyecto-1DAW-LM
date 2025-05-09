//Pagina que tendra el menu del restaurante donde mostramos los platillos de Mexico y El Salvador.
import React, { useState } from 'react';
import { handleDishExpansion, salvadoranDishes, mexicanDishes } from '../JS/script.js';
import '../CSS/Menu.css';
import 'animate.css';

function Menu() {
  const [expandedDish, setExpandedDish] = useState(null); 

  return (
    <main className="contenedor-pagina">
      <div className="contenedor my-5">
        <h2 className="titulo-seccion animate__animated animate__fadeIn">Nuestro Menú</h2>
        <div className="disposicion-menu">
          {/* Comidas Salvadoreñas - Lado Izquierdo */}
          <div className="seccion-menu">
            <div className="abanico-platillos"> 
            <div className="contenedor-abanico"> {/* Otro contener para que pueda separar las tarjetas de las banderas */}
              {salvadoranDishes.map((dish, index) => (
                //Aseguramos que cada imagen sea clickable y se renderice correctamente
                <div
                  key={index}
                  className={`tarjeta-abanico ${expandedDish === dish.name ? 'expanded' : ''}`}
                  onClick={() => handleDishExpansion(dish.name, expandedDish, setExpandedDish)}
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="imagen-abanico"
                  />
                  <div className="titulo-abanico">{dish.name}</div>
                </div>
              ))}
              </div>
              {/* Aseguramos que la bandera tenga onError para depuración -> Cambie la bandera dentro del mismo
              div del abanico, para que no haya tanto espacio.*/}
              {/* Contenedor para la bandera */}
              <div className="contenedor-bandera">
                <img 
                  src="/imagenes/bandera_sv.jpg" 
                  alt="Bandera de El Salvador" 
                  className="bandera" 
                  onError={(e) => { e.target.src = '/imagenes/placeholder.jpg'; console.log('Bandera no encontrada: /imagenes/bandera_sv.jpg'); }}
                />
              </div>
            </div>
            {expandedDish && salvadoranDishes.find(d => d.name === expandedDish) && (
              <div className="superposicion-detalles-platillo animate__animated animate__fadeIn">
                <div className="contenido-detalles-platillo">
                <div className="interior-detalles-platillo">
                    <img src={salvadoranDishes.find(d => d.name === expandedDish).image} alt={expandedDish} className="imagen-completa" />
                    <div className="texto-detalles-platillo">
                      <h5>{expandedDish}</h5>
                      <p>{salvadoranDishes.find(d => d.name === expandedDish).description}</p>
                      <button onClick={() => setExpandedDish(null)} className="button-on-click">Cerrar</button>
                    </div>
                  </div>
                </div>
              </div>
            )}  
          </div>

          {/* Comidas Mexicanas - Lado Derecho */}
          <div className="seccion-menu">
            <div className="abanico-platillos">
              <div className="contenedor-abanico"> {/* Contenedor para separar los abanicos de la bandera */}
              {mexicanDishes.map((dish, index) => (
                <div
                key={index}
                className={`tarjeta-abanico ${expandedDish === dish.name ? 'expanded' : ''}`}
                onClick={() => handleDishExpansion(dish.name, expandedDish, setExpandedDish)}
              >
                <img src={dish.image} alt={dish.name} className="imagen-abanico"
                />
                <div className="titulo-abanico">{dish.name}</div>
              </div>
            ))}
            </div>
              {/* Contenedor para la bandera */}
              <div className="contenedor-bandera">
                <img 
                  src="/imagenes/bandera_mx.jpg" 
                  alt="Bandera de México" 
                  className="bandera" 
                  onError={(e) => { e.target.src = '/imagenes/placeholder.jpg'; console.log('Bandera no encontrada: /imagenes/bandera_mx.jpg'); }}
                />
              </div>
          </div>
            {expandedDish && mexicanDishes.find(d => d.name === expandedDish) && (
              <div className="superposicion-detalles-platillo animate__animated animate__fadeIn">
                <div className="contenido-detalles-platillo">
                <div className="interior-detalles-platillo">
                    <img src={mexicanDishes.find(d => d.name === expandedDish).image} alt={expandedDish} className="imagen-completa" />
                    <div className="texto-detalles-platillo">
                      <h5>{expandedDish}</h5>
                      <p>{mexicanDishes.find(d => d.name === expandedDish).description}</p>
                      <button onClick={() => setExpandedDish(null)} className="button-on-click">Cerrar</button>
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