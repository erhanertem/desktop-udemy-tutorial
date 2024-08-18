//GET CHILD FROM A PARENT ELEMENT
const parent = document.querySelector('.parent');

output = parent.children;

output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'BOORING';
parent.lastElementChild.innerText = 'zoooing';

//GET PARENT ELEMENT FROM A CHILD
const child = document.querySelector('.child');
output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

//SIBLING ELEMENTS
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem;
// secondItem.nextElementSibling.style.color = 'green';
// secondItem.previousElementSibling.style.color = 'maroon';
console.log('✅', output);
