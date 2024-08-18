const video = document.querySelector('#video');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');
const progressBar = document.querySelector('#progress');
const timestamp = document.querySelector('#timestamp');

function playPause() {
	video.paused ? video.play() : video.pause();
}

function updateIcon() {
	if (video.paused) {
		play.innerHTML = /*html*/ `<i class="fa fa-play fa-2x"></i>`;
	} else {
		play.innerHTML = /*html*/ `<i class="fa fa-pause fa-2x"></i>`;
	}
}

function stopVideo() {
	video.pause();
	video.currentTime = 0;
}

function updateProgress() {
	// 100% is the full length. Take the percentage of it based on duration
	progress.value = (video.currentTime / video.duration) * 100;

	// Get Minutes
	let minutes = Math.floor(video.currentTime / 60);
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	// Get Seconds
	let seconds = Math.floor(video.currentTime % 60);
	if (seconds < 10) {
		seconds = '0' + seconds;
	}

	timestamp.innerHTML = `${minutes}:${seconds}`;
}

function setProgress() {
	//SET VIDEEO CURRENT TIME BASED ON SLIDER LOCATION PERCENTILE
	//progress.value is a string
	video.currentTime = (+progress.value * video.duration) / 100;
}

play.addEventListener('click', playPause);
stop.addEventListener('stop', stopVideo);
progress.addEventListener('click', setProgress);

video.addEventListener('click', playPause);
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('pause', updateIcon);
video.addEventListener('play', updateIcon);
