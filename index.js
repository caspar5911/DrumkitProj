var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i = 0; i<numberOfDrumButtons;i++){
    //check mouseclick
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonType = this.innerHTML;
        handleClick(buttonType);
        buttonAnimation(buttonType);
    });
}

    //check keypress
    document.addEventListener("keydown", function(event){
        var buttonPress = event.key;
        handleClick(buttonPress);
        buttonAnimation(buttonPress);
    });


function handleClick(buttonClicked) {    
    switch(buttonClicked){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;
        case "k" :
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
        break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
        default: console.log(buttonClicked);
    }
}

function buttonAnimation(currentKey) {
    document.querySelector("." + currentKey).classList.add("pressed");
    setTimeout(function(){document.querySelector(".pressed").classList.remove("pressed")},100);
}