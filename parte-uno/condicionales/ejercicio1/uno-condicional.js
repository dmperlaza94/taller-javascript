'use strict'; //ayuda a mostrar errores
const constante='http://placehold.it/300x300';
var variable='';
const boxedElement = document.querySelector('.boxed');

variable=prompt('');

if (variable !='http://www.fillmurray.com/300/300'){
    variable=constante;
    boxedElement.innerHTML=` 
    <img src="${variable}" alt="">`;
}
else if(variable=='http://www.fillmurray.com/300/300'){

    boxedElement.innerHTML=` 
    <img src="${variable}" alt="">`;
}