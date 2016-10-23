$(document).ready(function() {
	draw();
});

function draw () {
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
ctx.lineWidth = 2;

// green box
ctx.fillStyle = 'rgb(0,102,0)';
	ctx.beginPath();
	ctx.moveTo(x,0);
	ctx.lineTo(xFourth,yFourth);
	ctx.lineTo(x,y);
	ctx.lineTo(xFourth*3,yFourth);
	ctx.lineTo(x,0);
	ctx.fill();
ctx.stroke();

// red box
ctx.fillStyle = 'rgb(204,0,0)';
	ctx.beginPath();
	ctx.moveTo(x*2, y);
	ctx.lineTo(xFourth*3,yFourth);
	ctx.lineTo(x,y);
	ctx.lineTo(xFourth*3,yFourth*3);
	ctx.lineTo(x*2,y);
	ctx.fill();
ctx.stroke();

// blue box
ctx.fillStyle = 'rgb(0,128,255)';
	ctx.beginPath();
	ctx.moveTo(x,y*2);
	ctx.lineTo(xFourth*3,yFourth*3);
	ctx.lineTo(x,y);
	ctx.lineTo(xFourth,yFourth*3);
	ctx.lineTo(x,y*2);
	ctx.fill();
ctx.stroke();

// yellow box
ctx.fillStyle = 'rgb(255,255,0)';
	ctx.beginPath();
	ctx.moveTo(0,y);
	ctx.lineTo(xFourth,yFourth);
	ctx.lineTo(x,y);
	ctx.lineTo(xFourth,yFourth*3);
	ctx.lineTo(0,y);
	ctx.fill();
ctx.stroke();

// white area in middle
ctx.fillStyle = 'rgb(255,255, 255)';
	ctx.beginPath();
	ctx.moveTo(x,yFourth);
	ctx.lineTo(xFourth*3,y);
	ctx.lineTo(x,yFourth*3);
	ctx.lineTo(xFourth,y);
	ctx.lineTo(x,yFourth);
	ctx.fill();
ctx.stroke();
}