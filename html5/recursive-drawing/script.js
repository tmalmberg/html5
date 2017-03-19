const PI2RAD  = Math.PI / 180;

var canvas    = document.createElement('canvas');
var ctx       = canvas.getContext('2d');

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);

var l =
{
	x1: 0,
	y1: 0,
	x2: 0,
	y2: 0,
	l:  40,
	s:  12,
	d:  20,
	itr:12
};

function line(x1, y1, x2, y2, s, r, g, b, a)
{
	ctx.beginPath();
	ctx.moveTo(x1 + (canvas.width / 2), y1 + (canvas.height / 2));
	ctx.lineTo(x2 + (canvas.width / 2), y2 + (canvas.height / 2));
	ctx.lineWidth = s;
	ctx.strokeStyle = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a, ')';
	ctx.stroke();
};

function render(x, y, i, a, s, itr, k)
{
	if(i > 0)
	{
		i --;
		s --;

		if(k <= 0) k = 0;

		if(i == itr)
		{
			l.x1 = l.x2;
			l.y1 = l.y2;
			l.x2 = l.x1 - (k * 3 * Math.cos((-135 + a) * PI2RAD));
			l.y2 = l.y1 - (k * 3 * Math.sin((-135 + a) * PI2RAD));

			line(l.x1, l.y1, l.x2, l.y2, s, 0, 0, 0, 1);
		}

		l.x1 = x;
		l.y1 = y;
		l.x2 = l.x1 - (k * Math.cos((90 + a) * PI2RAD));
		l.y2 = l.y1 - (k * Math.sin((90 + a) * PI2RAD));

		line(l.x1, l.y1, l.x2, l.y2, s, (l.itr * 6) - (i * 10), (l.itr * 8) - (i * 10), 0, (12 / 100) * i);
		setTimeout(render, 250, l.x2, l.y2, i, l.d + a, s, itr, k - i);

		l.x1 = x;
		l.y1 = y;
		l.x2 = l.x1 - (k * Math.cos(a * PI2RAD));
		l.y2 = l.y1 - (k * Math.sin(a * PI2RAD));

		line(l.x1, l.y1, l.x2, l.y2, s, (l.itr * 6) - (i * 10), (l.itr * 8) - (i * 10), 0, (12 / 100) * i);
		setTimeout(render, 250, l.x2, l.y2, i, -l.d + a, s, itr, k - i);
	}
};

function main()
{
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	l.l = l.itr * 7;
	render(l.x2, l.y2, l.itr, 45, l.s, l.itr - 1, l.l);
};

main();

