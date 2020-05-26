'use strict'
const myBody = document.querySelector("body");

document.addEventListener("keypress", (e) => {
  if (e.key == "r") {
    myBody.style.backgroundColor = "red";
  } else if (e.key == "m") {
    myBody.style.backgroundColor = "purple";
  }
});
