const internals = require('./internals');
// const { send } = require('./internals/request.js');
// const { read } = require('./internals/response.js');

function makeRequest(url, data) {
  // send(url, data);
  internals.request.send(url, data);
  return internals.response.read();
}

const responseData = makeRequest('www.google.com', 'HELLO THERE⚠️');
console.log(responseData);

console.log(require.cache);
