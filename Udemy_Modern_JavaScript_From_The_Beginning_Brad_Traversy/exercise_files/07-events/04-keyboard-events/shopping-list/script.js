const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
	console.log('keypress');
};
const onKeyUp = (e) => {
	console.log('keyup');
};
const onKeyDown = (e) => {
	console.log('keydown');
	// key
	console.log(e.key);
	// keyCode
	// https://www.toptal.com/developers/keycode/table
	if (e.keyCode === 13) {
		console.log(e.keyCode);
		alert('You pressed enter');
	}
	// code
	console.log('⚠️', e.code);
	//repeat
	if (e.repeat) {
		console.log('You are holding down ' + e.key);
	}

	console.log('Shift: ' + e.shiftKey);
	console.log('Control: ' + e.ctrlKey);
	console.log('Alt: ' + e.altKey);
};
itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
