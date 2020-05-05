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
let losses = 0 //this is how many losses they have
let wrongGuess =[]; //
let guessesLeft = 10;
let solved = 0;
let userGuesses = []
let finishedGame = false
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



}



//have a blank spaces for the word


// let remainingLetters = word.length;
// (answerArray.join(" "));
// //shows remaining spaces after a letter has been guessed correctly. 
// console.log(answerArray.join(" "))

// //Need to have user input their guess into the game

// //this function and loop allows realtime update on the blank array with a correctly guessed letter
// document.onkeydown = function(event){
//   for (j = 0; j < word.length; j++){
//     if(event.key === word.charAt(j)){
//       answerArray.splice(j, 1, event.key)
//       console.log(answerArray.join (" "))    
//     }
//   }
// };

//set up a number of guesses to 10 guesses before game states a failure notification


//To have, once user guesses the character; an image of the character and a sound byte to play at the same time

//DOM Manipulation for the page
//Have each of the elements not in console log but display on the page
//
//have 