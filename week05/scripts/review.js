
const today = new Date();
const year = document.querySelector("#yearNow");
year.innerHTML = today.getFullYear();

let show = document.getElementById("lastModified")
show.textContent = document.lastModified

const counter = document.querySelector("#counter");

let numero = Number(localStorage.getItem("submissions") || 0);
counter.textContent = numero;


