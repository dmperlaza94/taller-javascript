const showNewDog = () => {
fetch("https://dog.ceo/api/breed/chihuahua/images/random")
  .then((response) => response.json())
  .then((res) => {
    const img = document.querySelector("img");
    img.src = res.message;
    img.alt = "Un perro chihuahua";
  });
  
}
 const btnDog = document.querySelector("button");
 btnDog.addEventListener("click", showNewDog)