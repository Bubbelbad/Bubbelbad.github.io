/* RECIEVER */

/* This class will take the name of the project from portFolioPage and then display the coresponding information on the portFolioView.html from these objects */

/* List for the projects */
let projectList = [];
let projectName1 = document.getElementById("project-name");
let projectDescription1 = document.getElementById("project-description");


/* The classes */
let electricCars = new Project("ElectricCars", "The purpose of this application was to create an app with 5 design patterns and two sorting algorithms. I chose to make a fictive database that contains data for electric vehicles. The program displays a list of car proxies and the user is able to sort the proxies by brand or price, using two sorting algorithms.");

let miniLibrary = new Project("MiniLibrary", "This is a small version of a library. The goal of this project is to practice MySQL and database connection to the C# application. Also to give different privileges and growing my understanding on views, procedures etc.");

let noteTakingApp = new Project("NoteTakingApp", "This is a school assignment for my course 'object oriented programming I' in Windows Forms. I chose this project because I wanted to practice file-handling and saving things localy. It should be a very simple design that allows you to create messages and save author, title, category and if it's a secret. ");

let filmLibrary = new Project("FilmLibrary", "This is a school assignment for my course 'object oriented programming I' in Windows Forms. I chose this project because I wanted to practice file-handling and saving things localy. It should be a very simple design that allows you to create messages and save author, title, category and if it's a secret. ");

let battleShip = new Project("BattleShip", "This is a school assignment for my course 'object oriented programming I' in Windows Forms. I chose this project because I wanted to practice file-handling and saving things localy. It should be a very simple design that allows you to create messages and save author, title, category and if it's a secret. ");

let theFarm = new Project("TheFarm", "This is a school assignment for my course 'object oriented programming I' in Windows Forms. I chose this project because I wanted to practice file-handling and saving things localy. It should be a very simple design that allows you to create messages and save author, title, category and if it's a secret. ");

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
projectDescription1.textContent = project.getDescription();






