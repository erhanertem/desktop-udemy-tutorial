// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
	// Get the error message element by its ID
	const errorMessage = document.getElementById('error-message');
	// Check if the element exists
	if (errorMessage) {
		// Remove the element after 3 seconds (3000 milliseconds)
		setTimeout(() => {
			errorMessage.style.display = 'none';
		}, window.FLASH_REMOVE_DELAY);
	}
});
