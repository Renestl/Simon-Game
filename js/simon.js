window.onload = function() {
    console.log( "ready!" );

	//disable buttons on init
	$(function() {
		$('button.btn').attr('disabled', true);
	});

	// toggles On/Off switch
	$("input[name='onSwitch']").click(function() {
		$('.power').toggleClass('input:checked');

		// toggles to ON, game play can start
		if($('.power').hasClass('input:checked') == true) {
			console.log("it's true");
			$('button.btn').attr('disabled', false); //makes gameboard clickable
			$('.counter').addClass('counterOn'); // makes score brighter red color
			$('#start').click(startGame);
			$("input[name='gameMode']").prop('disabled', false); // allows strict mode to be selected
			$('#strict').click(modePlay); // activates strict mode

			// toggles game to OFF
		} else {
			console.log("not true");
			$('button.btn').attr('disabled', true);
			$('.counter').removeClass('counterOn');
			$('#start').off('click');
			strictOff();
			$("input[name='gameMode']").prop('disabled', 'disabled'); // disables strict mode
		}
	})


}; // end window.onload

var sequence = [],
		count = 0,
		colors = ['#green', '#red', '#blue', '#yellow'];


// audio variables
var sound = {
		greenNote: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
		redNote: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
		blueNote: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
		yellowNote: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
	};

	// gives buttons sound on mouse click
	$('.btn').click(function() {
		switch(this.id) {
			case 'green': sound.greenNote.play();
				break;
			case 'red': sound.redNote.play();
				break;
			case 'blue': sound.blueNote.play();
				break;	
			case 'yellow': sound.yellowNote.play();
				break;	
		}
	});

	// starts game play
	function startGame() {
		$('#start').click(function() {
			console.log('You can start!');
		});
	}

	// toggles Strict switch
	function modePlay() {
		$("input[name='gameMode']").click(function() {
			$('.mode').toggleClass('input:checked');
			// toggles mode to STRICT
			if($('.mode').hasClass('input:checked') == true) {
				console.log("strict");

			// toggles mode to EASY
			} else {
				console.log("not strict");
			}
		});
	}

	function strictOff() {
		$(".mode").removeClass('input:checked');
		$(".mode").removeClass('.slider:before');
	}

// TODO:
// make strict toggle unclickable/unselectable
// * Animate squares
// 	- green
// 	- red
// 	- blue
// 	- yellow
// * Make animation random
// * store sequence in array
// * if statement
// 	- correct, continue and push another random position into array
// 	- incorrect, alert
// 			if !== strict mode
// 				+ replay sequence
// 			else
// 				restart game
// * When 20 steps reached, alert
// 	- restart game