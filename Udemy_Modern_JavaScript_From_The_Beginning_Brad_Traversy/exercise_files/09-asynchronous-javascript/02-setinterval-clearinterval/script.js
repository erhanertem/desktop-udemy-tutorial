// const intervalId = setInterval(cb, 1000, 'Hello');

// function cb(a) {
// 	console.log(a, Date.now());
// }

let intervalId;

function changeColor() {
	if (document.body.style.backgroundColor !== 'black') {
		document.body.style.backgroundColor = 'black';
		document.body.style.color = 'white';
	} else {
		document.body.style.backgroundColor = 'white';
		document.body.style.color = 'black';
	}
}
function changeRandomColor() {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	document.body.style.backgroundColor = `#${randomColor}`;
}

function startChange() {
	if (!intervalId) {
		intervalId = setInterval(changeRandomColor, 1000);
	}
}

function stopChange() {
	clearInterval(intervalId);
	document.body.style.backgroundColor = 'white';
	document.body.style.color = 'black';
}
document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);
