export function createElem(tag, innerText) {
  let elem = document.createElement(tag)
  elem.innerText = innerText
  document.body.append(elem)
}