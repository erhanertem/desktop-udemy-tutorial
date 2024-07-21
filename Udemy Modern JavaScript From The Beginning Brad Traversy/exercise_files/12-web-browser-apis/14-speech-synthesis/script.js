const voiceSelect = document.getElementById('voice-select');
const textInput = document.getElementById('text-input');
const form = document.getElementById('form');

// INITIALIZE SPEECHSYNTHESIS
const synth = window.speechSynthesis;

let voices;
// ADD VOICES TO THE SELECT DROP DOWN
function addVoicesToSelect() {
	// GET ALL THE SYS PROVIDED VOICES
	voices = synth.getVoices();

	// CREATE FOLD DOWN MENU OPTIONS HTML ELEMENTS
	for (let i = 0; i < voices.length; i++) {
		// CREATE FOLD DOWN MENU OPTION ELEMENT
		const option = document.createElement('option');
		option.textContent = `${voices[i].name} -${voices[i].lang}`;
		// MARK THE DEFAULT VOICE'S TEXT CONTENT DIFFERENTLY
		if (voices[i].default) {
			option.textContent += ' - DEFAULT';
		}
		// SET ATTRIBUTE OF THE VOICE ON THE OPTION ELEMENT
		option.setAttribute('data-lang', voices[i].lang);
		option.setAttribute('data-name', voices[i].name);
		// APPEND THE CREATED ELEMENT TO SELECT HTML ELEMENT AS A CHILD
		voiceSelect.appendChild(option);
	}
}
addVoicesToSelect();

// UPDATE VOICES WHEN THEY CHANGE
// if (speechSynthesis.onvoiceschanged !== undefined) {
// 	speechSynthesis.onvoiceschanged = addVoicesToSelect;
// }
// Alternate rewrite of above code....
if ('onvoiceschanged' in speechSynthesis) {
	speechSynthesis.addEventListener('voiceschanged', addVoicesToSelect);
}

function onSubmit(event) {
	// PREVENT DEFAULT SUBMIT BEHAVIOUR
	event.preventDefault();
	// TELLS SPEECHSYNTHESIZE WHAT TO BE SAID
	const utterThis = new SpeechSynthesisUtterance(textInput.value);
	console.log(utterThis);
	// GET SELECTED VOICE'S NAME
	const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
	// SET THE SELECTED VOICE TO SPEECHSYNTHESIZE
	for (let i = 0; i < voices.length; i++) {
		//IF THE SELECT VOICE OPTION MATCHES THE CURRENT SELECT ASSIGN AS VOICE PROPERTY OF UTTERTHIS OBJECT AND QUIT LOOP
		if (voices[i].name === selectedOption) {
			utterThis.voice = voices[i];
			break;
		}
	}

	// LET SPEECHSYNTHESIZE SPEAK THE SUBMITTED TEXT INPUT
	synth.speak(utterThis);
}
form.addEventListener('submit', onSubmit);
