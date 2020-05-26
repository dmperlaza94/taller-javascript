"use strict";
const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";
const verLista = document.querySelector(".boton-mirar");
const listaPeliculas = document.querySelector(".list");
const cadaItem = document.querySelector ("li");
const listadoPeliculas = /*html*/
`<li class="inception"> ${inception}</li>
<li class="theButterFlyEffect">  ${theButterFlyEffect}</li>
<li class="eternalSunshineOfTheSM">${eternalSunshineOfTheSM}</li>
<li class="blueVelvet">${blueVelvet}</li>
<li class="split">${split}</li>`;
/*Después vamos a escuchar eventos sobre cada elemento de la lista, de forma que al hacer click sobre el nombre de una película aparezca en la consola el nombre de esa película.*/
verLista.addEventListener(
  "click", () => {
    listaPeliculas.innerHTML += listadoPeliculas
  document.querySelector(".inception").addEventListener("click", showmovie);
  document.querySelector(".theButterFlyEffect").addEventListener("click", showmovie);
  document.querySelector(".blueVelvet").addEventListener("click", showmovie);
  document.querySelector(".eternalSunshineOfTheSM").addEventListener("click", showmovie);
  document.querySelector(".split").addEventListener("click", showmovie);
  
  });
const showmovie = (e) => { 
  console.log(e.srcElement.innerText);
}
