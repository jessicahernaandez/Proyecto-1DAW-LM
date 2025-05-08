/* eslint-disable react/react-in-jsx-scope */

//Importa StrictMode para activar verificaciones adicionales en desarrollo
import { StrictMode } from 'react';
//Importa createRoot para renderizar la app en el DOM
import { createRoot } from 'react-dom/client';
//Importa los estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Importa los estilos globales de la app desde la carpeta css.
import './CSS/index.css'; //Como se ha modificado la estructura, tambien modificamos la ruta.
import './CSS/App.css';
// Importa el componente principal de la aplicación.
import App from './App.jsx';


//Renderiza la aplicación en el elemento con id="root" del index.html.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
