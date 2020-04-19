//My steps are define my global variables
//Then to have a randomizer array to randomly select a word
//Next step is set up a blank array to for the guessable word. 
//After that we will need to have the emtpy spaces update after a correct guess

let words= [
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

]
//set a string for generating the random word from
//a list already provided. 
let word = words[Math.floor(Math.random() * words.length)];
console.log(word)
//have a blank spaces for the word
let answerArray = [];
for (var i =0; i < word.length; i++) {
    answerArray[i] = "_";    
}




let remainingLetters = word.length;
(answerArray.join(" "));
//shows remaining spaces after a letter has been guessed correctly. 
console.log(answerArray.join(" "))

//Need to have user input their guess into the game

let wrongGuess =[]


let guessesLeft = 20;

//
document.onkeydown = function(event){
  for (j = 0; j < word.length; j++){
    if(event.key === word.charAt(j)){
      answerArray.splice(j, 1, event.key)
      console.log(answerArray.join (" "))
    }
  }
}

if(guessesLeft <= 0){
  console.log("Don't choke on your aspirations!-Vader")
}
//set up a number of guesses to 20 guesses before game states a failure notification

//To have, once user guesses the character; an image of the character and a sound byte to play at the same time

