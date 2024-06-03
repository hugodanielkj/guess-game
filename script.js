//Refactoring code: Dry Code

"use strict";

let randomNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//Creating buttoms
document.querySelector(".btnRunGame").addEventListener("click", runGame);
document.querySelector(".btnRestart").addEventListener("click", restartGame);

//Restart Function
function restartGame() {
  randomNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".input").value = "";
  document.querySelector("body").style.backgroundColor = "gray";
  document.querySelector(".result").textContent = "Result goes here";
}

//Game Function
function runGame() {
  const userGuess = Number(document.querySelector(".input").value);

  //Non-existing Guess Case
  if (!userGuess || userGuess > 20 || userGuess < 0) {
    alert("Put a number between 1-20!");

    //Wrong Guess Case
  } else if (userGuess !== randomNum) {
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector(".result").textContent =
      userGuess > randomNum ? "Too high!" : "Too low";

    //Right Guess Case
  } else {
    document.querySelector(".result").textContent = "You are right";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".highscore").textContent =
      score > highscore ? score : highscore;
    highscore = score;
  }
}
