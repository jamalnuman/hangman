//initialize the various variables to use for the project
const words = ["football", "baseball", "soccer", "basketball", "badminton"];
let domUnderScore;
let domCorrectGuess;
let domWrongGuess;
let randomNumber;
let correctWord;
let incorrectWord;
let randomWord;
let underscore = [];
let userWins = 0;
let numberOfWrongGuesses = 0;
let userLost = 0;

//this is similar to $(dcoument).ready() in JQuery, but in Vanilla JS
document.addEventListener("DOMContentLoaded", function() {
  domUnderScore = document.getElementsByClassName("htmlUnderscore");
  domCorrectGuess = document.getElementsByClassName("rightGuess");
  domWrongGuess = document.getElementsByClassName("wrongGuess");
  setUpGame();
});

function setUpGame() {
  numberOfWrongGuesses = 0;
  randomNumber = Math.floor(Math.random() * words.length);
  correctWord = [];
  incorrectWord = [];
  randomWord = words[randomNumber];
  underscore = [...randomWord].map(letter => "_"); 
  domUnderScore[0].innerHTML = underscore.join(" "); 
  domCorrectGuess[0].innerHTML = "Correct Guesses";
  domWrongGuess[0].innerHTML = "Incorrect Guesses";
}

document.addEventListener("keypress", function(e) {
  //variable to hold the "keyCode", which is the ascii number..each button is assigned an ascii number
  let key = e.keyCode;
  //convert the ascii number to a letter
  let letter = String.fromCharCode(key);
  if (randomWord.includes(letter)) {
    correctWord.push(letter);
    domCorrectGuess[0].innerHTML = correctWord;
    
    for (let index in randomWord) {
      if (randomWord[index] === letter) {
        underscore[index] = letter;
      }
    }
    domUnderScore[0].innerHTML = underscore.join(" ");
    
    if (underscore.join("") === randomWord) {
      setTimeout(win, 500);
    }
  } else {
    numberOfWrongGuesses++
    incorrectWord.push(letter);
    domWrongGuess[0].innerHTML = incorrectWord;
    
    if (numberOfWrongGuesses === 7) {
      setTimeout(lost, 500);
    }  
  }
});

function win() {
  alert(`You have won ${++userWins} time(s)`);
  setUpGame();
}
function lost() {
  alert (`You have lost ${++userLost} time(s)`);
  setUpGame();
}
