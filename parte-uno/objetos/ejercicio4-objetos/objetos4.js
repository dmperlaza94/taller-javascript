const buttonElement = document.querySelector('button');

function handleButtonClick(event) {
  console.log(event);
}

buttonElement.addEventListener('click', handleButtonClick);