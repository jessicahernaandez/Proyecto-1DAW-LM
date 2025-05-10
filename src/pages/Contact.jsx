import React from 'react';
import '../CSS/Contact.css';

function Contact() {
    return (
      <div className="contenedor-contacto">       
        <h2 className="titulo-contacto mb-4 animate__animated animate__fadeIn">Contáctanos</h2>
      <div className="datos-contacto animate__animated animate__fadeIn animate__delay-1s">
        <p className="texto-contacto"><strong>Dirección:</strong> Calle Principal 123...</p>
        <p className="texto-contacto"><strong>Teléfono:</strong> +503 1234-5678</p>
        <p className="texto-contacto"><strong>Correo:</strong> info@saborsalvadoreñoymexicano.com</p>
        <p className="texto-contacto"><strong>Horario:</strong> Lunes a Domingo, 10:00 AM - 10:00 PM</p>
      </div>
      
      {/*Mapa de Google Maps*/}
      <div className="contenedor-mapa my-4 animate__animated animate__fadeIn animate__delay-2s">
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29232.14870044631!2d-3.594219952184864!3d40.42864373754288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4230128e2ea901%3A0x1f970f17650f0b04!2sCoslada%2C%20Madrid!5e1!3m2!1ses!2ses!4v1746742865548!5m2!1ses!2ses" 
      width="400" 
      height="300" 
      style={{ border: 0, borderRadius: '10px' }}
      loading="lazy" 
      title="Ubicación del restaurante">       
      </iframe>
      </div>
    </div>
  );
}

export default Contact;