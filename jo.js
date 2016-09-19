function starWarsHangman(){
	var words = ["han solo"];

		game = {
			solution: words[Math.floor(Math.random()*words.length)],
			reveal: [],
			guessed: [],
			right: [],
			lives: 6
		};

		showLives = document.getElementById("lives");
		showGame = document.getElementById("gameDisplay");
		showGuessed = document.getElementById("guessed");
		showLastGuess = document.getElementById("lastGuess");
		showStatus = document.getElementById("gameStatus");
		showGuessCheck = document.getElementById("letterCheck");
		loseAudio = new Audio('assets/audio/no.mp3');
		winAudio = new Audio('assets/audio/greatshot.mp3');
		replay = document.getElementById("replay");

		//check if the letters in solution are in the alphabet, so people don't have to guess numbers/hyphens/spaces

	 	alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];

	// render the game, substituting letters to guess with "_"
	for(var i=0;i<game.solution.length;i++){
		if (alphabet.indexOf(game.solution[i]) == -1){
			game.reveal.push(game.solution[i]);
		} else {
			game.reveal.push("_");
		}
	}

	replay.className = "hidden";

	//show the game display with spaces and hyphens.
	showGame.innerHTML = game.reveal.join("");

	console.log("Game Rendered!");

	//play the game

	document.onkeyup = function(event) {
		var guess = String.fromCharCode(event.keyCode).toLowerCase();

		if(game.guessed.indexOf(guess) != -1){
			showStatus.innerHTML = "You have already guessed " + guess +". Try again.";
			//answer has been previously guessed. Notify player to try again.
		} else {
			//answer has not been guessed already. Resume the game.
			showStatus.innerHTML = "";
			game.guessed.push(guess);
			showLastGuess.innerHTML = guess;
			showGuessed.innerHTML = game.guessed.join(" &middot; ");

			if (game.solution.indexOf(guess) == -1){
				//guess is not in solution. take a life, add guess to wrong array. Continue
				game.lives--;
				showLives.innerHTML = game.lives;
				showGuessCheck.innerHTML = "<span class='text-danger'>There is no " + guess + ".</span>";

				if(game.lives < 1){
					showStatus.innerHTML = "You lose! Game over, bro.";
					showGame.innerHTML = "<span class=text-danger>" + game.solution+ "</span>"
					loseAudio.play();
					replay.className = "text-center";
					console.log("Game Over :(");
				}

			} else {
				//correct guess. Display letter in the game.
				showLives.innerHTML = game.lives;
				showGuessCheck.innerHTML = "<span class='text-success'>" + guess + " works!</span>";
				game.right.push(guess);

				//replace "guess" in the reveal array at proper keys. PROBLEM - only replacing one instance.
				for(i=0;i<game.solution.length;i++){
					if(game.solution[i] == guess){
						game.reveal[i] = guess;
					}
				}

				showGame.innerHTML = game.reveal.join("");

				if(game.reveal.indexOf("_") == -1){
					showStatus.innerHTML = "You got it! You sure know your Star Wars, ... nerd.";
					showGame.innerHTML = "<span class=text-success>" + game.solution + "</span>";
					winAudio.play();
					replay.className = "text-center";
					console.log("You win!");

					if(game.lives == 6){
						showStatus.innerHTML = "PERFECT SCORE! You're either really nerdy or you've played too much.";
					}
				}
			}
		}
	}
}
