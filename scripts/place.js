
const today = new Date();
const year = document.querySelector("#yearNow");
year.innerHTML = today.getFullYear();

let show = document.getElementById("lastModified")
show.textContent = document.lastModified

const windChill = document.querySelector("#wind-chill");

function calculateWindchill(temperature, speed) {
    return 13.12 + 0.6215 * (temperature) - 11.37 * (speed ** .16) + 0.3965 * (temperature) * (speed ** .16);
}

const chill = calculateWindchill(30, 9);
windChill.textContent = chill.toFixed(2) + `°C`; 
