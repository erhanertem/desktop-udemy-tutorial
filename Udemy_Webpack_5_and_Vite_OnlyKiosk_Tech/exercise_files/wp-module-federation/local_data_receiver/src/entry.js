let elem = document.createElement('p')
elem.innerHTML = '<b>LOCAL PKG</b>'
document.body.append(elem)

import('remote_path/entry')

import('remote_path/info').then(res => {
  console.log(res)
})

import('remote_path/createElem').then(res => {
  console.log(res)
})

