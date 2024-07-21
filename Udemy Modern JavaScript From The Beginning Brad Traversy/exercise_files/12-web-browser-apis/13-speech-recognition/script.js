// // FOR COMPATIBILITY
// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const rec = new SpeechRecognition();

// FOR COMPATIBILITY
// Create a new instance of SpeechRecognition
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

rec.lang = 'en-US';
rec.continuous = true; //True keeps recording voice

// Event handler for when a result is received
rec.addEventListener('result', function (e) {
	// Define the acceptable colors
	const acceptableColors = [
		'red',
		'blue',
		'green',
		'pink',
		'brown',
		'purple',
		'magenta',
		'orange',
		'black',
		'white',
		'grey',
	];

	console.log(e);
	for (let i = e.resultIndex; i < e.results.length; i++) {
		const script = e.results[i][0].transcript.toLowerCase().trim();
		console.log(script);

		if (acceptableColors.includes(script)) {
			document.body.style.backgroundColor = script;
		} else {
			alert('Please say a color');
		}
	}
});

rec.start();
