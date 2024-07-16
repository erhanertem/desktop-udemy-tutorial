const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
	console.log(text.className);
	// text.className = 'card dark';
	// text.classList.add('dark');
	// text.classList.remove('card');

	// text.classList.toggle('dark');
	// text.classList.toggle('hidden');

	// text.classList.replace('card', 'dark');

	// Change Style
	// itemList.style.backgroundColor = 'red';

	items.forEach((item, index) => {
		if (index + 1 === 2) {
			return (item.style.color = 'blue');
		} else {
			return (item.style.color = 'red');
		}
	});
}

document.querySelector('button').onclick = run;
