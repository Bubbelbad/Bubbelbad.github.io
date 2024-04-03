
/* SENDER */
/* This class will send the chosen project/information to the view from portfolioPage */


/* Från Niklas genomgång */
let electricCars = new Project("ElectricCars", "This is the first project with design patterns. AVery simple program with blablabla");

let miniLibrary = new Project("ElectricCars", "This is the first project with design patterns. AVery simple program with blablabla");

let noteTakingApp = new Project("ElectricCars", "This is the first project with design patterns. AVery simple program with blablabla");

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