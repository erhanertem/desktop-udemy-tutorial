let btn = document.getElementById('btn');
btn.onclick = () => {
  import('./click.js').then(({ default: click }) => {
    click();
  });
};

import London from '../assets/London.png';
import Txt from '../assets/London.txt?raw';

let img = document.getElementById('img');
let p = document.getElementById('txt');
img.src = London;
p.innerText = Txt;

import test from '../assets/test?url';
let script = document.createElement('script');
script.src = test;
document.head.append(script);
