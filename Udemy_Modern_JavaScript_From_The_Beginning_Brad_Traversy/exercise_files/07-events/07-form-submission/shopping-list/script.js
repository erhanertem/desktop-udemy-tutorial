const form = document.getElementById('item-form');

function onSubmit(e) {
	e.preventDefault();

	const item = document.getElementById('item-input');
	const priority = document.getElementById('priority-input');

	// GUARD CLAUSE
	if (item.value === '' || priority.value === '0') {
		alert('Please fill in all fields');
		return;
	}
	console.log(item.value, priority.value);
}

function onSubmit2(e) {
	e.preventDefault();

	const formData = new FormData(form);

	// #1. Access entries via entries() method
	const entries = formData.entries();
	for (let [key, entry] of entries) {
		console.log('⚠️', entry);
	}

	// #2. Access entries with HTML name ref
	const item = formData.get('item');
	const priority = formData.get('priority');

	// GUARD CLAUSE
	if (item === '' || priority === '0') {
		alert('Please fill in all fields');
		return;
	}

	console.log(item, priority);
	console.log(entries);
}

// form.addEventListener('submit', onSubmit);
form.addEventListener('submit', onSubmit2);
