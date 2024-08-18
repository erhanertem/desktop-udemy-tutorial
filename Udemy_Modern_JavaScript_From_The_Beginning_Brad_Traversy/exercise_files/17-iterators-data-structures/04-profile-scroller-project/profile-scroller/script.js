// PROVIDE ARRAY
const people = [
	{
		name: 'Jamie Williams',
		age: 26,
		gender: 'female',
		location: 'Los Angeles, CA',
		imageURL: 'https://randomuser.me/api/portraits/women/1.jpg',
		looking: 'Female looking for male',
	},
	{
		name: 'John Smith',
		age: 35,
		gender: 'male',
		location: 'New York, NY',
		imageURL: 'https://randomuser.me/api/portraits/men/1.jpg',
		looking: 'Male looking for female',
	},
	{
		name: 'Bob Johnson',
		age: 42,
		gender: 'male',
		location: 'Chicago, IL',
		imageURL: 'https://randomuser.me/api/portraits/men/2.jpg',
		looking: 'Male looking for male',
	},
	{
		name: 'Shannon Jackson',
		age: 29,
		gender: 'female',
		location: 'Los Angeles, CA',
		imageURL: 'https://randomuser.me/api/portraits/women/2.jpg',
		looking: 'Female looking for female',
	},
];
// CREATE GENERATOR FUNCTION W/ * SIGNATURE
function* scrollThruPeps(people) {
	// MODULA - INFINITE LOOP
	let index = 0;
	while (true) {
		yield people[index++ % people.length];
	}
}
// INVOKE ITERATOR
const iterator = scrollThruPeps(people);

const container = document.querySelector('.container');
const img = document.querySelector('img');
const profile = document.querySelector('.profile-info');
const nextBtn = document.querySelector('#next');

function iterateThru() {
	const { name, age, gender, location, imageURL, looking } = iterator.next().value;

	img.src = imageURL;
	profile.innerHTML =
		/*html*/
		`
	   <h3>${name}</h3>
	   <p>${age} Years Old</p>
	   <p>${location}</p>
	   <p>${looking}</p>
	  `;
}

nextBtn.addEventListener('click', iterateThru);
