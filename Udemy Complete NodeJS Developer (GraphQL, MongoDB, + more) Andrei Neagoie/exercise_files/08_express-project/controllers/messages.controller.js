const path = require('node:path');
// /folder/files.jpg (@mac) \folder\files.jpg (@windows)

function getMessages(_req, res) {
  const filePath = path.join(
    __dirname,
    '..',
    'public',
    'images',
    'skimountain.jpg'
  );
  // __dirname is the NodeJS global variable that gets the name of the folder where this messages.controller.js module lives
  // .. is required as we want to go up from here
  // to dial into 'public' folder
  // which has the file named ....
  // FINAL PATH would look like this --> C:\CODING\REPO ARCHIEVE\udemy\Udemy Complete NodeJS Developer (GraphQL, MongoDB, + more) Andrei Neagoie\exercise_files\08_express-project\public\images\skimountain.jp

  res.sendFile(filePath); //BUT WHERE IS THIS FILE LOCATED....WE NEED TO PROVIDE THE ABSOLUTE PATH OF THIS FILE BEFORE SENDING IT....IN ORDER TO FIND THIS FILE WE CAN MAKE USE OF BUILT-IN NODEJS MODULE CALLED PATH. @ https://nodejs.org/en/learn/manipulating-files/nodejs-file-paths
  // res.send('<ul><li>Hello Einstein</li></ul>');
}

function postMessage(_req, _res) {
  console.log('Updating messages...');
}

module.exports = { getMessages, postMessage };
