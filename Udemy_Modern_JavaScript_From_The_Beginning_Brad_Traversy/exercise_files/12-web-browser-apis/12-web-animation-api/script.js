const ball = document.getElementById('ball');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const reverse = document.getElementById('reverse');
const speedUp = document.getElementById('speed-up');
const slowDown = document.getElementById('slow-down');

const rollAnimation = [
	{
		transform: 'rotate(0) translate3D(-50%, -50%, 0)',
		color: 'white',
	},
	{ color: 'blue' },
	{ transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: 'white' },
];

const rollOptions = {
	duration: 3000,
	iterations: Infinity,
};

const animation = ball.animate(rollAnimation, rollOptions);

pause.addEventListener('click', () => animation.pause());
play.addEventListener('click', () => {
	animation.playbackRate = 1;
	animation.play();
});
reverse.addEventListener('click', () => animation.reverse());
speedUp.addEventListener('click', () => {
	animation.playbackRate *= 2;
});
slowDown.addEventListener('click', () => {
	animation.playbackRate *= 0.5;
});
