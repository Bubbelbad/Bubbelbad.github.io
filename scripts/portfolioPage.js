
/* SENDER */
/* This class will send the chosen project name to the view from portfolioPage */

const electricCarsButton = document.getElementById("electricCarsButton");
const miniLibraryButton = document.getElementById("miniLibraryButton");
const noteTakingAppButton = document.getElementById("noteTakingAppButton");
const filmLibraryButton = document.getElementById("filmLibraryButton");
const battleShipButton = document.getElementById("battleShipButton");
const theFarmButton = document.getElementById("theFarmButton");


electricCarsButton.addEventListener('click',
function(event) {
    localStorage.setItem("project", "ElectricCars");
    window.location.href = "portfolioView.html";
});

console.log("we came here");

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


/* Något anat */
const projectInput = document.getElementById("projectName");
const projectDescription = document.getElementById("projectDescription");

/*
sendProjectButton.addEventListener('click', 
    function(event) {
        let project = new Project(projectName.value, projectDescription.value);

        let json = JSON.stringify(project);

        sessionStorage.setItem("project", json);

        window.location = "portfolioView.html";
} */