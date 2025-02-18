const deleteProduct = (btn) => {
	// > #1. Extract values from DOM elements @ EJS template
	// const x = btn.closest('div').querySelector("input[name='productId']").value;
	const prodId = btn.parentNode.querySelector("input[name='productId']").value;
	const csrfToken = btn.parentNode.querySelector("input[name='_csrf']").value;
	const productElement = btn.closest('article');

	// > #2. Proceed with async request to backend API and asking for JSON res back from it
	fetch(
		// Fetch req hit endpoint @ backend api to trigger deletion in DB
		`/admin/product/${prodId}`,
		// Fetch req configuration
		{
			method: 'DELETE', // Needs to match the endpoint controller fn HTTP verb
			headers: {
				'Content-Type': 'application/json',
				_csrf: csrfToken, // Header key per csrf-sync documentation
			},
		}
	)
		.then((result) => {
			return result.json(); // Return promise of receiving data
		})
		.then((data) => {
			console.log(data);
			// productElement.remove(); // Not supported by old IE
			productElement.parentNode.removeChild(productElement); // Support by all browsers
		})
		.catch((err) => console.log(err));
};
