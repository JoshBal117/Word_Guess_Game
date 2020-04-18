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

]
//To have, once user guesses the character; an image of the character and a sound byte to play at the same time
//Need to have user input their guess into the game

//set a string for generating the random word from
//a list already provided. 
let word = words[Math.floor(Math.random() * words.length)];
console.log(word
    )
//have a blank spaces for the word
let answerArray = [];
for (var i =0; i < word.length; i++) {
    answerArray[i] = "_";    
}



let remainingLetters = word.length;
(answerArray.join(" "));
//shows remaining spaces after a letter has been guessed correctly. 
console.log(answerArray.join(" "))


while(remainingLetters > 0) {
    console.log(answerArray.join(" "))
    //
    let guess = prompt("Guess a letter, or press Cancel to stop playing.")
    if(guess === null) {
        break;
    } else if(guess.length !==1) {
            alert("Please enter a single letter.");
        } else{for (var j=0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}




//have the underscores replaced by a correct guess from the user


         
//game code is going to go here as well as
//keep track of wrong guess
//place right guesses into answer field
//



