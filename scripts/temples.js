
const today = new Date();
const year = document.querySelector("#yearNow");
year.innerHTML = today.getFullYear();

let show = document.getElementById("lastModified")
show.textContent = document.lastModified


const menuButton = document.querySelector("#menu")
const ul = document.querySelector("ul")

menuButton.addEventListener("click", () => {
    ul.classList.toggle("open");
    menuButton.classList.toggle("open");
});

