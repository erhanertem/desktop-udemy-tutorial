// // #1. Quick & Dirty Way
// document.body.addEventListener('keydown', (e) => {
// 	const insert = document.getElementById('insert');

// 	insert.innerHTML = /*html*/ `
//    			<div class="key">
// 				${e.key === ' ' ? 'Space' : e.key}
// 				<small>e.key</small>
// 			</div>

// 			<div class="key">
// 				${e.keyCode}
// 				<small>e.keyCode</small>
// 			</div>

// 			<div class="key">
// 				${e.code}
// 				<small>e.code</small>
// 			</div>`;
// });

function showKeyCodes(e) {
	const insert = document.getElementById('insert');
	insert.innerHTML = '';

	const keyCodes = {
		'e.key': e.key === ' ' ? 'Space' : e.key,
		'e.keyCode': e.keyCode,
		'e.code': e.code,
	};

	console.log(keyCodes);
	for (let key in keyCodes) {
		const div = document.createElement('div');
		div.className = 'key';
		const small = document.createElement('small');
		const keyText = document.createTextNode(key);
		const valueText = document.createTextNode(keyCodes[key]);
		small.appendChild(keyText);
		div.appendChild(valueText);
		div.appendChild(small);

		insert.appendChild(div);
	}
}
window.addEventListener('keydown', showKeyCodes);
