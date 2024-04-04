
/* SENDER */
/* This class will send the chosen project/information to the view from portfolioPage */


/* Från Niklas genomgång */
let electricCars = new Project("ElectricCars", "This is the first project with design patterns. AVery simple program that let's the user search for electric vehicles. Add and remove from database. ");

let miniLibrary = new Project("MiniLibrary", "A program for borrowing books in a library. Add and remove books from the database.");

let noteTakingApp = new Project("NoteTakingApp", "Rroject in windows forms. Simple app that lets the user create notes. Then you can choose to save the notes to a file as json or csv. ");

let projectList = [];

const electricCarsButton = document.getElementById("electricCarsButton");
const miniLibraryButton = document.getElementById("miniLbraryCarsButton");
const noteTakingAppButton = document.getElementById("noteTakingAppButton");


electricCarsButton.addEventListener('click',
function(event) {
    projectList.push(electricCars);
});

miniLibraryButton.addEventListener('click',
function(event) {
    projectList.push(noteTakingApp);
});

noteTakingAppButton.addEventListener('click',
function(event) {
    projectList.push(miniLibrary);
});





/* Något anat */
const projectInput = document.getElementById("projectName");
const projectDescription = document.getElementById("projectDescription");

sendProjectButton.addEventListener('click', 
    function(event) {
        let project = new Project(projectName.value, projectDescription.value);

        let json = JSON.stringify(project);

        sessionStorage.setItem("project", json);

        window.location = "portfolioView.html";
    }