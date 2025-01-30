// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
	// // List of the IDs to target
	// const messageIds = [
	// 	'error-message',
	// 	'notify-message',
	// 	'signup-email-error',
	// 	'signup-password-error',
	// 	'singup-confirmPassword-error',
	// ];

	// List of the IDs to target - Configuration object to specify behavior for each message ID
	const messageConfig = {
		'error-message': 'click',
		'notify-message': 'timeout',
		'signup-email-error': 'click',
		'signup-password-error': 'click',
		'singup-confirmPassword-error': 'click',
	};

	// Function to hide the message elements
	const hideMessages = () => {
		Object.keys(messageConfig).forEach((id) => {
			const messageElement = document.getElementById(id);
			if (messageElement) {
				messageElement.style.display = 'none';
			}
		});
	};

	// Loop through the configuration and apply the logic for each ID
	Object.keys(messageConfig).forEach((id) => {
		const messageElement = document.getElementById(id);
		if (messageElement) {
			if (messageConfig[id] === 'timeout') {
				// Remove the element after a timeout
				setTimeout(() => {
					messageElement.style.display = 'none';
				}, window.FLASH_REMOVE_DELAY || 3000);
			} else if (messageConfig[id] === 'click') {
				// Add event listeners for click and keypress events
				document.addEventListener('click', hideMessages);
				document.addEventListener('keypress', hideMessages);
			}
		}
	});

	// > TIMEOUT FLASH ONLY
	// // Loop through the IDs and apply the logic for each
	// messageIds.forEach((id) => {
	// 	const messageElement = document.getElementById(id);

	// 	// Check if the element exists
	// 	if (messageElement) {
	// 		// Remove the element after 3 seconds (3000 milliseconds)
	// 		setTimeout(() => {
	// 			messageElement.style.display = 'none';
	// 		}, window.FLASH_REMOVE_DELAY);
	// 	}
	// });

	// > HIDE FLASH ON CLICK/KEYPRESS ONLY
	// // Function to hide the message elements
	// const hideMessages = () => {
	// 	messageIds.forEach((id) => {
	// 		const messageElement = document.getElementById(id);
	// 		if (messageElement) {
	// 			messageElement.style.display = 'none';
	// 		}
	// 	});
	// };
	// // Add event listeners for click and keypress events
	// document.addEventListener('click', hideMessages);
	// document.addEventListener('keypress', hideMessages);
});
