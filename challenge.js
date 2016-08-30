//We creating the variables we are gonna use
var timer,clickedTime,createdTime,delayClickTime,verticalPosition,horizontalPosition ;
var score=0;
var totalScore;
//Starting...
startingTheGame();

//Onclick the box display becomes none and the clickedTime counts
document.getElementById("insideBox").onclick = function () {
    this.style.display  = "none";
    clickedTime = Date.now();
    console.log("when was clicked "+clickedTime);
    runTimer();
    changeColor();
    delayClickTime = (clickedTime - createdTime)/1000;
    console.log("delay "+delayClickTime);
    document.getElementById("timeWhenClicked").innerHTML =" "+ delayClickTime;
    position();
    giveScore();


}




//With this function we start the timer so the box will appear again
function runTimer() {
    if(document.getElementById('insideBox').style.display == "none"){
        var randomGen = Math.random()*1700;
       timer = setTimeout(appear, randomGen);
        //This comment below can work the same with the above
        /* timer = function() {
            setTimeout(appear, randomGen);
        }
        timer();*/
        console.log(randomGen);
    }

}

//The function we are gonna so the box will appear and the time for the box to created
function appear () {
    document.getElementById('insideBox').style.display = "block";
    createdTime = Date.now();//This will tell exactly when it will appear that's why we put it in here
    console.log("createdTime "+createdTime);
}





//Random colors change we ll use with the runTimer using switch
/*function colorChange() {
    var colors=Math.floor(Math.random()*6+1);
    var whatColor;
    switch (colors) {
        case 1:
            colors = "#ff33cc";
            whatColor = "Light Purple";
            break;
        case 2:
            colors = "#0066ff";
            whatColor = "SomeBlue";
            break;

        case 3:
            colors = "#ff66ff";
            whatColor = "Pink";
            break;
        case 4:
            colors = "#ffff1a";
            whatColor = "Yellow";
            break;

        case 5:
            colors = "#66ff33";
            whatColor = "Light Green";
            break;
        case 6:
            colors = "#660066";
            whatColor = "Purple";
            break;
    }
    console.log(whatColor+" "+colors);
    document.getElementById("insideBox").style.backgroundColor = colors;
}
*/


function giveScore(){

    switch (true){
        case (delayClickTime>= 0.1 && delayClickTime<=0.2) :
            score += 9;
            changeText("What The Fuck! + 9 Points");
            break;
        case (delayClickTime> 0.2 && delayClickTime<=0.3) :
            score += 8;
            changeText("Are you a robot? + 8 points");
            break;
        case (delayClickTime>= 0.3 && delayClickTime<=0.4) :
            score += 7;
            changeText("Damn you are fast! + 7 points");
            break;
        case (delayClickTime> 0.4 && delayClickTime<=0.5) :
            score += 6;
            changeText("Perfect! + 6 Points");
            break;
        case (delayClickTime>= 0.5 && delayClickTime<=0.6) :
            score += 5;
            changeText("Amazing! + 5 points");
            break;
        case (delayClickTime> 0.6 && delayClickTime<=0.7) :
            score += 4;
            changeText("Excellent! + 4 points");
            playAudio("audio/yes-hahahaa.wav");
            break;
        case (delayClickTime>= 0.7 && delayClickTime<=0.8) :
            score += 3;
            changeText("Now we are talking! + 3 points");
            playAudio("audio/unbelievable.wav");
            break;
        case (delayClickTime> 0.8 && delayClickTime<=0.9) :
            score += 2;
            changeText("Yes ! + 2 points");
            playAudio("audio/yes-3.wav");
            break;
        case (delayClickTime> 0.9 && delayClickTime<=0.99) :
            score += 1;
            changeText("Come On! + 1 point");
            playAudio("audio/you-can-do-it.wav");
            break;
        case (delayClickTime> 1 && delayClickTime<=1.5) :
            changeText("You lose 1 point");
            playAudio("audio/am-i-totally-screwed-or.wav");
            score += -1;
            break;
        default:
            changeText("You lose 2 points");
            score += -2;
            playAudio("audio/Lamb.mp3");
    }
    console.log(score)
    var totalScore ;
    totalScore = parseInt(score) ;
    keepScore(totalScore);
}

function keepScore(score){
    document.getElementById("score").innerHTML = "Score: " + score ;
}

function playAudio(insertAudioId){
    var currentSong = "";

    if(insertAudioId!="") {
        if (currentSong != "") {
            this.pause();
        }
        var audio= new Audio(insertAudioId);
        audio.currentTime=0;
        audio.play();
        currentSong = audio;
    }
}

function changeText(text){
    document.getElementById("textToDisplay").innerHTML = text ;
}


//A function that will change the position of the small box according to vh and vw (horizontal and vertical)
function position(){
    horizontalPosition = Math.floor(Math.random()*95);
    verticalPosition = Math.floor(Math.random()*86);


    document.getElementById('insideBox').style.left = horizontalPosition+"%";
    document.getElementById('insideBox').style.top = verticalPosition+"%";

}

//Just a function that will start all functions we want and the small box to have display to none
function startingTheGame(){
    document.getElementById('insideBox').style.display = "none";
    runTimer();
    changeColor();
    position();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(){
    document.getElementById("insideBox").style.backgroundColor = getRandomColor();
}



