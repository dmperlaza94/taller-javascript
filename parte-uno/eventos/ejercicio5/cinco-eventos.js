"use strict";
let teacherIsra = document.querySelector(".teacher--isra");
let teacherTuerto = document.querySelector(".teacher--tuerto");
let teacherNasi = document.querySelector(".teacher--nasi");

const selectTeachers = (e) => {
  let fatherElement = e.srcElement.parentElement;
  fatherElement.classList.toggle("teacher--selected");
  aditionText(fatherElement);
};
const aditionText = (fatherElement) => {
  let adittionClear = fatherElement.querySelector(".favorite");
  
  //para mirar si un elemento contiene una clase
  if ( fatherElement.classList.contains("teacher--selected")){
    adittionClear.innerHTML = "quitar";
  }
  else{
    adittionClear.innerHTML = "añadir";
  }
}
teacherIsra.addEventListener("click", selectTeachers);
teacherNasi.addEventListener("click", selectTeachers);
teacherTuerto.addEventListener("click", selectTeachers);
