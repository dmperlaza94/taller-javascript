const numbersArray = [1, 2, 3];
const listElement = document.querySelector(".items");

numbersArray.forEach((numberValue) => {
  const newItem = document.createElement("li");
  const newContent = document.createTextNode(numberValue);
  newItem.appendChild(newContent);

  listElement.appendChild(newItem);
});

kk;
