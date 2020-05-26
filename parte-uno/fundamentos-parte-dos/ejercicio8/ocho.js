const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';

// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
const listaElement = document.querySelector('ul');

// Cambiamos su contenido con innerHTML
listaElement.innerHTML = `<li> <h1> ella es ${firstDogName}</h1><img src=${firstDogImage} alt=""></li> <li> <h1> ella es ${secondDogName}</h1><img src=${secondDogImage} alt=""></li> <li> <h1> ella es ${thirdDogName}</h1><img src=${thirdDogImage} alt=""></li>`;