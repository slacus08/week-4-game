// Start the game with a function - include scoring, win counter, image

	// global variables
	// Selects a random number to be shown at the start of the game
  	// Number should be should be between 19 - 120
	var computerScore = Math.floor(Math.random()*101+19)
	var playerScore = 0;
	// win loss counter
	var winsCounter = 0;
	var lossesCounter = 0;
	// peanut variables with random number selection
	var peanutOne = (Math.floor(Math.random()*11+2));
	var peanutTwo = (Math.floor(Math.random()*11+2));
	var peanutThree = (Math.floor(Math.random()*11+2));
	var peanutFour = (Math.floor(Math.random()*11+2));


	//Click listeners and html changes - peanut clicks, scoring updates
	$('.computerScore').text(computerScore);

	$('.peanutOne').on('click', function() {
		playerScore = playerScore + peanutOne;
		$('.playerScore').text(playerScore);
		$('#peanutOneValue').text(peanutOne);
		scoreCheck();
	});

	$('.peanutTwo').on('click', function() {
		playerScore = playerScore + peanutTwo;
		$('.playerScore').text(playerScore);
		$('#peanutTwoValue').text(peanutTwo);
		scoreCheck();
	});

	$('.peanutThree').on('click', function() {
		playerScore = playerScore + peanutThree;
		$('.playerScore').text(playerScore);
		$('#peanutThreeValue').text(peanutThree);
		scoreCheck();
	});

	$('.peanutFour').on('click', function() {
		playerScore = playerScore + peanutFour
		$('.playerScore').text(playerScore);
		$('#peanutFourValue').text(peanutFour);
		scoreCheck();
	});


	function scoreCheck () {
		// when playerScore is equal to the computerScore player wins
		if (playerScore===computerScore) {
			alert("Yay you stole all of the friends from Patty! You're popular!");
			winsCounter++;
			$('.winsCounter').text(winsCounter);
			resetGame();
		}
		// when playerScore is greater that computerScore player loses
		if (playerScore>computerScore) {
			alert("No friends for you, loner.");
			lossesCounter++
			$('.lossesCounter').text(lossesCounter);
			resetGame();
		}
	}


	function resetGame() {
		computerScore = (Math.floor(Math.random()*101))+19;
		playerScore = 0;
		peanutOne = (Math.floor(Math.random()*11+1));
		peanutTwo = (Math.floor(Math.random()*11+1));
		peanutThree = (Math.floor(Math.random()*11+1));
		peanutFour = (Math.floor(Math.random()*11+1));
			$('.playerScore').text(playerScore);
			$('.computerScore').text(computerScore);
			$('#peanutOneValue').text("?");
			$('#peanutTwoValue').text("?");
			$('#peanutThreeValue').text("?");
			$('#peanutFourValue').text("?");
	}

