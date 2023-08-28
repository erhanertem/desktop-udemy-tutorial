import $ from 'jquery';

export function createElem(tag, innerText) {
  // let elem = document.createElement(tag);
  // elem.innerText = innerText;
  // document.body.append(elem);
  let elem = '<' + tag + '>';
  $(elem).text(innerText).appendTo('body');
}
