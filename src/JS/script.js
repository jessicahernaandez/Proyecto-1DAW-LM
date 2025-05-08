/*Este archivo contiene JavaScript puro para funcionalidades independientes de React
Se puede usar para interactuar con el DOM, validar formularios o añadir efectos.*/

//Función para manejar el clic y la expansión
export const handleDishExpansion = (dishName, expandedDish, setExpandedDish) => {
  setExpandedDish(expandedDish === dishName ? null : dishName);
};

//Lista de platillos Salvadoreños (constantes)
export const salvadoranDishes = [
  {
    name: 'Pupusas',
    image: '/imagenes/pupusas.jpg',
    description: 'Harina gruesa hecha a mano de maíz o harina de arroz, tortilla rellena de queso, chicharrón,  frijoles refritos, o loroco.',
  },
  {
    name: 'Atol de Maiz Tostado',
    image: '/imagenes/tamales.jpg',
    description: 'bebida tradicional, cálida y reconfortante, elaborada con maíz fresco molido, leche, azúcar y un toque de canela.',
  },
  {
    name: 'Pastelitos',
    image: '/imagenes/pastelitos.png',
    description: 'hechas de una masa de maíz suave y rellenas con una variedad de ingredientes: Carne Molida, Pollo deshebrado, Frijoles refritos, papa',
  },
];

//Lista de los platillos Mexicanos (constantes)
export const mexicanDishes = [
  {
    name: 'Tacos al Pastor',
    image: '/imagenes/tacos.jpg',
    description: 'Finas láminas de cerdo marinadas en una mezcla de chiles, achiote y especias, asadas lentamente en trompo para lograr una textura jugosa y llena de sabor.',
  },
  {
    name: 'Enchiladas',
    image: '/imagenes/enchiladas.jpg',
    description: 'Tortillas de maíz rellenas de pollo deshebrado, bañadas en una vibrante salsa de tomatillo, chile serrano y cilantro. Coronadas con crema, queso fresco desmoronado, cebolla cruda y aguacate.',
  },
  {
    name: 'Mole Poblano',
    image: '/imagenes/mole.jpg',
    description: 'Una salsa, elaborada con una mezcla de chiles secos, chocolate, especias y frutos secos, envuelve tiernos trozos de pollo, creando un equilibrio perfecto entre lo dulce, lo picante y lo ahumado.',
  },
];
