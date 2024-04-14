/* RECIEVER */

/* This class will take the name of the project name from localStorage/portFolioPage and then display the coresponding information on the portFolioView.html from these objects */

let projectList = [];
let projectName1 = document.getElementById("project-name");
let projectMonth1 = document.getElementById("project-month");
let projectDescription1 = document.getElementById("project-description");
let projectTags1 = document.getElementById("project-tags");
let projectLink1 = document.getElementById("project-link");
let projectLilNav = document.getElementById("lil-nav");
let projectGallery = document.getElementById("gallery");


let electricCars = new Project("ElectricCars", "MARS 2024", "The purpose of this application was to create an app with 5 design patterns and two sorting algorithms. I chose to make a fictive database that contains data for electric vehicles. <br/> The program displays a list of car proxies and the user is able to sort the proxies by brand or price, using two sorting algorithms.", ["WPF", "Design Patterns, Sorting Algorithms, C#"], "https://github.com/Bubbelbad/ElectricCars", ["images/project-images/ElectricCars1.png", "images/project-images/ElectricCars2.png"]);

let miniLibrary = new Project("MiniLibrary", "FEBRUARY 2024", "This is a small version of a library. The goal of this project is to practice MySQL and database connection to the C# application. Also to give different privileges and growing my understanding on views, procedures etc.", ["MySQL", "WPF"], "https://github.com/Bubbelbad/MiniLibrary", ["images/project-images/MiniLibrary1.png", "images/project-images/MiniLibrary2.png"]);

let noteTakingApp = new Project("NoteTakingApp", "NOVEMBER 2023", "This is a school assignment for my course 'object oriented programming I' in Windows Forms. I chose this project because I wanted to practice file-handling and saving things localy. It should be a very simple design that allows you to create messages and save author, title, category and if it's a secret. ", ["Windows Forms", "File Handling"], "https://github.com/Bubbelbad/TheNoteTakingApp-WindowsForms", ["images/project-images/NoteTakingApp1.png"]);

let filmLibrary = new Project("FilmLibrary", "DECEMBER 2023", "This application should let the user browse movies for inspiration. The user should be able to save the movies to different lists, like 'favorites' and 'watch later'.", ["MySQL", "WPF"], "https://github.com/Bubbelbad/FilmLibrary", ["images/project-images/FilmLibrary1.png", "images/project-images/FilmLibrary2.png"]);

let battleShip = new Project("BattleShip", "NOVEMBER 2023", "My goal is to make an simplified single player version of this game, with only one game field with four hidden boats. The goal is to uncover all hidden boats in as few moves as possible.", ["Console App", "Game"], "https://github.com/Bubbelbad/Battleship", ["images/project-images/BattleShip1.png", "images/project-images/BattleShip2.png"]);

let theFarm = new Project("TheFarm", "SEPTEMBER 2023", "Uppgiften gick it på att utveckla ett program från utifrån redan existerande Klass-Diagram. Klasserna skickar olika klasser emellan sig och blir ett trevligt litet eco-system", ["Console App"], "https://github.com/Bubbelbad/TheFarm-ConsoleApp", ["images/project-images/ElectricCars1"]);

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
};

projectName1.textContent = project.getName();
projectMonth1.textContent = project.getMonth();
projectDescription1.innerHTML = project.getDescription();
projectTags1.textContent = project.getTagList();
projectLink1.href = project.getProjectLink();
projectLilNav.innerHTML = project.getLilNavImages();
projectGallery.innerHTML = project.getGalleryImages();





