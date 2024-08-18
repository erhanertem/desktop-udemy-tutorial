const audio = document.querySelector('#audio');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const stop = document.querySelector('#stop');
const currentTime = document.querySelector('#current-time');
const volume = document.querySelector('#volume');

// AUDIO CONTROLLER EVENT LISTENERS
play.addEventListener('click', () => audio.play());
pause.addEventListener('click', () => audio.pause());
stop.addEventListener('click', () => {
	audio.pause();
	audio.currentTime = 0;
});
// AUDIO STREAM PROGRESS EVENTLISTENER TO SHOW ON SCREEN
audio.addEventListener('timeupdate', () => {
	currentTime.innerText = audio.currentTime;
});
// AUDIO VOLUME EVENTLISTENER TO SHOW ON SCREEN
volume.addEventListener('change', () => {
	audio.volume = volume.value; //Set audio stream volume to slider input value
});
