"use strict";
const price = (a) => {
  let iva = a * 0.21;

  return `precio sin iva ${a} ,el iva es ${iva} y el precio total es de 
  ${a + iva}`;
}
console.log(price(5));

const average = (a , b ,c ,d ) => ((a+b+c+d)/4);

console.log( average (2, 3, 4,5));
console.log(average(5,10,20,35));
console.log (average(2,10,15,100));