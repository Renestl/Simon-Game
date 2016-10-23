$(document).ready(function() {
	render();
});

	// draw canvas and checking for support
	var canvas = document.getElementById('simon');

	if(canvas.getContext) {
		var	ctx = canvas.getContext('2d');
	} else {
	// canvas-unsupported code here
	};

	var x = canvas.width / 2;
	var y = canvas.height / 2;

	var xFourth = canvas.width / 4;
	var yFourth = canvas.height / 4;

// drawing of the simon box
	ctx.lineWidth = 1.5;

	var board = {
		green: {
			'ptx1': x,
			'pty1': 0,
			'ptx2': xFourth,
			'pty2': yFourth,
			'ptx3': x,
			'pty3': y,
			'ptx4': xFourth*3,
			'pty4': yFourth,		
			'pt5x': x,
			'pt5y': 0,
			'fill': 'rgb(0,102,0)'
		},
		red: {
			'ptx1': x*2,
			'pty1': y,
			'ptx2': xFourth*3,
			'pty2': yFourth,
			'ptx3': x,
			'pty3': y,
			'ptx4': xFourth*3,
			'pty4': yFourth*3,		
			'pt5x': x*2,
			'pt5y': y,
			'fill': 'rgb(204,0,0)'
		},
		blue: {
			'ptx1': x,
			'pty1': y*2,
			'ptx2': xFourth*3,
			'pty2': yFourth*3,
			'ptx3': x,
			'pty3': y,
			'ptx4': xFourth,
			'pty4': yFourth*3,		
			'pt5x': x,
			'pt5y': y*2,
			'fill': 'rgb(0,128,255)'
		},
		yellow: {
			'ptx1': 0,
			'pty1': y,
			'ptx2': xFourth,
			'pty2': yFourth,
			'ptx3': x,
			'pty3': y,
			'ptx4': xFourth,
			'pty4': yFourth*3,		
			'pt5x': 0,
			'pt5y': y,
			'fill': 'rgb(255,255,0)'
		},
		white: {
			'ptx1': x,
			'pty1': yFourth,
			'ptx2': xFourth*3,
			'pty2': y,
			'ptx3': x,
			'pty3': yFourth*3,
			'ptx4': xFourth,
			'pty4': y,		
			'pt5x': x,
			'pt5y': yFourth,
			'fill': 'rgb(255,255,255)'
		}
	}

	// draws each square using board.color
	var render = function() {
		ctx.clearRect(0,0,canvas.width, canvas.height);
		
		$.each(board, color);

			function color(key, points) {
				ctx.beginPath();
				ctx.moveTo(points.ptx1, points.pty1);
				ctx.lineTo(points.ptx2, points.pty2);
				ctx.lineTo(points.ptx3, points.pty3);
				ctx.lineTo(points.ptx4, points.pty4);
				ctx.lineTo(points.pt5x, points.pt5y);
				ctx.fillStyle = points.fill;
				ctx.fill();
				ctx.stroke();	
			}
	};

		
// TODO:
// * Add h1 title to white square
// * Add display for rounds
// * Add Start button
// * Add on/off switch
// * Add strict on/off switch
// * Make squares selectable (onMouseDown(?))
// 	- green
// 	- red
// 	- blue
// 	- yellow
// * Animate squares
// 	- green
// 	- red
// 	- blue
// 	- yellow
// -Add sound to each square
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

	


	


