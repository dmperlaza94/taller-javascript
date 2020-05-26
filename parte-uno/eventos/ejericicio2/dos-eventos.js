'use strict'
//Crear una página HTML con un input de tipo texto para introducir tu nombre y un botón. Al pinchar sobre el botón, imprimir en la consola el mensaje 'Hola ', con el nombre que aparece en el input de texto.
const user = document.getElementById('informacion');
const submit = document.getElementById("boton");

submit.addEventListener('click', () => console.log(`hola ${user.value}`));

   