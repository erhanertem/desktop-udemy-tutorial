const image = document.querySelector('img');

let start; //INTIIAL TIMESTAMP PER REQUESTANIMATIONFRAME()
let done = false; //STOPPER SETUP

function step(timestamp) {
	console.log(timestamp);
	if (start === undefined) {
		start = timestamp;
	}

	const elapsed = timestamp - start;

	// GUARD CLAUSE
	if (elapsed > 5000) {
		done = true;
	}
	if (done) {
		return;
	}

	image.style.transform = `translateX(${elapsed / 10}px) rotate(${elapsed / 10}deg)`;

	requestAnimationFrame(step);
}

requestAnimationFrame(step);
