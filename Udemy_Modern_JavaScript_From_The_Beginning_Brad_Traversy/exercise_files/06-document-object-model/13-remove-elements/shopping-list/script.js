(function removeClearBtn() {
	document.querySelector('#clear').remove();
})();

(function removeFirstItem() {
	const ul = document.querySelector('ul');
	const li = document.querySelector('li');

	ul.removeChild(li);
})();

(function removeItem(itemNumber = 3) {
	const ul = document.querySelector('ul');
	const li = document.querySelector(`li:nth-child(${itemNumber})`);

	ul.removeChild(li);
})();

(function removeItem(itemNumber = 1) {
	const ul = document.querySelector('ul');
	const li = document.querySelectorAll('li')[`${itemNumber}`];

	ul.removeChild(li);
})();

(function removeItem(itemNumber = 0) {
	const li = document.querySelectorAll('li');

	li[itemNumber].remove();
})();
