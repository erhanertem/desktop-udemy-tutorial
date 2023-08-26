export default function () {
  let p = document.createElement('p');
  p.innerText = join(['default', 'export'], ' ');
  document.body.append(p);
}

export function sayHi() {
  let p = document.createElement('p');
  p.innerText = join(['hello', '!'], ' ');
  document.body.append(p);
}
