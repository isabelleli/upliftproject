var switchVar = true,
    backgrounds = ["background2.jpg", "background3.jpg", "background4.jpg"],
    index = 0;

function nextStage() {
    $("#bob").css({left: 40, position:'absolute'});
    //something that makes bob move all the way back to original place
    $('body').css('background-image', 'url(' + backgrounds[index] + ')');
    index++;
}
function move(e) {
    var x = e.which || e.keycode; //gets the keycode that the user types
    var rect = document.getElementById("bob").getBoundingClientRect();
    
    switch(x) {
        case 39:
            
            $("#bob").animate({left: "+=10px"
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
            $("#bob").animate({left: "-=20px"
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
        case 32:
            if (rect.right >= 200) {     
                nextStage();
                break;
            }
       }
};

document.onkeydown = move; //calls move function if key is pressed