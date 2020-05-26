"use strict";
function price(a) {
  let iva = a * 0.21;

  return `precio sin iva ${a} ,el iva es ${iva} y el precio total es de 
  ${a + iva}`;
}
console.log(price(5));
