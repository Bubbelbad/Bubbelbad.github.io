/* RECIEVER */

/* This class will take the information from the portfolio model and display it in the view. */

let sessionStorage.getItem("project");

let object = JSON.parse(json);
 let project = new Project(object.name, object.description);

 infotext.textContent = project.getDescription();