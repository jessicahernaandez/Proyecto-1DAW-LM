/*Validacion para el formulario de Reservations.jsx*/ 

export function validarFormulario(event) {
  event.preventDefault(); //Para evitar que lo envie (solo es simulacion)

  //Obtenemos los valores de los campos de los formularios
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const fecha = document.getElementById('fecha').value;
  const personas = document.getElementById('personas').value;

  //Y con este if verificamos que todos los campos tengan un valor
  if (nombre && email && fecha && personas) {
    //Simula el éxito enviando un evento personalizado
    const successEvent = new CustomEvent('formSuccess'); //Si todos los campos están llenos, crea un evento personalizado formSuccess usando CustomEvent.
    document.dispatchEvent(successEvent);  //Despacha este evento, lo que activa un listener que mostrar un mensaje de exito.
    setTimeout(() => {
      const hideEvent = new CustomEvent('formHideSuccess');
      document.dispatchEvent(hideEvent); }, 3000); //Después de 3 segundos, despacha otro evento formHideSuccess para ocultar el mensaje.
  } else {
    alert('Por favor, completa todos los campos.'); //Si algun campo esta vacio, muestra un mensaje al usuario.
  }
}

//Función para inicializar los event listeners
export function inicializarValidacion() {
  const formulario = document.getElementById('formulario-reserva'); //Busca el formulario en el DOM usando su id="formulario-reserva".
  if (formulario) {
    formulario.addEventListener('submit', validarFormulario); //Si lo encuentra, añade un event listener, que ejecutará validarFormulario cada vez que el usuario haga clic en el botón "Reservar".
  }
}

//Escuchar eventos para mostrar/ocultar el mensaje de éxito
let successTimeout;
document.addEventListener('formSuccess', () => {
  const successElement = document.querySelector('.mensaje-exito'); //Busca el elemento con clase .mensaje-exito
  if (successElement) {
    successElement.style.display = 'block'; //Cambia su estilo a display: 'block' para hacerlo visible.
    clearTimeout(successTimeout); //Asegura que no haya conflictos si se envía el formulario varias veces rápidamente.
  }
});

document.addEventListener('formHideSuccess', () => {
  const successElement = document.querySelector('.mensaje-exito');
  if (successElement) {
    successElement.style.display = 'none'; //Busca el mismo elemento y lo oculta con display: 'none'.
  }
});