// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
	// List of the IDs to target
	const messageIds = [
		'error-message',
		'notify-message',
		'signup-email-error',
		'signup-password-error',
		'singup-confirmPassword-error',
	];

	// Loop through the IDs and apply the logic for each
	messageIds.forEach((id) => {
		const messageElement = document.getElementById(id);

		// Check if the element exists
		if (messageElement) {
			// Remove the element after 3 seconds (3000 milliseconds)
			setTimeout(() => {
				messageElement.style.display = 'none';
			}, window.FLASH_REMOVE_DELAY);
		}
	});
});
