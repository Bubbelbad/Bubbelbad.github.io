/* SENDER */

/* This class will send the chosen project name to portfolioPage through localStorage */

/* Project buttons: */
const electricCarsButton = document.getElementById("electricCarsButton");
const miniLibraryButton = document.getElementById("miniLibraryButton");
const noteTakingAppButton = document.getElementById("noteTakingAppButton");
const filmLibraryButton = document.getElementById("filmLibraryButton");
const battleShipButton = document.getElementById("battleShipButton");
const theFarmButton = document.getElementById("theFarmButton");

/* Side-nav tag buttons: */
const wpfButton = document.getElementById("wpfButton");
const dbButton = document.getElementById("dbButton");
const consoleButton = document.getElementById("consoleButton");


/* Event listeners for project buttons: */
electricCarsButton.addEventListener('click',
function(event) {
    localStorage.setItem("project", "ElectricCars");
    window.location.href = "portfolioView.html";
});

miniLibraryButton.addEventListener('click',
function(event) {
    localStorage.setItem("project", "MiniLibrary");
    window.location.href = "portfolioView.html";
});

noteTakingAppButton.addEventListener('click',
function(event) {
    localStorage.setItem("project", "NoteTakingApp");
    window.location.href = "portfolioView.html";
});

filmLibraryButton.addEventListener('click',
function(event) {
    localStorage.setItem("project", "FilmLibrary");
    window.location.href = "portfolioView.html";
});

battleShipButton.addEventListener('click',
function(event) {
    localStorage.setItem("project", "BattleShip");
    window.location.href = "portfolioView.html";
});

theFarmButton.addEventListener('click',
function(event) {
    localStorage.setItem("project", "TheFarm");
    window.location.href = "portfolioView.html";
});
