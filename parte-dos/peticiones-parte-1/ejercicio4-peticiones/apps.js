"use strict";
const input = document.querySelector(".info-organizacion");
const btnSearch = document.querySelector(".btn-buscar");
const reposUl = document.querySelector(".org-repositorios")
const organiName = document.querySelector(".nombreOrg");
const getOrgInfo = () => {
  let orgName = input.value;

  fetch(`https://api.github.com/orgs/${orgName}`)
    .then((response) => response.json())
    .then((org) => {
        
        organiName.innerText = org.name

        fetch(org.repos_url)
        .then(response => response.json ())
        .then( repos => {
            reposUl.innerHTML = "";
            repos.forEach(repo => {
                reposUl.innerHTML += ` <li> ${repo.name}</li>`
            })

            
        })
    });
};
btnSearch.addEventListener("click", getOrgInfo);
