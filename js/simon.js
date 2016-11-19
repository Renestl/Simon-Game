window.onload = function() {
	$('button.btn').attr('disabled', true);
};



var game = {
	count: 0,
	colors: ['#green', '#red', '#blue', '#yellow'],
	compSequence: [],
	playerSequence: [],
	sound: {
		green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
		red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
		blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
		yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
	},
	strict: false
}

function newGame() {
	clearGame();
}

function clearGame() {
	game.compSequence = [];
	game.count = 0;
	addCount();
}

function addCount() {
	game.count++;
	$('.counter').addClass('counterOn');

	setTimeout(function() {
		$('.counter').html(game.count);
	}, 300);

	gameMove();
}

function removeCount(){
	$('.counter').removeClass('counterOn');
	game.count = '--';
	$('.counter').html(game.count);
}

function gameMove() {
	game.compSequence.push(game.colors[(Math.floor(Math.random() * game.colors.length))]);

	console.log(game.compSequence);

	showMove();
}

function showMove() {
	var i = 0;
	var moves = setInterval(function() {
		gamePlay(game.compSequence[i]);

		i++;

		if (i >= game.compSequence.length){
			clearInterval(moves);
		}
	}, 800);

	clearPlayerSequence();
}

function gamePlay(area) {
	$(area).addClass('active');
	sound(area);
	
	setTimeout(function() {
		$(area).removeClass('active');
	}, 300);
}

function sound(name) {
	switch(name) {
		case '#green': game.sound.green.play();
			break;
		case '#red': game.sound.red.play();
			break;
		case '#blue': game.sound.blue.play();
			break;	
		case '#yellow': game.sound.yellow.play();
			break;	
	};
}

function clearPlayerSequence() {
	game.playerSequence = [];
}

$('.btn').click(function() {
	var id = this.id;
	
	addPlayer(id);
});

function addPlayer(id) {
	var area = '#' + id
	
	game.playerSequence.push(area);
	playerTurn(area);
}


function playerTurn(x) {
	if(game.playerSequence[game.playerSequence.length - 1] !== game.compSequence[game.playerSequence.length - 1]) {

		if (game.strict) {
			newGame();
		} else {
			console.log('try again')
			showMove();
		}
	} else {
		sound(x);
		var winner = game.playerSequence.length === game.compSequence.length;
		if (winner) {
			if (game.count == 20) {
				alert("Congrats, You Won!!");
				setTimeout(function() {
					newGame();
				}, 300);
			} else {
				nextLevel();
			}
		}
	}
}

function nextLevel() {
	addCount();
}

function isStrict() {
	$('#strict').click(function() {

		if (game.strict == false) {
			game.strict = true;
			$('.light').css('background-color', '#ff0000');
			newGame();
		} else {
			game.strict = false;
			$('.light').css('background-color', '#330000');
			newGame();
		}

	});
}

function isStart() {
	$('#start').click(function() {
		newGame();
		isStrict();
		$('button.btn').attr('disabled', false);
	});
}

$("input[name='onSwitch']").click(function() {
		$('.power').toggleClass('input:checked');

		if($('.power').hasClass('input:checked') == true) {
			isStart();
		} 
		else {
			$('button.btn').attr('disabled', true);
			$('#start').off('click');
			$('#strict').off('click');
			game.compSequence = [];
			removeCount();
		}
});