let words= [
    "storm",
    "cyclops",
    "spider-man",
    "captain america",
    "thor",
    "iron Man",
    "hulk",
    "captain marvel",
    "wolverine",
    "black widow",
    "black panther",
    "marvel girl",

]
//To have, once user guesses the character; an image of the character and a sound byte to play at the same time
//Need to have user input their guess into the game
document.onkeydown

let word = words[Math.floor(Math.random() * words.length)];
console.log(word
    )

let answerArray = [];
for (var i =0; i < word.length; i++) {
    answerArray[i] = "_";
    
}

let remainingLetters = word.length;
(answerArray.join(" "));

console.log(answerArray.join(" "))