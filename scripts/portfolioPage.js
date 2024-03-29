
/* SENDER */
/* This class will send the chosen project/information to the view from portfolioPage */


sendProjectButton.addEventListener('click', 
    function(event) {
        let project = new Project(projectName.value, projectDescription.value);

        let json = JSON.stringify(project);

        sessionStorage.setItem("project", json);
        window.location = "reciever.html";
    }