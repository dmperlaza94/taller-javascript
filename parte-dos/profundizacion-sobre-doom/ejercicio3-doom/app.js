const selectInfo = document.querySelector("#nombre");
const inputName = document.querySelector(".name");
const inputLastname = document.querySelector(".lastname");
const inputTel = document.querySelector(".telephone");

const UsuarioInfoArray = [
  {
    nombre: "pedro",
    apellido: "Perez",
    telefono: "4387272",
  },
  {
    nombre: "camila",
    apellido: "Duarte",
    telefono: "3146080956",
  },
  {
    nombre: "diana",
    apellido: "Paniagua",
    telefono: "30148634",
  },
];
selectInfo.addEventListener("change", autocomplete);

function autocomplete() {
  let nameSelect = selectInfo.value;
  if (nameSelect == "pedro") {
    inputName.value = UsuarioInfoArray[0].nombre;
    inputLastname.value = UsuarioInfoArray[0].apellido;
    inputTel.value = UsuarioInfoArray[0].telefono;
  } else if (nameSelect == "camila") {
    inputName.value = UsuarioInfoArray[1].nombre;
    inputLastname.value = UsuarioInfoArray[1].apellido;
    inputTel.value = UsuarioInfoArray[1].telefono;
  } else if (nameSelect == "diana") {
    inputName.value = UsuarioInfoArray[2].nombre;
    inputLastname.value = UsuarioInfoArray[2].apellido;
    inputTel.value = UsuarioInfoArray[2].telefono;
  }
}
