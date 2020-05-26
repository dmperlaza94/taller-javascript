'use strict';
/*Como hemos visto en las clases anteriores, en CSS tenemos dos tipos de cálculo para las dimensiones de un elemento: border-box y content-box. Vamos a realizar un calculador al que le pasaremos 4 parámetros y nos devolverá el ancho del contenido, en caso de ser border-box o el ancho total de la caja, en caso de ser content-box.
La función tendrá 4 parametros: el primero será un booleano para especificar si es border-box o no, el segundo será el ancho del contenido o de la caja entera, el tercero el padding y el cuarto el borde.
Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola para comprobarlo.*/
 function calculador(borderBox,ancho,padding,borde){
     let anchoTotal;
     if (borderBox){
         anchoTotal = ancho -(padding*2 +borde*2);  
     }
     else {
         anchoTotal = ancho + (padding*2 + borde*2);
     }
     return anchoTotal;
 }

console.log(calculador(false,25,5,2));
























































































