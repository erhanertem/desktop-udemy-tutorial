// queryselectorall
const listItems = document.querySelectorAll('.item');
console.log(listItems[1].innerText);
listItems[1].style.color = 'red';
console.log(listItems);

// listItems.forEach((item, index) => {
// 	item.style.color = 'blue';
// 	if (index === 1) {
// 		item.remove();
// 	}
// 	if (index === 0) {
// 		item.innerHTML = `NAPLES
//          <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//          </button>`;
// 	}
// });

const listItems2 = document.getElementsByClassName('item');
console.log(listItems2);
console.log(listItems2[2].innerText);

const list = Array.from(listItems2);
list.forEach((item) => console.log(item.innerText));

const listItems3 = document.getElementsByTagName('li');
const list3 = Array.from(listItems3);
list.forEach((item) => console.log(item.innerText));
console.log(listItems3);
