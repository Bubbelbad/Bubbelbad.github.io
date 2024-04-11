
//All stack objects
let bubbleList = [];

//The visible floating items
let floatingList = [];

//Adding the clases to the bubbleList
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
    floatingList.push(bubbleList[counter]);
    counter++;
    if (counter == bubbleList.length) {
        counter = 0;
    }
    displayFloatingList();
    if (!moveInterval) { // start the interval only if it's not already started
        moveInterval = setInterval(bubbleMove, 2000); // 5000 milliseconds = 5 seconds
    }
});

displayFloatingList = function() {
        toolsDiv.innerHTML = "";
    for (let i = 0; i < floatingList.length; i++) {
        let htmlString = "<input type=\"image\" class=\"stack-icon\" onclick=\"deleteBubble(" + i + ")\" src=\"" + floatingList[i].getImage() + "\" id=\"" + i + "\""+  "/>";
        toolsDiv.innerHTML += htmlString;
    }
}

/* Event listener for close button: */
deleteBubble = function(int) {
    floatingList.splice(int, 1);
    displayFloatingList();
}




let moveInterval;

//Function to move the bubbles within the section
function bubbleMove() {
    const section = document.querySelector(".section-class");
    const sectionBounds = section.getBoundingClientRect();

    const sectionLeft = sectionBounds.left;
    const sectionTop = sectionBounds.top;

    const maxLeft = sectionBounds.width;
    const maxTop = sectionBounds.height;

    // Generate random positions within the bounds of the wrapper element
   

    // Apply the new position to the bubble
    
    let movingList = document.getElementsByClassName("stack-icon");
    for (let i = 0; i < movingList.length; i++) {
        const newLeft = Math.floor(Math.random() * maxLeft);
        const newTop = Math.floor(Math.random() * maxTop);
        movingList[i].style.position = 'absolute'; 
        movingList[i].style.left = newLeft + "px";
        movingList[i].style.top = newTop + "px";
    }


    // Start the movement interval when the document is ready
    document.addEventListener("DOMContentLoaded", () => {
    setInterval(bubbleMove, 1000); 
    
});

}



