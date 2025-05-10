import React from 'react';
import '../CSS/About.css'; //Importar estilos específicos de About

function About() {
  return (
    <div className="contenedor-acerca-de">
      <h2 className="titulo-acerca-de animate__animated animate__fadeIn">Acerca de Nosotros</h2>
      
      <p className="texto-descripcion animate__animated animate__fadeIn animate__delay-1s">
        Sabor Salvadoreño y Mexicano nació de la pasión por compartir la riqueza de nuestras culturas a través de la comida. 
        Somos un equipo dedicado a traer los auténticos sabores de El Salvador y México a tu mesa, fusionando tradiciones 
        culinarias que han sido transmitidas de generación en generación.
      </p>

      <p className="texto-descripcion animate__animated animate__fadeIn animate__delay-2s">
        Nuestra historia comenzó con una pequeña idea: llevar los aromas, colores y sabores de nuestra tierra a un lugar donde 
        todos puedan disfrutarlos. Inspirados por las recetas familiares de nuestras abuelas y las técnicas ancestrales de la cocina 
        centroamericana, abrimos nuestras puertas para ofrecer una experiencia única que combina lo mejor de ambos mundos.
      </p>

      {/* Imagen de "nosotros" centrada */}
      <div className="contenedor-imagen-acerca animate__animated animate__fadeIn animate__delay-3s">
        <img src="/imagenes/nosotros.jpg" alt="chef" className="imagen-nosotros" />
      </div>

      <p className="texto-descripcion animate__animated animate__fadeIn animate__delay-4s">
        En Sabor Salvadoreño y Mexicano, cada platillo cuenta una historia. Desde nuestras pupusas recién hechas hasta los tacos 
        al pastor preparados con el auténtico adobo tradicional, trabajamos con ingredientes frescos y de la más alta calidad para 
        asegurarnos de que cada bocado sea una celebración de nuestra herencia cultural.
      </p>

      <p className="texto-descripcion animate__animated animate__fadeIn animate__delay-5s">
        Más que un restaurante, somos un espacio donde las familias y amigos se reúnen para compartir momentos inolvidables. Nos 
        esforzamos por crear un ambiente acogedor que refleje la calidez de nuestra gente, con un servicio que te haga sentir como 
        en casa. Nuestra misión es simple: ofrecerte una experiencia gastronómica que deleite tus sentidos y te conecte con las 
        raíces de El Salvador y México.
      </p>

      <p className="texto-descripcion animate__animated animate__fadeIn animate__delay-6s">
        Te invitamos a ser parte de nuestra familia y a descubrir los sabores que han dado forma a nuestras tradiciones. 
        ¡En Sabor Salvadoreño y Mexicano, cada visita es un viaje culinario que no olvidarás!
      </p>
    </div>
  );
}

export default About;