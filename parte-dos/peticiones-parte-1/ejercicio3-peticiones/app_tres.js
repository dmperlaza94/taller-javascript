"use strict";
const input = document.querySelector(".dato");
const button = document.querySelector(".btn_buscar");

const nameLogin = document.querySelector(".repo");
const PhotoContainer = document.querySelector(".foto");
const numberRepositories = document.querySelector(".numero-repo")
const getNewUser = () => {
  let username = input.value;
  console.log(username);
  fetch(`https://api.github.com/users/${username}`)
  .then ((response) => {
   return response.json()
  })
  .then((user) => {
      nameLogin.innerText = user.login;
      PhotoContainer.src= user.avatar_url;
      numberRepositories.innerText = user.public_repos;
      console.log(user);

  })
 
};
button.addEventListener("click",getNewUser )