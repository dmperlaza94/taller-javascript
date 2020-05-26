'use strict'
let edad = document.querySelector('h1').innerHTML;

const horasDia = 24;
const diasAño = 365;

const horasVidaPersona = parseInt(edad) * horasDia * diasAño;
console.log(horasVidaPersona);
console.log(edad);
