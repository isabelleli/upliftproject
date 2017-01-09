var switchVar = true,
    backgrounds = ["background2.jpg", "background3.jpg", "background4.jpg"],
    index = 0;

function nextStage() {
    $("#char").css({left: 40, position:'absolute'}); //moves character back to original spot
    $('body').css('background-image', 'url(' + backgrounds[index] + ')'); //changes background image to new one
    index++;
}
function move(e) {
    var x = e.which || e.keycode; //gets the keycode that the user types
    var rect = document.getElementById("char").getBoundingClientRect();
    
    switch(x) {
        case 39: //moves character right
            
            $("#char").animate({left: "+=10px" 
            });
            if (switchVar){ //switches between two images to make walking look more realistic
                document.getElementById("char").src="2.png"; 
                switchVar = !switchVar;
            }
            else {
                document.getElementById("char").src="1.png";
                switchVar=!switchVar;
            }
            break;
        case 37: //moves character left
            $("#char").animate({left: "-=20px"
            });
            if (switchVar){
                document.getElementById("char").src="2.png";
                switchVar = !switchVar;
            }
            else {
                document.getElementById("char").src="1.png";
                switchVar=!switchVar;
            }
            break;
        case 32: //space bar that activates nextStage
            if (rect.right >= 200) {  //only works if character is at specific part of page   
                nextStage();
                break;
            }
       }
};

document.onkeydown = move; //calls move function if key is pressed