const input = document.querySelector(".ingresar");
const button = document.querySelector(".buscar");
const peopleFilms = document.querySelector(".lista"); 

button.addEventListener("click", () => {
  let inputValue = input.value;
  fetch (`https://swapi.dev/api/people/?search=${inputValue}`)
  .then ((response)=> response.json())
  .then ((response) => {
      peopleFilms.innerHTML = "";
      response.results.forEach(element => {
          peopleFilms.innerHTML += `<li>${element.name}</li>`;

      });
          
      });
  }  )
