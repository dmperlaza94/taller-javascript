/*Vamos a escribir un pequeño programa que nos permita saber cuál será el siguiente año bisiesto. Para aportar un poco de información, sabemos que los años bisiestos se producen cada cuatro años a partir del año 0. El primer año bisiesto fue 4, el segundo 8 y así progresivamente. La idea de este ejercicio es que, si estuviésemos en el año 3, al ejecutarlo apareciese en la consola el texto "4", ya que el año 4 sería el siguiente año bisiesto.*/

const currentYear = 1;

if (currentYear % 4 === 0){ 
   console.log(' El año es bisiesto');
}
else if ( (currentYear+1) % 4 ===0) {
    console.log(` el año ${currentYear+1} es bisiesto`);
}
else if( (currentYear+2) % 4 === 0){
    console.log(` el año ${currentYear+2} es bisiesto`);
}
else if( (currentYear+3) % 4 === 0){
    console.log(` el año ${currentYear+3} es bisiesto`);
}
