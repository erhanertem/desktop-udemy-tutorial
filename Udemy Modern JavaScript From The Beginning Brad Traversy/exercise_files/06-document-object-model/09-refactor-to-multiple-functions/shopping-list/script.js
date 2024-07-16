function createNewItem(item) {
	const li = document.createElement('li');
	li.appendChild(document.createTextNode(item));

	const button = createButton('remove-item btn-link text-red');
	const icon = createIcon('fa-solid fa-xmark');

	button.appendChild(icon);
	li.appendChild(button);

	document.querySelector('.items').appendChild(li);
}

function createButton(classes) {
	const button = document.createElement('button');
	button.className = classes;
	return button;
}
function createIcon(classes) {
	const icon = document.createElement('i');
	icon.className = classes;
	return icon;
}

createNewItem('Cheese');
