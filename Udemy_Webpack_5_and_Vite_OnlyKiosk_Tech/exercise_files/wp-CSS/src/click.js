import './css/click.scss';

export default function () {
  if (document.getElementById('notice')) return;
  let p = document.createElement('p');
  p.setAttribute('id', 'notice');
  p.innerText = 'created by click.js';
  document.body.append(p);
}
