/*2 kilos de kiwis a 5€/kg
3 kilos de peras conferencia (no una cualquiera) a 2€/kg
medio kilo de uvas a 4€/kg
*/
'use strict'
let cantidadKiwi = 2;
let cantidadPeras = 3;
let cantidadUvas = 0.5;

const precioKgKiwi = 5;
const precioKgPera = 2;
const precioKgUvas = 4;

let total =(cantidadKiwi * precioKgKiwi) + (cantidadPeras * precioKgPera)  + (cantidadUvas * precioKgUvas)
console.log(total +'euros')