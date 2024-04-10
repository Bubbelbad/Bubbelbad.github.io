
let bubbleList = [];

let cSharp = new Bubble("C#", "Programming language in .NET", "images/cSharp.svg");
let mySql = new Bubble("MySQL", "Programming language in .NET", "images/mysql.svg");
let javaScript = new Bubble("JavaScript", "Programming language in .NET", "images/javascript.svg");
let html5 = new Bubble("HTML-5", "Programming language in .NET", "images/html5.svg");
let vsCode = new Bubble("VSC", "Programming language in .NET", "images/vscode.svg");
let visualStudio = new Bubble("Visual Studio", "Programming language in .NET", "images/visualstudio.svg");

bubbleList.push(cSharp);
bubbleList.push(mySql);
bubbleList.push(javaScript);
bubbleList.push(html5);
bubbleList.push(vsCode);
bubbleList.push(visualStudio);

let counter = 0; 

const bubbleButton = document.getElementById('bubbleButton');
const toolsDiv = document.getElementById("toolsDiv");

/* Event listener for bubble button: */
bubbleButton.addEventListener('click',
function(event) {
    let htmlString = "<img class=\"stack-icon\" src=\"" + bubbleList[counter].getImage() + "\" />";
    toolsDiv.innerHTML += htmlString;
    let closeButton = document.createElement("button");
    closeButton.textContent = "X";
    toolsDiv.appendChild(closeButton);
    counter++;
    if (counter == bubbleList.length) {
        counter = 0;
    }
});
