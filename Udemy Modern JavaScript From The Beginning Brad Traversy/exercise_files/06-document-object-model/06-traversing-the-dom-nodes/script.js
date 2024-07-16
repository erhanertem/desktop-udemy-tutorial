let output;

const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].innerText = 'Child Oneyyy';
output = parent.childNodes[3].outerHTML;
output = parent.childNodes[5].style.color = 'red';

parent.lastChild.textContent = 'Mirror';

// Parent Node Access from Child
const child = document.querySelector('.child');
output = child.parentNode;
child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

//Siblings
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem.nextSibling;

console.log(output);
