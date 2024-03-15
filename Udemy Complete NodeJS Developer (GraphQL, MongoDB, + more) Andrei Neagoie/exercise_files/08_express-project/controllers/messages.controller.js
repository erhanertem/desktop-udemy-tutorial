function getMessages(_req, res) {
  res.send('<ul><li>Hello Einstein</li></ul>');
}

function postMessage(_req, _res) {
  console.log('Updating messages...');
}

module.exports = { getMessages, postMessage };
