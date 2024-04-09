/* RECIEVER */

/* This class will take the name of the project name from localStorage/portFolioPage and then display the coresponding information on the portFolioView.html from these objects */

let projectList = [];
let projectName1 = document.getElementById("project-name");
let projectDescription1 = document.getElementById("project-description");


let electricCars = new Project("ElectricCars", "The purpose of this application was to create an app with 5 design patterns and two sorting algorithms. I chose to make a fictive database that contains data for electric vehicles. <br/> The program displays a list of car proxies and the user is able to sort the proxies by brand or price, using two sorting algorithms.");

let miniLibrary = new Project("MiniLibrary", "This is a small version of a library. The goal of this project is to practice MySQL and database connection to the C# application. Also to give different privileges and growing my understanding on views, procedures etc.");

let noteTakingApp = new Project("NoteTakingApp", "This is a school assignment for my course 'object oriented programming I' in Windows Forms. I chose this project because I wanted to practice file-handling and saving things localy. It should be a very simple design that allows you to create messages and save author, title, category and if it's a secret. ");

let filmLibrary = new Project("FilmLibrary", "This application should let the user browse movies for inspiration. The user should be able to save the movies to different lists, like 'favorites' and 'watch later'. First I thought I'd use API's to get the data, but since I need to practice MySQL and database connection I am changing the program to use that instead. It might be that I change my goals when I know more, but this is the idea! The architecture of this app wasn't planned from scratch and thus the structure is a little bit messy. I learned a lot about UserControls though, and look forward to doing another project with the knowedge I accumulated in this app as a start.");

let battleShip = new Project("BattleShip", "My goal is to make an simplified single player version of this game, with only one game field with four hidden boats. The goal is to uncover all hidden boats in as few moves as possible. The player does not have it's own game field and won't get shot at by the CPU at this applications current state (but it might be developed later). \nThe player chooses coordinates A-J & 1-10 to aim at a spot. The player gets direct feedback if he hit a ship or not. After all boats are completely hit /uncovered, the game is won and the number of moves is saved to a highscore as CSV. The best scores are sorted through a priority queue to display the results in order.");

let theFarm = new Project("TheFarm", "Vi har fått i uppgift att utveckla ett program från ett redan existerande Klass-Diagram, samt en tillhörande relativt vag beskrivning. Vi delade upp klasserna emellan oss och hjälpte varandra koda den andres del över Discord.");

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






