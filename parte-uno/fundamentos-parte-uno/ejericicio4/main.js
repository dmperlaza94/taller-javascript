'use strict';

document.getElementById('first').addEventListener('mouseover',usuario1);
document.getElementById('second').addEventListener('mouseover',usuario2);

function usuario1(e){    
    document.querySelector('h1').innerHTML='<h1>El estudiante seleccionado es: Diana</h1>';
    e.preventDefaul();
}

function usuario2(e){       
    document.querySelector('h1').innerHTML='<h1>El estudiante seleccionada es: Diego Lopez</h1>';
    e.preventDefaul();
}