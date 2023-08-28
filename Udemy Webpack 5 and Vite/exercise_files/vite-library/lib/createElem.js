import $ from 'jquery'

export function createElem(tag,innerText){
    let elem = '<'+tag+'/>'
    $(elem).text(innerText).appendTo('body')
}