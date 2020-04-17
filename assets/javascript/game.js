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


document.onkeydown

let word = words[Math.floor(Math.random() * words.length)];
console.log(word

    )
    
let answerArray = [];
for (var i =0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remaigningLetters = word.length;
(answerArray.join(""));