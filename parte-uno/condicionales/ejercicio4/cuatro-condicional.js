/*El primer año de un perro equivale a 15 años de humano
El segundo año de un perro equivale a nueve años de humano
A partir del tercero, cada año de perro equivale a 5 años de humano.
*/
'use strict'; 
 var edadPerro ="";
 var edadHumado = 5;
 var edadPerrodosaños = 24;

  edadPerro = parseInt(prompt('digite la edad del perro'));
 if ( edadPerro == 1){
     alert('su perro tiene 15 años');
 } else if (edadPerro < 3){
     alert( `su perro tiene 24 años`);
 }else if(edadPerro > 3){
   alert (`la edad de su perro es ${(edadHumado * (edadPerro-2)) + edadPerrodosaños}`);
 }