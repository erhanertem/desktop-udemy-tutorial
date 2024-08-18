// // #1. Avoid inline EventListene in HTML
// function onClear() {
// 	alert('Clearrrr');
// }
// // #2. Javascript Event Listener
// // Select the element
// const clearBtn = document.querySelector('#clear');
// // Assign a function on the selected object & event
// clearBtn.onClick = function () {
// 	alert('Clear Items');
// };

// #3. Add EventListener
const clearBtn = document.querySelector('#clear');
function onClear() {
	// alert('Clearrrr');
	const itemList = document.querySelector('ul');
	const items = itemList.querySelectorAll('li');

	// itemList.innerHTML = '';
	items.forEach((item) => item.remove());
	// while (itemList.firstChild) {
	// itemList.removeChild(itemList.firstChild);
	// }
}
// clearBtn.addEventListener('click', function () {
// 	alert('Clear Items');
// });
// clearBtn.addEventListener('click', function () {
// 	console.log('Clear Items');
// });
clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);
// setTimeout(() => clearBtn.click(), 5000);
