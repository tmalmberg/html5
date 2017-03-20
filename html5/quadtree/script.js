var canvas    = document.createElement('canvas');
var ctx       = canvas.getContext('2d');

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);

function main()
{
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
};

main();

