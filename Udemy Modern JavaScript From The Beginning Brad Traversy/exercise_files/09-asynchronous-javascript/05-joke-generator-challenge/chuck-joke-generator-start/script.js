const btn = document.querySelector('#joke-btn');

btn.addEventListener('click', () => {
	console.log('Button clicked');
	// #1. Create AJAX communication
	const xhr = new XMLHttpRequest();

	// #2. Point URL
	xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

	// #3. Send AJAX communication
	xhr.send();

	// #4.Retrieve the data
	xhr.onreadystatechange = function () {
		console.log(this);
		// #4. IF SUCCESS IN RESPONSE DO....
		if (this.readyState === 4) {
			if (this.status === 200) {
				const data = JSON.parse(this.responseText);
				document.querySelector('#joke').innerText = data.value;
			} else {
				document.querySelector('#joke').innerText = 'Unavailable @ the moment';
			}
		}
	};
});
