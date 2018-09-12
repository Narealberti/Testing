var words = [ "acid", "atoms", "oxygen", "electron", "proton" ];
var currentWordIndex = -1;
var guessedWord = [];

var numberOfLettersGuessed = 0;
var totalGuessesAllowed = 8;

var numberOfWins = 0;

window.onload = function() {
	loadWord(); 
	
	document.addEventListener("keydown", guessLetter, false);

}

function loadWord() {
	currentWordIndex++;
	var currentWord = words[currentWordIndex];
	var numberOfBlanks = currentWord.length;
	guessedWord = [];
	numberOfLettersGuessed = 0;
	
	for (var i = 0; i < numberOfBlanks; i++)
	{	
		guessedWord.push("_");
		
	}
	
	document.getElementById("NumberOfWins").innerHTML = numberOfWins;
	displayGuessedWord();
}

function displayGuessedWord() {
	document.getElementById("WordToGuess").innerHTML  = "";
	
	for (var i = 0; i < guessedWord.length; i++)
	{	
		document.getElementById("WordToGuess").innerHTML += " " + guessedWord[i] + " ";
		
		
	}

	document.getElementById("LettersGuessed").innerHTML = numberOfLettersGuessed;
	document.getElementById("NumberOfGuessesLeft").innerHTML = totalGuessesAllowed - numberOfLettersGuessed;
}

function guessLetter(e) {
		var currentWord = words[currentWordIndex];

	var key = String.fromCharCode( e.keyCode ).toLowerCase();
	var correctGuess = false;
	
	for (var i = 0; i < currentWord.length; i++) {
		
		if ( currentWord[i] == key ) {
			guessedWord[i] = key;
			correctGuess = true;
		}
	
	}
	
	if (!correctGuess)
		numberOfLettersGuessed++;
	
	
	if (!guessedWord.includes("_")) {
		alert("You won!");
		numberOfWins++;
		loadWord();
	}
	else if (numberOfLettersGuessed === totalGuessesAllowed) 
	{
		alert("You lost");
		loadWord();
	}
	else {
		displayGuessedWord();
	}
}
	