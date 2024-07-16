const div = document.createElement('div');
div.className = 'my-name';
div.classList.add('my-cookie');
div.id = 'my-element';
div.setAttribute('title', 'MyElement');

// div.innerText = 'Hello world';
const text = document.createTextNode('Hello World');
div.appendChild(text);

// document.body.appendChild(div);
document.querySelector('ul').appendChild(div);

console.log(div);
