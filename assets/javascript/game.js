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

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (var i =0; i < word.length; i++) {
    answerArray[i] = "_";
}