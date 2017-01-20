var switchVar = true,
    audio = document.createElement('audio'),
    backgrounds = ["background2.jpg", "background3.jpg", "background4.jpg"],
    npcs = ["streetguy.png"],
    music = ["trafficJam.mp3"],
    index = 0;

audio.id = "audio";
audio.src = 'alarm.mp3';
audio.play();
function showComment() {
    $('#comment').show();
    setTimeout(fade_out, 4000);
}
function fade_out() {
  $("#comment").fadeOut().hide();
  setTimeout(show_options,500);
}

function show_options() {
  $("#wrapper").show();
}

function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display === 'none')
      e.style.display = 'block';
   else
      e.style.display = 'none';
}

function clean_up() {
  document.getElementById('wrapper').style.display = 'none';
  document.getElementById('popupBoxOnePosition').style.display = 'none';
  document.getElementById('popupBoxTwoPosition').style.display = 'none';
}

function nextStage() {
    $("#char").css({left: 40, position:'absolute'}); //moves character back to original spot
    $('body').css('background', 'url(' + backgrounds[index] + ')'); //changes background image to new one
    document.getElementById("npc").src=npcs[index];
    audio.src = music[index];
    audio.play();
    index++;
}

function move(e) {
    var x = e.which || e.keycode; //gets the keycode that the user types
    var pos = document.getElementById("char").getBoundingClientRect();
    var posNPC = document.getElementById("npc").getBoundingClientRect();
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

        case 84: //t
            if (pos.right >= 200){
                showComment();
                break;
            }
        case 32: //space bar that activates nextStage
            if (pos.right >= 300) {  //only works if character is at specific part of page   
                nextStage();
                break;
            }
        
       }
};

document.onkeydown = move; //calls move function if key is pressed