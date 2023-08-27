import '../css/lazy.scss'
export default function(){
    let p = document.createElement('p')
    p.setAttribute('id','lazy')
    p.innerText = 'Lazy Loading'
    document.body.append(p)
}