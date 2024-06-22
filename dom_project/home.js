let loginbtn = document.querySelector("button");

let user_name = localStorage.getItem("user");

loginbtn.innerHTML = ` Login as ${user_name}`;

let btn = document.getElementById("git");

let gitblock = document.getElementById("gituser");


btn.addEventListener("click", async () => {

  let data = await fetch("https://api.github.com/users");
  let finaldata = await data.json();
  console.log(finaldata);

  let card = document.createElement("div")
  gitblock.appendChild(card);
  finaldata.map(user => {
    console.log(user);
    card.innerHTML += `<section>
    <h2>${user.login}</h2>
    <img src=${user.avatar_url} alt="No Image">
    <button id="profile"><a href=${user.html_url}>PROFILE</a></button>

    `
  })
})