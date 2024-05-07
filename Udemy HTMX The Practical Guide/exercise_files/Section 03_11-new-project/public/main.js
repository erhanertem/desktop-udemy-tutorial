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
	// MAKE DIALOG ELEMENT VISIBLE
	dialog.showModal(); // showModal() is a built-in function for dialog element
}

document
	.querySelector('li')
	.addEventListener('htmx:beforeRequest', showConfirmationModal);
