
const today = new Date();
const year = document.querySelector("#yearNow");
year.innerHTML = today.getFullYear();

let show = document.getElementById("lastModified")
show.textContent = document.lastModified



// Getting and displaying from a tag
const windChill = document.querySelector("#wind-chill");

function calculateWindchill(temperature, speed) {
    return 13.12 + 0.6215 * (temperature) - 11.37 * (speed ** .16) + 0.3965 * (temperature) * (speed ** .16);
}

const temp = 30;
const speed = 9;

const chill = calculateWindchill(temp, speed);

if (temp <= 10) {
    if (speed > 4.8) {
        windChill.textContent = chill.toFixed(2) + `°C`; 
    } else {
        windChill.textContent = `N/A`;
    }
} else {
    windChill.textContent = `N/A`;
}


