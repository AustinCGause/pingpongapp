const leftButton = document.getElementById("left")
const rightButton = document.getElementById("right")
const startGame = document.getElementById("start-game");
const player1Name = document.getElementById("player1");
const player2Name = document.getElementById("player2");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const setWinsLeft = document.getElementById("set-wins-left");
const setWinsRight = document.getElementById("set-wins-right");
var start = false;
let setCount = 0;
let leftScore = 0;
let rightScore = 0;
let leftSetWins = 0;
let RightSetWins = 0;

score1.style.display = "none";
score2.style.display = "none";
setWinsLeft.style.display = "none";
setWinsRight.style.display = "none";

startGame.onclick = function(){
    player1Name.innerHTML = prompt("Name of Player One: ");
    player2Name.innerHTML = prompt("Name of Player Two: ");
    startGame.style.display = "none";
    score1.style.display = "";
    score2.style.display = "";
    setWinsLeft.style.display = "";
    setWinsRight.style.display = "";
    start = true;
}

leftButton.onclick = function(){
    if (start == true) {
        score1.innerHTML = ++leftScore;
    }
    if (leftScore == 12){
        score1.innerHTML = 0;
        score2.innerHTML = 0;
        setWinsLeft.innerHTML = ++leftSetWins;
        leftScore = 0;
        rightScore = 0;
    }
}

rightButton.onclick = function(){
    if (start == true) {
     score2.innerHTML = ++rightScore;   
    }
    if (rightScore == 12){
        score1.innerHTML = 0;
        score2.innerHTML = 0;
        setWinsRight.innerHTML = ++RightSetWins;
        leftScore = 0;
        rightScore = 0;
    }
}

