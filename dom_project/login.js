let form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  let un = document.getElementById("un").value;
  let pn = document.getElementById("pn").value;
  let un1 = localStorage.getItem("user");
  let pn1 = localStorage.getItem("phone");
  if (un == "" && pn == "") {
    alert("user name and phone number cannot be empty");
  } else if (un == "") {
    alert("user name cannot be empty");
  } else if (pn == "") {
    alert("phone number cannot be empty");
  } else if (un !== un1 || pn !== pn1) {
    alert("wrong credentials d")
  } else if (un == un1 && pn == pn1) {
    alert("sucessfully login");
    open("./home.html");
  }
})
