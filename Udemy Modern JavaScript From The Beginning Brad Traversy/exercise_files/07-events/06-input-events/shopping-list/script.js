const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
	console.log(e.target.value);
}
function onChecked(e) {
	// console.log(e.target.checked);
	const isChecked = e.target.checked;
	heading.textContent = isChecked ? 'Checked' : 'Not Checked';
}
function onFocus(e) {
	console.log('Input is focused');
	itemInput.style.outlineStyle = 'solid';
	itemInput.style.outlineWidth = '1px';
	itemInput.style.outlineColor = 'red';
}
function onBlur(e) {
	console.log('Input is off focus');
	itemInput.style.outlineWidth = '0px';
}

// Eventlistener for regular input fields
itemInput.addEventListener('input', onInput);
// Eventlistener for drop down selection menus
priorityInput.addEventListener('change', onInput);
// Eventlistener for checked items
checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
