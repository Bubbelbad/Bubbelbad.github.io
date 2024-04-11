/* RECIEVER */

/* This class will take the name of the project name from localStorage/portFolioPage and then display the coresponding information on the portFolioView.html from these objects */

let projectList = [];
let projectName1 = document.getElementById("project-name");
let projectDescription1 = document.getElementById("project-description");


let electricCars = new Project("ElectricCars", "The purpose of this application was to create an app with 5 design patterns and two sorting algorithms. I chose to make a fictive database that contains data for electric vehicles. <br/> The program displays a list of car proxies and the user is able to sort the proxies by brand or price, using two sorting algorithms.", ["WPF", "Design Patterns"]);

let miniLibrary = new Project("MiniLibrary", "This is a small version of a library. The goal of this project is to practice MySQL and database connection to the C# application. Also to give different privileges and growing my understanding on views, procedures etc.", ["MySQL", "WPF"]);

let noteTakingApp = new Project("NoteTakingApp", "This is a school assignment for my course 'object oriented programming I' in Windows Forms. I chose this project because I wanted to practice file-handling and saving things localy. It should be a very simple design that allows you to create messages and save author, title, category and if it's a secret. ", ["Windows Forms", "File Handling"]);

let filmLibrary = new Project("FilmLibrary", "This application should let the user browse movies for inspiration. The user should be able to save the movies to different lists, like 'favorites' and 'watch later'.", ["MySQL", "WPF"]);

let battleShip = new Project("BattleShip", "My goal is to make an simplified single player version of this game, with only one game field with four hidden boats. The goal is to uncover all hidden boats in as few moves as possible.", ["Console App", "Game"]);

let theFarm = new Project("TheFarm", "Uppgiften gick it på att utveckla ett program från utifrån redan existerande Klass-Diagram. Klasserna skickar olika klasser emellan sig och blir ett trevligt litet eco-system", ["Console App"]);

projectList.push(electricCars);
projectList.push(miniLibrary);
projectList.push(noteTakingApp);
projectList.push(filmLibrary);
projectList.push(battleShip);
projectList.push(theFarm);


let projectTitle = localStorage.getItem("project");
let project = null;

for (i = 0; i < projectList.length; i++) {
    if (projectList[i].getName() == projectTitle)  
        project = projectList[i];
}

console.log(projectName1);
projectName1.textContent = project.getName();
projectDescription1.innerHTML = project.getDescription();






