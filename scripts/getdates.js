
const today = new Date();
const year = document.querySelector("#yearNow");
year.innerHTML = today.getFullYear();

let oLastModif = new Date(document.lastModified);
let show = document.querySelector("#lastModified")
show.textContent = oLastModif
