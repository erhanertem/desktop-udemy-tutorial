// QUICK & DIRTY
function createListItem(item) {
	const li = document.createElement('li');
	li.innerHTML = /*html*/ `
		${item}
		<button class="remove-item btn-link text-red">
			<i class="fa-solid fa-xmark"></i>
		</button>
	`;

	document.querySelector('.items').appendChild(li);
}
createListItem('Cheese');

// CLEAN & PERFORMANT
function createNewItem(item) {
	const li = document.createElement('li'); //Create li element
	li.appendChild(document.createTextNode(item)); // Insert text node inside the li element

	const button = document.createElement('button'); // Create button element
	button.className = 'remove-item btn-link text-red'; //Add class to button element

	const icon = document.createElement('i'); // Create i element
	icon.className = 'fa-solid fa-xmark'; //Add class to i element

	button.appendChild(icon); // Insert i element inside button element
	li.appendChild(button); // Insert button element inside li element

	document.querySelector('.items').appendChild(li); //Insert li element group inside the element bearing items classname
}

createNewItem('Eggs');
