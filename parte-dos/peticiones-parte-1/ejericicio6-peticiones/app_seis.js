const dogs = document.querySelector(".dogs")
const createPromise = () => 
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json());

let promisesCant = 10;
const promises = new Array();

for (let i = 0; i <= promisesCant; i++){
    dogs.innerHTML += ` <img src ="" alt="" class="dog${i +1}">`
    promises.push(createPromise());
}

Promise.all(promises)
  .then(responses => {
    for (let i = 0; i < responses.length; i++) {
      const img = document.querySelector('.dog' + (i + 1));
      img.src = responses[i].message;
    }
  });


  