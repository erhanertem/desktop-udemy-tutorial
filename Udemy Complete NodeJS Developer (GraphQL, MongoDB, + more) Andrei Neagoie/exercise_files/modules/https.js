const internals = require('./internals');
// const { send } = require('./internals/request.js');
// const { read } = require('./internals/response.js');

function makeRequest(url, data) {
  // send(url, data);
  internals.send(url, data);
  return read();
}

const responseData = makeRequest('www.google.com', 'HELLO THERE⚠️');
console.log(responseData);

console.log(require.cache);
