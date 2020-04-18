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
    let guess = prompt("THIS WORKED!!")
    if(guess === null) {
        break;
    } else if (guess.length !== 1) {
        //updating the game state with a guess
            console.log("this worked!");
        } else {for (var j=0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}


