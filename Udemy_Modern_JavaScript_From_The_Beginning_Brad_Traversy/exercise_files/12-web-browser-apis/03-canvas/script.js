// #1. Create a canvas element in HTML
// #2. Select this canvas element
const canvas = document.getElementById('my-canvas');
// #3. Select a context 2d vs 3d
const ctx = canvas.getContext('2d');

// Draw Rectangle
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 150);

// Draw Circle
ctx.arc(300, 300, 100, 0, Math.PI * 2);
ctx.fillStyle = 'red';
ctx.fill();

// Draw Lines
ctx.strokeStyle = 'blue';
ctx.lineWidth = 5;
ctx.beginPath(); //start line
ctx.moveTo(10, 10); // line pos @ start
ctx.lineTo(300, 300); //line pos @ end
ctx.stroke(); //end line

//Draw Text
ctx.font = '30px Arial';
ctx.fillStyle = 'blue';
ctx.fillText('Hello World', 300, 250, 400);
ctx.lineWidth = 1;
ctx.strokeText('Hello World', 300, 450, 400);
