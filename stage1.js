var xPos = 20,
    yPos = 20,
    canvas = document.getElementById("myCanvas"),
    ctx = canvas.getContext("2d"),
    switchVar =true; 
 

function nextStage() {
    $.getScript("test.js");
}   

function move(e) {
    var x = e.which || e.keycode; //gets the keycode that the user types
    
    if (document.getElementById("bob").style.position.left === 100px) {
        nextStage();
    }
    switch(x) {
        case 39:
            $(".bob").animate({left: "+=20px"
            });
            if (switchVar){
                document.getElementById("bob").src="2.png";
                switchVar = !switchVar;
            }
            else {
                document.getElementById("bob").src="1.png";
                switchVar=!switchVar;
            }
            break;
        case 37:
            $(".bob").animate({left: "-=20px"
            });
            if (switchVar){
                document.getElementById("bob").src="2.png";
                switchVar = !switchVar;
            }
            else {
                document.getElementById("bob").src="1.png";
                switchVar=!switchVar;
            }
            break;
       
};
document.onkeydown = move; //calls move function if key is pressed
