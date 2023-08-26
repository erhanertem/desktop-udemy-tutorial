import _ from 'lodash';
let h1 = document.createElement('h1');
h1.innerText = _.join(['Page', 'TWO'], ' ');
document.body.append(h1);
