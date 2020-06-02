$(document).ready() ;{

  let marvelCharacters= [
    "storm", 
    "cyclops", 
    "spiderman", 
    "captain america",
    "hawkeye",
    "winter soldier",
    "falcon", 
    "thor", 
    "iron man", 
    "hulk", 
    "star lord",
    "gamora",
    "groot",
    "baby groot", 
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
    "stan lee"];
  
  //creating a new object called game that will keep track of game state, current word, guessed lettes, wins and losses
  let objGame = {
                "word":"",
                "img":"",
                "unguessed":"",
                "wrongGuess":[],
                "rightGuess":[],
                "wins":0,
                "losses":0,
                "status":0
                }
  
  var letters = "abcdefghijklmnopqrstuvwxyz"
  
  
  //my element variables
  var gameBoard = document.getElementById("gameBoard");
  let wins = document.getElementById("wins");
  let losses = document.getElementById("losses");
  let guessed = document.getElementById("guessed");
  let imgHangman = document.getElementById("imgHangman");
  let imgCharacter = document.getElementById("imgCharacter");
  var txtHidden = document.getElementById("txtMobile");
  let gameOverMsg = document.getElementById("gameOverMsg");
  
  var chracterSRC = "assets/images/chaaracterImages";
  wins.innerText = "WINS: " + objGame.wins;
  losses.innerText = "LOSSES: " +objGame.losses;
  
  document.addEventListener("click", function(event) {
    if (!event.target.matches("#btnEscape")) {
      return;
    }
  
    NextWord(); 
  
    
  }, false);
  
  clearBoard();
  
  
  function clearBoard() {
  
    if (Arrwords.length > 0) {
      objGame.status = 0
      gameOverMsg.innerHTML = "";
      imgHangman.src = "assets/images/Hangman/hangman_0.png"
      objGame.wrongGuess = [];
      objGame.rightGuess = [];
      guessed.innerText = "GUESSED"
      objGame.word = marvelCharacters[Math.floor(Math.random() * marvelCharacters.length)];
      objGame.unguessed = findUniqueString(objGame.word);
      objGame.unguessed = objGame.unguessed.replace(' ', '');
      //This is a vairable to that remove the current word from marvelCharacters
      var iCurrentWordIdx = marvelCharacters.indexOf(objGame.word);
      marvelCharacters.splice(iCurrentWordIdx, 1);
      gameBoard.innerText = hideUnguessedLetters(objGame).tpUpperCase()
    
  
  
      //The following pictures are for when the characters are correctly guessed
        imgCharacter.src = ""
        characterSRC = "assets/images/characterImages"
          switch (objGame.word) {
              case "Ant-MAn":
              characterSRC = characterSRC + "Ant-Man.jpeg"
              break;
              case "Baby Groot":
              characterSRC = characterSRC + "BabyGroot.jpeg"
              break;
              case "Beast":
              characterSRC = characterSRC + "Beast.jpeg"
              break;
              case "Black Bolt":
              characterSRC = characterSRC + "BlackBolt.jpeg"
              break;
              case "Black Panther":
              characterSRC = characterSRC + "BlackPanther.jpeg"
              break;
              case "Black Widow":
              characterSRC = characterSRC + "BlackWidow.jpeg"
              break;
              case "Bruce Banner":
              characterSRC = characterSRC + "Bruce_banner.jpeg"
              break;
              case "Captain America":
              characterSRC = characterSRC + "Captain America.jpeg"
              break;
              case "Captain Marvel":
              characterSRC = characterSRC + "CaptainMarvel.jpeg"
              break;
              case "Cyclops":
              characterSRC = characterSRC + "Cyclops.jpeg"
              break;
              case "Daredevil":
              characterSRC = characterSRC + "Daredevil.jpeg"
              break;
              case "Drax":
              characterSRC = characterSRC + "Drax.jpeg"
              break;
              case "Dr Doom":
              characterSRC = characterSRC + "DrDoom.jpeg"
              break;
              case "Dr Stange":
              characterSRC = characterSRC + "DrStrange.jpeg"
              break;
              case "Emma Frost":
              characterSRC = characterSRC + "EmmaFrost.png"
              break;
              case "Falcon":
              characterSRC = characterSRC + "FAlcon.jpeg"
              break;
              case "Gambit":
              characterSRC = characterSRC + "Gambit.jpeg"
              break;
              case "Gamora":
              characterSRC = characterSRC + "Gamora.jpeg"
              break;
              case "Green Goblin":
              characterSRC = characterSRC + "GreenGoblin.jpeg"
              break;
              case "Groot":
              characterSRC = characterSRC + "groot.jpeg"
              break;
              case "Hulk":
              characterSRC = characterSRC + "Hulk.jpeg"
              break;
              case "Iron Man":
              characterSRC = characterSRC + "IronMan.jpeg"
              break;
              case "Invisible Woman":
              characterSRC = characterSRC + "InvisibleWoman.png"
              case "Jubilee":
              characterSRC = characterSRC + "Jubilee.jpeg"
              break;
              case "Juggernaut":
              characterSRC = characterSRC + "Juggernaut.jpeg"
              break;
              case "Loki":
              characterSRC = characterSRC + "Loki.jpeg"
              break;
              case "Magneto":
              characterSRC = characterSRC + "Magneto.jpeg"
              break;
              case "Mr Fantastic":
              characterSRC = characterSRC + "MrFantastic.jpeg"
              break;
              case "Namor":
              characterSRC = characterSRC + "Namor.jpeg"
              break;
              case "Nick Fury":
              characterSRC = characterSRC + "NickFury.jpeg"
              break;
              case "Phil Coulson":
              characterSRC = characterSRC + "PhilCoulson.jpeg"
              break;
              case "Professor X":
              characterSRC = characterSRC + "ProfX.jpeg"
              break;
              case "Punisher":
              characterSRC = characterSRC + "Punisher.jpeg"
              break;
              case "Quicksilver":
              characterSRC = characterSRC + "Quicksilver.jpeg"
              break;
              case "Rocket":
              characterSRC = characterSRC + "Rocket.jpeg"
              break;
              case "Sabertooth":
              characterSRC = characterSRC + "Sabertooth.jpeg"
              break;
              case "Spider Man":
              characterSRC = characterSRC + "SpiderMan.jpeg"
              break;
              case "Stan Lee":
              characterSRC = characterSRC + "Stan Lee.jpeg"
              break;
              case "Star Lord":
              characterSRC = characterSRC + "StarLord.jpeg"
              break;
              case "Storm":
              characterSRC = characterSRC + "Storm.jpeg"
              break;
              case "Thanos":
              characterSRC = characterSRC + "Thanos.jpeg"
              break;
              case "Thor":
              characterSRC = characterSRC + "Thor.jpeg"
              break;
              case "Toad":
              characterSRC = characterSRC + "Toad.jpeg"
              break;
              case "Venom":
              characterSRC = characterSRC + "Venom.jpeg"
              break;
              case "Kingpin":
              characterSRC = characterSRC + "WilsonFisk(Kingpin).jpeg"
              break;
              case "Wolverine":
              characterSRC = characterSRC + "wolverine.jpeg"
              break;    
              }
              } else {
              gameBoard.innerHTML = "GAME OVER"
              }
  
  }
  
  //This will   find a uniue letter in a string, and makes sure that it has not been guessed
  function findUniqueString(str){
    var unique = "";
  
    for(var i=0;i < str.length;i++){
  
        if(unique.indexOf(str.charAt(i)) == -1){
            unique += str[i];
        }        
    }
    return unique
  }
  
  
  //This function will replace unguessed letters with _ to be shown to the user
  
  
  function hideUnguessedLetters(objGame){
      
    displayWord = objGame.word
    var sLetter = ""
       
    for(var i=0;i < objGame.unguessed.length; i++){
                
        sLetter = objGame.unguessed.charAt(i) 
                
        for(var x=0; x < objGame.word.length; x++){
            if (objGame.word.charAt(x) == ' '){
                //do nothing
            }
            else if (objGame.word.charAt(x) == sLetter){
                displayWord = displayWord.replace(sLetter,'_');
              
            }
  
        }
  
    }
    return displayWord
  }
  function NextWord(){
  
    //If match was not yet won or lost, put word back in circulation.
    if (objGame.status == 0){
        arrWords.push(objGame.word);
    }
  
    clearBoard();
  }
  
  
  //this is gong to be the key press fucntion that will allow the pusers to sumbit a guess. 
  document.onkeyup = function(event) {
  
        //this will allow any keypress to besubmitted as a lowercase
  
        userSelection = event.key;
        userSelection = userSelection.toLowerCase();
  
        if (txtHidden.value.length > 0) {
          txtHidden.value = '';
        }
  
        //if escape is pushed, reset the board
        if (userSelection === "escape" ) {
  
          NextWord();
  
        }else if (objGame.status == "0") {
  
          
  
          //This will check if a letter is apart of the word and has not yet been guessed yet
          if (objGame.unguessed.indexOf(userSelection) > -1){
            objGame.rightGuess.push(userSelection);
            objGame.unguessed = objGame.unguessed.replace(userSelection, '');
            gameBoard.innerText = hideUnguessedLetters(objGame).toUpperCase()
  
  
          } else if(letters.indexOf(userSelection) > -1) {
  
  
            if (objGame.wrongGuess.indexOf(userSelection) < 0 && objGame.rightGuess,indexOf(userSelection) < 0) {
              //this will record the wrong guess and update the hangman 
              objGame.wrongGuess.push(userSelection);
              imgHangman.src = "assets/images/Hangman/hangman_" + objGame.wrongGuess.length + ".png"
                //if hangman img is complete, record the loss and reveal the word
                if (objGame.wrongGuess.length >= 9) {
                  objGame.losses = objGame.losses + 1
                  objGame.status = "1";
                  losses.innerText = objGame.word.toUpperCase();
                }  
  
  
            }
  
  
          }  
              //This w ill display the guessed letter in alphabetical order
              var arrGuessed = objGame.rightGuess.concat(objGame.wrongGuess);
              var guessedMessage = ""
  
              for (var i=0;i < arrGuessed.length;i++){
                  arrGuessed[i] = arrGuessed[i].toUpperCase();
  
              }
              arrGuessed = arrGuessed.sort();
              guessed.innerText = "GUESSED: " + arrGuessed.join (" ")
          
          
              if (objGame.unguessed.length == 0){
                objGame.wins = objGame.wins + 1;
                objGame.status = "1";
                wins.innerText = "WINS: " + objGame.wins;
              }
  
              if (objGame.status > 0){
                gameOverMsg.innerHTML = "Press Escape to continue.";
                imgCharacter.src = characterSRC
              }
        }
  }


}

