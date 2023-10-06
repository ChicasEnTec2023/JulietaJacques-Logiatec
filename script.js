/*let archivo = document.getElementById ("archivo")


let totalPuntos=0;
const sumarPuntos=(puntosASumar)=>{
   totalPuntos += puntosASumar

   document.getElementById ("sumaPunto").innerHTML = totalPuntos
}
archivo.addEventListener ("click", ()=>sumar (100))

const buttons = document.getElementsByClassName("btnBeneficio");
// Obtiene una referencia al elemento <p> y al botón*/
const puntosUsuario = document.getElementById('puntosUsuario');
const sumarPuntosButton = document.getElementById('archivo');

// Variable para almacenar la cantidad de puntos
let puntos = 0;

// Función para sumar 100 puntos
function sumar100Puntos() {
    puntos += 100;
    puntosUsuario.textContent = puntos;
}

// Agrega un evento de clic al botón
sumarPuntosButton.addEventListener('click', function () {
    sumar100Puntos();
});




// Obtiene una referencia a los elementos HTML que necesitas
const puntosUsuarioElement = puntosUsuario;
const btnBeneficio1 = document.getElementById('btnBeneficio1');
const btnBeneficio2 = document.getElementById('btnBeneficio2');
const btnBeneficio3 = document.getElementById('btnBeneficio3');
const btnBeneficio4 = document.getElementById('btnBeneficio4');
const btnBeneficio5 = document.getElementById('btnBeneficio5');
const btnBeneficio6 = document.getElementById('btnBeneficio6');
// Agrega aquí referencias a otros botones si es necesario

// Función para comprobar si el usuario tiene suficientes puntos
function verificarPuntos(cantidadRequerida) {
    return puntos >= cantidadRequerida;
}

// Agrega eventos de clic a los botones
btnBeneficio1.addEventListener('click', function () {
    if (verificarPuntos(150)) {
        puntos -= 150; // Resta los puntos requeridos
        puntosUsuarioElement.textContent = puntosUsuario; // Actualiza la visualización de puntos
        alert('Tenes suficientes Puntos. ¡Disfruta tu recompensa!');
    } else {
        alert('No tenes suficientes puntos para obtener este beneficio.');
    }
});

btnBeneficio2.addEventListener('click', function () {
    if (verificarPuntos(500)) {
        puntos -= 500;
        puntosUsuarioElement.textContent = puntosUsuario;
        alert('Tenes suficientes Puntos. ¡Disfruta tu recompensa!');
    } else {
        alert('No tenes suficientes puntos para obtener este beneficio.');
    }
});

btnBeneficio3.addEventListener('click', function () {
    if (verificarPuntos(1500)) {
        puntos -= 1500;
        puntosUsuarioElement.textContent = puntosUsuario;
        alert('Tenes suficientes Puntos. ¡Disfruta tu recompensa!');
    } else {
        alert('No tenes suficientes puntos para obtener este beneficio.');
    }
});

btnBeneficio4.addEventListener('click', function () {
   if (verificarPuntos(700)) {
       puntos -= 700;
       puntosUsuarioElement.textContent = puntosUsuario;
       alert('Tenes suficientes Puntos. ¡Disfruta tu recompensa!');
   } else {
       alert('No tenes suficientes puntos para obtener este beneficio.');
   }
});

btnBeneficio5.addEventListener('click', function () {
   if (verificarPuntos(1200)) {
       puntos -= 1200;
       puntosUsuarioElement.textContent = puntosUsuario;
       alert('Tenes suficientes Puntos. ¡Disfruta tu recompensa!');
   } else {
       alert('No tenes suficientes puntos para obtener este beneficio.');
   }
});

btnBeneficio6.addEventListener('click', function () {
   if (verificarPuntos(750)) {
       puntos -= 750;
       puntosUsuarioElement.textContent = puntosUsuario;
       alert('Tenes suficientes Puntos. ¡Disfruta tu recompensa!');
   } else {
       alert('No tenes suficientes puntos para obtener este beneficio.');
   }
});