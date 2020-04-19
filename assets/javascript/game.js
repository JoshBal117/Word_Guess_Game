//My steps are define my global variables
//Then to have a randomizer array to randomly select a word
//Next step is set up a blank array to for the guessable word. 
//After that we will need to have the emtpy spaces update after a correct guess
//

let words= [
    "storm",
    "cyclops",
    "spiderman",
    "captainamerica",
    "thor",
    "ironMan",
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
//setting up a onkeydown function to log key presses
// const input = document.querySelector('input')
// const log = document.getElementById('log')
// input.onkeydown = function logKey(e) {
//     log.textContent += ' ${e.code}';
// }


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




//possible solution?
// while(remainingLetters > 0) {
//     console.log(answerArray.join(" "))
//     //ensure that the user's guess will appear
//     let guess = input.onkeydown
//         console.log("THIS WORKED!!")
//     if(guess === null) {
//         break;
//         console.log("this is working too!")
//     } else if (guess.length !== 1) {
//         //updating the game state with a guess
//             console.log("this worked too!");
//         } else {for (var j=0; j < word.length; j++) {
//             if (word[j] === guess) {
//                 answerArray[j] = guess;
//                 remainingLetters--;
//             }
//         }
//     }
// }

//set up a number of guesses to 15 guesses before game states a failure notification

//To have, once user guesses the character; an image of the character and a sound byte to play at the same time

