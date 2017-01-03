var xPos = 20,
    yPos = 20,
    canvas = document.getElementById("myCanvas"),
    ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(xPos, yPos, 20, 20);

function move(e) {
    "use strict";
    var x = e.which || e.keycode; //gets the keycode that the user types
    if (x === 39) { //right arrow
        xPos += 10;
    } else if (x === 37) { //left arrow
        xPos -= 10;
    } else if (x === 40) { //up arrow
        yPos += 10;
    } else if (x === 38) { //down arrow
        yPos -= 10;
    } else { //any other key
        xPos = 20;
        yPos = 20;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clears rect
    ctx.fillRect(xPos, yPos, 20, 20); //draws another one
    
};
document.onkeydown = move; //calls move function if key is pressed
