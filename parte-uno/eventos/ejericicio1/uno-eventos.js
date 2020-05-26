'use strict'
function cambioTexto (){
//aqui se escribe la sentencia con la tarea a realizar
document.getElementById("parrafo").innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";

}
document.getElementById("submit").onclick = function(){
   cambioTexto();
}


/*Crear una página HTML con un párrafo en el que ponga Hola y un botón. Usando JavaScript, cambiar ese texto por "Mi primer click, ¡ole yo y la mujer que me parió!" cuando se pulse el botón.*/