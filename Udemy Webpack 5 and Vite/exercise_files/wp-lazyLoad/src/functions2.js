export default function () {
  let p = document.createElement('p');
  p.innerText = join(['default', 'export', 'I am 2nd default'], ' ');
  document.body.append(p);
}
