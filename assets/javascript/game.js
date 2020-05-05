document.ready
//My steps are define my global variables
//Then to have a randomizer array to randomly select a word
//Next step is set up a blank array to for the guessable word. 
//After that we will need to have the emtpy spaces update after a correct guess

let marvelCharacters= [
  "storm", 
  "cyclops", 
  "spiderman", 
  "captainamerica", 
  "thor", 
  "ironman", 
  "hulk", 
  "captainmarvel", 
  "wolverine", 
  "blackwidow", 
  "blackpanther", 
  "marvelgirl", 
  "mrfantastic", 
  "drstrange", 
  "thanos", 
  "drdoom", 
  "warmachine", 
  "daredevil", 
  "kingpin", 
  "magneto", 
  "juggernaut", 
  "namor", 
  "blackbolt", 
  "professorx", 
  "mrfantastic",
  "venom",
  "invisiblewoman",
  "humantorch",
  "emmafrost",
  "loki",
  "greengoblin",
  "punisher",
  "milesmorales",
  "toad",
  "sabertooth",
  "jubilee",
  "gambit",
  "beast",

]
//my global variables
let wins = 0; //this is how many wins the user has
let losses = 0; //this is how many losses they have
let wrongGuess =[]; //
let guessesLeft = 10;
let solved = 0;
let userGuesses = [];
let finishedGame = false;
let comPick;



//set all words to lowercase despite if a captial leetter is pressed

//set a string for generating the random word from
//a list already provided. 
//list of images for when the user correctly guesses the word


function startgame() {
      console.log("ready")
  
        comPick = marvelCharacters[Math.floor(Math.random() * marvelCharacters.length)];


          //this is where the images for the characters will go. 


          //this will clear out the arrays each time
            userGuesses = [];
            wordGuessed = [];

          //this is the for loop that will build the words with blanks
            for (let i = 0; i < marvelCharacters[comPick].length; i++) {
              wordGuessed.push('_');
            }         

            //these are the gamewin, gameover and titles

document.getElementById("pressKeyTryAgain").style.css.text= 'display:none'
document.getElementById("gameover-image").style.css.text= 'display:none'
document.getElementById("youwin-image").style.css.text= 'display:none'

            //this function will refresh the screen
            refreshScreen();

};
      //here is the acutal function
  function refreshScreen() {



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
      document.getElementById("youwin-image").style.csstext = "display: block";
      document.getElementById("pressLeyTryAgain").style.csstext = "display: block";
      wins++;
      finishedGame = true;
    }
  }

  