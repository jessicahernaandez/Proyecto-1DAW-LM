/*Este archivo contiene JavaScript puro para funcionalidades independientes de React
Se puede usar para interactuar con el DOM, validar formularios o añadir efectos.*/

/*Agrega un carrusel en el menu, para mostrar los platillos*/ 
export const initCarousel = () => {
  const cards = document.querySelectorAll('.card');
  let currentIndex = 0;

  const showCard = (index) => {
    cards.forEach((card, i) => {
      card.style.display = i === index ? 'block' : 'none';
    });
  };

  setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  }, 3000); // Cambia cada 3 segundos
};
