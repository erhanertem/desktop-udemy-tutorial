let h1 = document.createElement('h1');
h1.innerText = 'Lazy Loading';
document.body.append(h1);

let button = document.createElement('button');
button.innerText = 'Click to Lazy Load';
document.body.append(button);

// import click from './click';
button.onclick = () => {
  import('./click.js') //IMPORT DYNAMICALLY with import function
    .then(({ default: click }) => {
      click();
    });
};
