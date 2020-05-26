"use strict";
const container = document.querySelector("div");
const tittle = document.querySelector("h1");
const paragraph = document.querySelector("p");

if (container.classList.contains("warning")) {
  tittle.innerHTML = "AVISO";
  paragraph.innerHTML = "Tenga cuidado";
} else if (container.classList.contains("success")) {
  tittle.innerHTML = "CORRECTO";
  paragraph.innerHTML = "Los datos son correctos";
} else if (container.classList.contains("error")) {
  tittle.innerHTML = "ERROR";
  paragraph.innerHTML = "A surgido un error";
}
