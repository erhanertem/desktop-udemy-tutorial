function showConfirmationModal(event) {
	// Disable default form behaviour
	event.preventDefault();
	console.log(event.detail.elt.dataset);
	// Extract data-xxx attribute value assigned to HTML element
	const action = event.detail.elt.dataset.action;

	// PROVIDE MODAL TEMPLATE
	const confirmationModal = `
		<dialog class="modal">
			<div id="confirmation">
				<h2>Are you sure?</h2>
				<p>Do you really want to ${action} this place?</p>
				<div id="confirmation-actions">
					<button id="action-no" className="button-text">No</button>
					<button id="action-yes" className="button">Yes</button>
				</div>
			</div>
		</dialog>
	`;
	// INSERT MODAL TO THE DOM
	document.body.insertAdjacentHTML('beforeend', confirmationModal);
	// SELECT INSERTED DIALOG MODAL
	const dialog = document.querySelector('dialog');

	// Handle no btn
	const noBtn = document.getElementById('action-no');
	noBtn.addEventListener(
		'click',
		() => dialog.remove() // Close the dialog
	);
	// Handle yes btn
	const yesBtn = document.getElementById('action-yes');
	yesBtn.addEventListener('click', () => {
		event.detail.issueRequest(); // NOTE: issueRequest is given to us by HTMX which compliments htmx:confirm event listener and tells HTMX to go ahead with the INTENDED ACTION while closing the dialog box with the code below - See htmx:comfirm for issueRequest()
		dialog.remove(); //Close the dialog
	});

	// MAKE DIALOG ELEMENT VISIBLE
	dialog.showModal(); // showModal() is a built-in function for dialog element
}

document
	// beforeRequest do not work with Handling yes btn in the modal so we got to replace it with htmx:confirm event action
	// .addEventListener('htmx:beforeRequest', showConfirmationModal);
	.addEventListener('htmx:confirm', showConfirmationModal);
