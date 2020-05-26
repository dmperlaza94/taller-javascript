const showNewDog = () => {
    fetch("https://dog.ceo/api/breed/chihuahua/images/random")
      .then((response) => response.html())
      .then((res) => {
        const img = document.querySelector("img");
        img.src = res.message;
        img.alt = "Un perro chihuahua";
      }).catch(error =>{
          console.log(error);
      })
      
    }
     const btnDog = document.querySelector("button");
     btnDog.addEventListener("click", showNewDog)