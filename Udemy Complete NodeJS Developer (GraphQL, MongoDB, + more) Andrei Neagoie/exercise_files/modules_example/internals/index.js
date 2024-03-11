// const request = require('./request');
// const response = require('./response');

module.exports = {
  ...require('./request'),
  ...require('./response'),
};

// module.exports = {
//   send: request.send,
//   REQUEST_TIMEOUT: request.REQUEST_TIMEOUT,
//   read: response.read,
// };
