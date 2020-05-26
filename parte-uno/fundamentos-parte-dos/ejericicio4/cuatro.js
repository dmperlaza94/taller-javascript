/*¡Págame, tía!
Nos vamos de cena de Navidad, ¡qué alegría! Somos en total 9 personas y la cuenta del restaurante japonés es de 128€. Ana tiene que pagar 2€ más que los demás porque ha pedido un chupito de sake. ¿Cuánto tenemos que pagar cada una? ¿Y Ana? Hagamos un pequeño programa en JavaScript para calcularlo. El resultado debe mostrarse en la consola del navegador.*/
'use strict'
let totalCena = 128;
let totalPersonas = 9;
const pagarPersonas = ((totalCena-2) / totalPersonas);
const pagarAna = (pagarPersonas + 2)

console.log(' Ana debe pagar por haber pedido un chupito de sake'+" "+ pagarAna + '€');
console.log (' Las demas personas que estan con Ana deben de pagar'+" "+ pagarPersonas + '€')