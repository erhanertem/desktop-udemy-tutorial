const btn = document.querySelector('#generate');

btn.addEventListener('click', getRandomData);

function displayUser(res) {
	document.querySelector('#user img').src = res.picture.large;
	document.querySelector('#username').childNodes[1].nodeValue = `${res.name.first} ${res.name.last}`;
	document.querySelector('#useremail').childNodes[1].nodeValue = res.email;
	document.querySelector('#userphone').childNodes[1].nodeValue = res.phone;
	document.querySelector('#userlocation').childNodes[1].nodeValue = `${res.location.city} ${res.location.state}`;
	document.querySelector('#userage').childNodes[1].nodeValue = res.dob.age;
}

function toggleSpinner() {
	const spinner = document.querySelector('.spinner');
	spinner.classList.toggle('hidden');
}

function getRandomData() {
	toggleSpinner();
	fetch('https://randomuser.me/api/')
		.then((res) => {
			// console.log(res);
			if (!res.ok) {
				throw new Error('Request Failed');
			}
			return res.json();
		})
		.then((data) => {
			// console.log(data.results[0]);
			displayUser(data.results[0]);
		})
		.catch((err) => {
			console.log(err);
			document.querySelector(
				'#user'
			).innerHTML = /*html*/ `<p class="text-xl text-center text-red-500 mb-5">${err}</p>`;
		})
		.finally(toggleSpinner());
}
