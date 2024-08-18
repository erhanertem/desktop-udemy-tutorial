let out;

// READ ATTRIBUTES - getelementbyid/getelementbyclassname
out = document.getElementById('app-title');
out = document.getElementById('app-title').getAttribute('id');
out = document.getElementById('app-title').id;
out = document.getElementsByClassName('form-input')[0].getAttribute('class');

out = document.querySelector('.form-control').className;
out = document.querySelector('#app-title').id;

// SET ATTRIBUTES
document.getElementById('app-title').id = 'new-id';
document.getElementById('new-id').title = 'Shopping List';

document.getElementById('new-id').setAttribute('class', 'title');

// GET/CHANGE CONTENT OF A SELECTED ELEMENT
const title = document.getElementById('new-id');
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>';

//CHANGE STYLES
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// READ ATTRIBUTES - querySelector
out = document.querySelector('h1');
out = document.querySelector('#app-title');
out = document.querySelector('.container');
out = document.querySelector('input[type="text"]');
out = document.querySelector('li:nth-child(2)').innerText = 'Apple Juice';
document.querySelector('li:nth-child(2)').style.color = 'red';

// SELECTING A SINGLE ELEMENT FROM A MULTIPLE SELECTION
const list = document.querySelector('ul');
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';
console.log(list);

console.log(out);
