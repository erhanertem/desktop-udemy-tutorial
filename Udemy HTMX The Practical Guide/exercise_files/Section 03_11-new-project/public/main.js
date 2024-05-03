function showConfirmationModal() {
	console.log('Showing modal...');
}

document
	.querySelector('li')
	.addEventListener('htmx:beforeRequest', showConfirmationModal);
