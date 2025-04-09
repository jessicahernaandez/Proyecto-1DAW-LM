import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mt-5">
      <div className="text-center">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-primary my-4">¡Mi Proyecto Real!</h1>
      <div className="card p-4 shadow">
        <button
          className="btn btn-primary mb-3"
          onClick={() => setCount(count + 1)}
        >
          Clics: {count}
        </button>
        <p>
          Edita <code>src/App.jsx</code> para ver los cambios en tiempo real.
        </p>
      </div>
    </div>
  );
}

export default App;