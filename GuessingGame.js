var wins = 0;
var losses = 0;
var attempts = 10;
var secretLetter = []
var lettersClicked = [];

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


// the computer chooses a letter
var secretletter = getRandomletter();

function getRandomletter() {

    var index = Math.floor(Math.random() * alphabet.length);
    console.log("computer: ", alphabet[index]);
    return alphabet[index]
}

// your page initialization code here
// the DOM will be available here
(function() {

	// Set everything to default
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;
	document.getElementById("attempts").innerHTML = attempts;
	document.getElementById("lettersClicked").innerHTML = lettersClicked;

	document.onkeyup = function (event) {
		
		// get clicked letter
		var clicked = event.key;

		// make sure the user selects a value a-z
		var regexp = /[a-z]/gi;
		if (!regexp.test(clicked)) {
		  alert("please enter a letter");
		}
		else {
		  console.log("user: ", clicked);
		}
		
		// reset computer choice if the user loses
		if (attempts === 0) {
			
			losses++;
			attempts = 10;
			lettersClicked = [];
			secretletter = getRandomletter();
			alert("You lost!");
			document.getElementById("losses").innerHTML = losses;
			document.getElementById("attempts").innerHTML = attempts;
			document.getElementById("lettersClicked").innerHTML = lettersClicked;
			
		// compares the random secretletter and clicked letter
		} else if (secretletter === clicked) {
		
			
			wins++;
			attempts = 10;
			lettersClicked = [];
			secretletter = getRandomletter();
			alert("You won!");
			document.getElementById("wins").innerHTML = wins;
			document.getElementById("attempts").innerHTML = attempts;
			document.getElementById("lettersClicked").innerHTML = lettersClicked;
			
		} else {
			
			attempts--;
			lettersClicked.push(clicked);
			document.getElementById("attempts").innerHTML = attempts;
			document.getElementById("lettersClicked").innerHTML = lettersClicked;
			alert("Guess again!");
			
		}

	}

})();