const poll = new Map();

poll.set('React', 0);
poll.set('Vue', 0);
poll.set('Angular', 0);
poll.set('Svelte', 0);
poll.set('Other', 0);
console.log(poll);

function submitForm(event) {
	event.preventDefault();
	// RETRIEVE THE SELECTION
	const selectedOption = document.querySelector('input[name="poll-option"]:checked');

	// GUARD CLAUSE
	if (!selectedOption) {
		alert('Please select an option');
	}

	let voteCount = poll.get(selectedOption.value);
	poll.set(selectedOption.value, ++voteCount);

	displayResults();

	// DISABLE AFTER SUBMISSION
	const x = document
		.getElementById('poll-form')
		.querySelectorAll('input')
		.forEach((item) => item.setAttribute('disabled', true));
}

function displayResults() {
	// Target div element with result id
	const results = document.getElementById('results');
	// GUARD CLAUSE - clear html content inside div
	results.innerHTML = '';
	for (let [option, votes] of poll) {
		const optionElement = document.createElement('div');
		optionElement.classList.add('border-bottom', 'p-2', 'd-flex', 'justify-content-between');
		optionElement.innerHTML = `<strong>${option}:</strong>${votes}`;

		// REGISTER CREATED ELEMENT TO DOM
		results.appendChild(optionElement);
	}
}

document.getElementById('poll-form').addEventListener('submit', submitForm);
