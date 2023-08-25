export function createElem(tag,innerText){
    let elem = document.createElement(tag)
    elem.innerText = innerText
    document.body.append(elem)
}

import shared from './shared.js'
console.log(shared)