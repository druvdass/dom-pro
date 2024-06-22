let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let un = document.getElementById("UName").value;
  let pn = document.getElementById("PNum").value;
  console.log(un, pn);
  if (un == "" && pn == "") {
    alert("both cannot be empty");
  } else if (un == "") {
    alert("user name cannot be empty");
  } else if (pn == "") {
    alert("phone number cannot be empty");
  } else if (un !== "" && pn !== "") {
    localStorage.setItem("user", un);
    localStorage.setItem("phone", pn);
    open("./login.html");
  } else {
    alert("registration failed");
  }

})