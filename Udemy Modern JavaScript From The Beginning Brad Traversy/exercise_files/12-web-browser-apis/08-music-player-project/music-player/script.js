const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// SONG TITLES
const songs = ['hey', 'summer', 'ukulele'];
// ASSIGN AN INITIAL SONG
let songIndex = 2;
// LOAD THE SONG W/ PERTINENT INFORMATION
loadSong(songs[songIndex]);
function loadSong(song) {
	title.innerText = song;
	audio.src = `music/${song}.mp3`;
	cover.src = `images/${song}.jpg`;
}

// PLAY & PAUSE FUCNTIONALITY
function playSong() {
	musicContainer.classList.add('play');
	playBtn.querySelector('i.fas').classList.remove('fa-play');
	playBtn.querySelector('i.fas').classList.add('fa-pause');
	audio.play();
}
function pauseSong() {
	musicContainer.classList.remove('play');
	playBtn.querySelector('i.fas').classList.add('fa-play');
	playBtn.querySelector('i.fas').classList.remove('fa-pause');
	audio.pause();
}
playBtn.addEventListener('click', () => {
	const isPlaying = musicContainer.classList.contains('play');

	if (isPlaying) {
		pauseSong();
	} else playSong();
});

function prevSong() {
	// DECREMENT SONG
	songIndex--;
	// IF SONG LIST CONSUMED REWIND
	if (songIndex < 0) songIndex = songs.length - 1;

	// LOAD THE SONG
	loadSong(songs[songIndex]);
	// PLAY AUDIO
	playSong();
}
function nextSong() {
	// INCREMENT SONG
	songIndex++;
	// IF SONG LIST CONSUMED REWIND
	if (songIndex > songs.length - 1) songIndex = 0;

	// LOAD THE SONG
	loadSong(songs[songIndex]);
	// PLAY AUDIO
	playSong();
}
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

function updateProgressBar(event) {
	// console.log('🦖', event);
	const { duration, currentTime } = event.srcElement;
	const progressPercent = (currentTime / duration) * 100;
	progress.style.width = `${progressPercent}%`;
}
audio.addEventListener('timeupdate', updateProgressBar);

function setProgress(event) {
	const width = this.clientWidth;
	const clickX = event.offsetX;
	const duration = audio.duration;

	audio.currentTime = (clickX / width) * duration;
}
progressContainer.addEventListener('click', setProgress);
