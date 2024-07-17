const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach((items) => {
// 	items.addEventListener('click', (e) => e.target.remove());
// });

// EVENT DELGATION TO A PARENT ELEMENT
list.addEventListener('click', (event) => {
	event.target.closest('li').remove();
});
list.addEventListener('mouseover', (event) => {
	if (event.target.tagName === 'LI') {
		event.target.style.color = 'red';
	}
});
list.addEventListener('mouseout', (event) => {
	if (event.target.tagName === 'LI') {
		event.target.style.color = 'black';
	}
});
