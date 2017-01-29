var keyDown = false,
    walkTime,
    charStepIndex = 0,
    shown = true,
    audio = document.createElement('audio'),
    backgrounds = ["Images/Street.png", "Images/Work.png", "Images/Bar.png"],
    npcPos = [874, 750, 490, 50],
    music = ["Audio/trafficJam.mp3", "Audio/officeSounds.mp3", "Audio/busyBar.mp3"],
    prompt = ["It's the beginning of a new day. Your character is just about to leave the lobby and get ready for work. You're carrying something heavy as well.",
                "You left the apartment lobby and you are now walking to work.",
                "You've just made it to work, and you're currently in a meeting. Today's the day you present an idea about providing clean water access in Cambodia. However, your co-workers keep interrupting...",
                "It's the end of a long day, and you're at a bar. However, you spot a guy trying to grab a woman's waist from behind. The woman tells him to stop, but he doesn't listen."],
    microag = ["Do you need help carrying your things? That looks heavy for a pretty girl like you", 
                "Gurl, why don’t you smile for me?", 
                "Oh cool! I just did a project on clean water access too, only it was for Ethiopia!", 
                "Anyway, did you know that Ethiopia has less access to clean water than Cambodia?", 
                "Stop! Get away from me!"],
    option1 = ["Smile and ignore", 
                "Allow coworker to keep interrupting",
                "You say: Never mind, I'm sorry"],
    option2 = ["You say: This is considered harassment. You need to leave me alone",
                "You say: Excuse me, can you let me finish my sentence?",
                "You approach the guy and tell him: Leave her alone right now, or I'll call the police!"],
    fact1 = ["Some women remain quiet in fear of the situation escalating. In the Stop Street Harassment survey, more than two-thirds of women who were harassed said they were concerned that the harassment would become more aggressive. In certain situations and for many women, it is difficult to respond to a catcall. As the Guardian states, 'there is no ‘one size fits all’ approach to misogynistic abuse'.",
                "A study done by researchers from Brigham Young University and Princeton Un diversity have found that men dominate around 75% of the conversation at conference meetings. Tali Mendelberg of Princeton says this phenomenon applies to many different situations. 'In school boards, governing boards of organizations and firms, and legislative committees, women are often a minority of members and the group uses majority rule to make its decisions.’ Mendelberg states that ‘women are less likely to be viewed and to view themselves as influential in the group and to feel that their 'voice is heard.'",
                "Ignoring harassment will not stop it. In fact, research shows that ignoring harassment does not do much and may even be seen as condoning or encouraging the behavior."],
    fact2 = ["Approximately 53% of survey respondents in the Stop Street Harassment survey said that they had responded to harassment they experienced or witnessed at least one time. 31% of women and 25% of men have told the harasser to stop or back off.",
             "A 2015 study conducted by VitalSmarts and led by Joseph Grenny and David Maxfield found that “women’s perceived competency drops by 35 percent and their perceived deserved compensation by $15,088 when they are assertive or forceful”. Grenny states that women are expected to conform to cultural norms and stereotypes that women are caring and nurturing; therefore, women are judged harder than men even when they are acting equally as assertive.", 
             "Contrary to popular misconceptions, women are not harassed because they dress provocatively or act in a sexual manner. In fact, research shows that victims of sexual harassment vary in “physical appearance, type of dress, age, and behavior” (University of Oregon). The one trait that over 99% of the victims share is that they are female. "],
    facingRight = ["Images/right1.png", "Images/stand1.png", "Images/right2.png", "Images/stand1.png"], 
    facingLeft = ["Images/stand2.png", "Images/left1.png", "Images/stand2.png", "Images/left2.png"],
    index = 0;
audio.id = "audio";
audio.src = 'Audio/lobby.mp3';
audio.play();

$(document).ready(function() {
    $('#dialog-box').hide();
    addBlur();

});

function addBlur() {
    $(".img").addClass('blur');
    document.getElementById("intro").innerHTML = prompt[index];
    document.getElementById("heading").innerHTML = "Click anywhere to exit";
    $('#dialog-box').show();
    document.onclick = hideBlur;
}

function hideBlur() {
    $('#dialog-box').hide();
    $('.img').removeClass('blur');
}

function showComment() {
    document.getElementById("microag").innerHTML = microag[index];
    $('#comment').show();
    if (index !== 2){ 
        setTimeout(fade_out, 4000);
    }
    else { //when index is 2, the npc speaks twice
        setTimeout(fade_out2, 4000);
        
        
    };
}
function fade_out() {
    $("#comment").fadeOut().hide();
    setTimeout(show_options,500);
}

function fade_out2() { 
    document.getElementById("microag").innerHTML = microag[index+1];
    $('#comment').show(); //shows the second comment made by npc
    setTimeout(fade_out, 4000);

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
    //clearInterval(walkTime); //to prevent weird bug if user presses space bar while pressing right arrow
    $("#char").css({left: 40, position:'absolute'}); //moves character back to original spot
    $('#background').css('background', 'url(' + backgrounds[index] + ')'); //changes background image to new one
    document.getElementById("background").style.backgroundSize = "100% 100%";
    //document.getElementById("npc").src=npcs[index];

    if (index===1) {
        $('#npcscene3').show();
    }
    else if (index===2) {
        $('#npcscene3').hide();
        $('#npcscene4').show();
        $('#npc2scene4').show();
    }
    document.getElementById("fact1").innerHTML = fact1[index];
    document.getElementById("fact2").innerHTML = fact2[index];
    document.getElementById("option1").innerHTML = option1[index];
    document.getElementById("option2").innerHTML = option2[index];
    audio.src = music[index];
    audio.play();
    index++;
    addBlur();
    shown = true;
}
$(document).keydown(function(e) {
    if (!keyDown) {
        keyDown = e.which || e.keyCode;
        switch(keyDown) {
            case 39: 
                walkTime = setInterval(function() {move(39);}, 200); 
                break;
            case 37: 
                walkTime = setInterval(function() {move(37);}, 200);
                break;

            case 32:
                move(32);
                break;
        }
      }
  });
  
  $(document).keyup(function(e) {
    keyUp = e.which || e.keycode;
    if (keyUp == keyDown) {
        keyDown = false;
        clearInterval(walkTime);
    }
  });

function move(e) {
  
    var pos = document.getElementById("char").getBoundingClientRect();
    charStepIndex = charStepIndex % 4;

    //var posNPC = document.getElementById("npc").getBoundingClientRect();
    //var posNPC4 = document.getElementById("npcscene4").getBoundingClientRect();

    if (pos.right > npcPos[index] && shown) {
        showComment();
        shown = false;
    }
    switch(e) {
        case 39: //moves character right
            document.getElementById("char").src = facingRight[charStepIndex];
            $('#char').animate({left: '+=32'}, 200);
            
            break;
        case 37: //moves character left
            if ($('#char').position().left > 0){
                document.getElementById("char").src = facingLeft[charStepIndex];
                $('#char').animate({left: '-=32'}, 200);
             }
            
            break;

        case 32: //space bar that activates nextStage
            if (pos.right >= 1100) {  //only works if character is at specific part of page   
                nextStage();
                break;
            }
        
       }
    charStepIndex ++;
};


