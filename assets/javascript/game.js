1
//My steps are define my global variables
//Then to have a randomizer array to randomly select a word
//Next step is set up a blank array to for the guessable word. 
//After that we will need to have the emtpy spaces update after a correct guess

let marvelCharacters= [
  "storm", 
  "cyclops", 
  "spiderman", 
  "captain america",
  "hawkeye",
  "winter soldier",
  "falcon", 
  "thor", 
  "ironman", 
  "hulk", 
  "star lord",
  "gammora",
  "groot",
  "rocket",
  "drax",
  "captain marvel", 
  "wolverine", 
  "black widow", 
  "black panther", 
  "marvel girl",  
  "dr strange", 
  "thanos", 
  "dr doom", 
  "warmachine",
  "bruce banner",
  "ant-man",
  "wasp",
  "rescue",
  "vision", 
  "daredevil", 
  "kingpin", 
  "magneto", 
  "juggernaut", 
  "namor", 
  "blackbolt", 
  "professor x", 
  "mr fantastic",
  "venom",
  "invisible woman",
  "human torch",
  "scarlet witch",
  "quicksilver",
  "phil coulson",
  "nick fury",
  "emma frost",
  "loki",
  "green goblin",
  "punisher",
  "miles morales",
  "toad",
  "sabertooth",
  "jubilee",
  "gambit",
  "beast",
  "stan lee"

]

//creating a new object called game that will keep track of game state, current word, guessed lettes, wins and losses
let objGame = {
  "word":"",
  "img":"",
  "unguessed":"",
  "wrongGuess":"[]",
  "rightGuess":"[]",
  "wins":0,
  "losses":0,
  "status":0
}

let letters = "abcdefghijklmnopqrstuvwxyz"


//my element variables
let gameBoard = document.getElementById(gameBoard);
let wins = document.getElementById(wins);
let losses = document.getElementById(losses);
let guessed = document.getElementById(guessed);
let imgHangman = document.getElementById(imgHangman);
let imgCharacter = document.getElementById(imgCharacter);
var txtHidden = document.getElementById(txthidden);
let gameOverMsg = document.getElementById(gameOverMsg);

var chracterSRC = "assets/images/"
wins.innertext = "WINS:" + objGame.wins;
losses.innertext = "LOSSES:" +objGame.losses;

document.addEventListener("click", function(event) {
  if (!event.target.matches("#btnEscape")) {
    return;
  }

  NextWord(); 
}, false);

//set all words to lowercase despite if a captial leetter is pressed

//set a string for generating the random word from
//a list already provided. 
//list of images for when the user correctly guesses the word


function startGame() {
      
  

  //writing a clear game function to clear away the game after each attempt
  function clearGame() {

    if (marvelCharacters.length > 0) {
      
    }
  }






//         comPick = marvelCharacters[Math.floor(Math.random() * marvelCharacters.length)];


//           //this is where the images for the characters will go. 


//           //this will clear out the arrays each time
//             userGuesses = [];
//             wordGuessed = [];

//           //this is the for loop that will build the words with blanks
//             for (let i = 0; i < marvelCharacters[comPick].length; i++) {
//               wordGuessed.push('_');
//             }         

//             //these are the gamewin, gameover and titles

// document.getElementById("pressKeyTryAgain").style.csstext= 'display:none'

//             //this function will refresh the screen
//             refreshScreen();

// };
//       //here is the acutal function
//   function refreshScreen() {



              document.getElementById("gameWins").innertext = wins;
              document.getElementById("gameLosses").innertext = losses;

              let guessingWordText = "";
              for (let i = 0; i < wordGuessed.length; i++) {
                guessingWordText += wordGuessed[i]
              }

              //updates he guesses, word, and letters entered into the UI 

              document.getElementById("currentWord").innerText = guessingWordText;
              document.getElementById("guessesLeft").innertext = guessesLeft;
              document.getElementById("userGuesses").innertext = userGuesses;
  };

//this functions compares and evaluates the entered letters to the character you're trying to guess
function evaluateGuess(letter) {
  let positions = [];


  for (let i = 0; i < marvelCharacters.length; i++) {
    if (marvelCharacters[comPick][i] === letter) {
      positions.push(i);
    }console.log(letter)
    
  }
    if (position.length <= 0) {
      guessesLeft--;
    } else {
      for (let i = 0; i < positions.length; i++) {
        wordGuessed[positions[i]] = letter;
        
      }
    }

}

//this will checka nd see if the all the correct letter have been entered and the round ends

  function checkWin() {
    if(wordguessed.indexOf("_") ===  -1) {
      document.getElementById("pressLeyTryAgain").style.csstext = "display: block";
      wins++;
      finishedGame = true;
    }
  }

  //this is to check if the user is out of guesses, and if so then the game will present a 
  //loose message
  function checkLoss() {
    if (guessesLEft <= 0) {
      document.getElementById("pressKeyTryAgain").style.cssText = "display:block";
      losses++;
      finishedGame = true
    }
  }

  //this is the function to make a guess by the user, it will make sure that the letter has not been used before. 
  function makeGuess(letter) {
    if (guessesLeft > 0) {
      //this is the portion that checks to see if we used this letter before
      if (userGuesses.indexOf(letter) === -1) {
          userGuesses.push(letter);
          //this calls back to the evaluateGuess function
          evaluateGuess(letter);
      }
    }
  }

  //this the event listener for the keys being oressed by the user's keyboard. 
  document.onkeydown = function(event) {
    //
    if(finishedGame) {
      startGame();
      finishedGame = false;
    } else {
      //This will make sure that letters a-z are pressed.
      if (event.keyCode >= 65 && event.keyCode <= 90) {
        makeGuess(event.key.toLowerCase());
        refreshScreen();
        checkWin();
        checkLoss();
      }
    }
  }

