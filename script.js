var c = document.getElementById('maisonCanvas');
var ctx = c.getContext('2d');
// ctx.arc(x, y, rayon, angleInitial, angleFinal, antihoraire);
// ctx.beginPath();
// ctx.arc(100, 80, 20, 0, Math.PI, true);
// ctx.fillStyle = '#8A0908';
// ctx.fill();

// glace
//bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) cp=> poignées
ctx.beginPath();
ctx.moveTo(200, 150);
ctx.bezierCurveTo(180, 70, 145, 100, 120, 150);
ctx.fillStyle = '#8A0908';
ctx.fill();

// cornet
// quadraticCurveTo(cp1x, cp1y, x, y)
ctx.beginPath();
ctx.moveTo(200, 150);
ctx.quadraticCurveTo(200, 150, 160, 250);
ctx.quadraticCurveTo(120, 150, 120, 150);
ctx.fillStyle = '#AA6522';
ctx.fill();
