//First Code

"use strict";

let randomNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".btnRunGame").addEventListener("click", runGame);
document.querySelector(".btnRestart").addEventListener("click", restartGame);

function restartGame() {
  randomNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".input").value = "";
  document.querySelector("body").style.backgroundColor = "gray";
  document.querySelector(".result").textContent = "Result goes here";
}

function runGame() {
  const userGuess = Number(document.querySelector(".input").value);

  if (userGuess === randomNum) {
    document.querySelector(".result").textContent = "You are right";
    document.querySelector("body").style.backgroundColor = "green";

    if (highscore < score) highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  } else if (!userGuess) {
    alert("Put a number between 1-20!");
  } else if (userGuess > 20) {
    alert("You tried a number greater than 20. Give another shot between 1-20");
  } else if (userGuess > randomNum) {
    document.querySelector(".result").textContent = "Too high";
    document.querySelector("body").style.backgroundColor = "red";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (userGuess < randomNum) {
    document.querySelector(".result").textContent = "Too low";
    document.querySelector("body").style.backgroundColor = "red";
    score--;
    document.querySelector(".score").textContent = score;
  }
}
