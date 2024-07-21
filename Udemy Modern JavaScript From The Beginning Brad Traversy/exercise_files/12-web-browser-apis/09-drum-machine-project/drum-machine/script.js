window.addEventListener('keydown', playSound);

function playSound(event) {
	// SELECT AUDIO AND KEY ELEMENTS WITH MATCHING DATA-KEY VALUES
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

	// console.log(audio, key);
	// GUARD CLAUSE - IF THERE IS NO MATCHING DATA-KEY WITHIN AUDIO ELEMENTS JUST DO NOTHING
	if (!audio) return;

	// PLAY FROM SCRATCH
	audio.currentTime = 0;
	audio.play();
	// WHEN KEY PRESSED ANIMATE CORRESPONDING LETTER BUTTONA
	key.classList.add('playing');
	// SIMULATE BUTTON BACKWARD ANIMATION WITH DELAY
	setTimeout(() => {
		key.classList.remove('playing');
	}, 100);
}
