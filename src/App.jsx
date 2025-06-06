/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; /*Herramientras para manejar la navegación*/ 
import 'bootstrap/dist/css/bootstrap.min.css'; /*Estilos personalizados de BootStrap (como la barra de navegacion que hemos usado) */
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; /*El JavaScript de BootStrap para funcionalidades interactivas*/
/*Importaciones de las paginas creadas.*/
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Reservations from './pages/Reservations';
import Contact from './pages/Contact';
import './CSS/App.css';

//Componente principal de la aplicación (nuestro esqueleto)
function App() {

  return (

    <Router basename="/">
    {/*Barra de navegación con Bootstrap*/}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">Sabor Salvadoreño y Mexicano</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">Menú</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">Acerca de</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reservations">Reservas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/*Definición de rutas*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contact" element={<Contact />} />
       </Routes>

    </Router>
  );
}

export default App;
