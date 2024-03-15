// WE NAMED THIS FILE NOT INDEX.JS BUT SERVER.JS BECAUSE THERE IS A SPECIAL CASE THAT NODE WILL RUN THIS FILE W/PUT EDITING PACKAGE.JSON

const express = require('express');

const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');

const app = express();

const PORT = 3000;

// > REGISTER A MIDDLEWARE
// We want this middleware @ the top of all middlewares because we want the timer to capture as much time as possible of the process.
app.use(function (req, res, next) {
  const start = Date.now();
  next();
  // actions go here.... MEANING RETURNING RES LAST VISITS HERE...
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} , it took ${delta}ms`);
});
// > REGISTER A MIDDLEWARE THAT PARSES(DESTRINGIFY) THE JSON DATA PASSED INTO REQ FLOW TO A JS OBJECT
// USEFULL FOR POST REQUEST
app.use(express.json());

// > GET REQUEST /friends endpoint
app.get('/friends', friendsController.getFriends);
// > GET REQUEST /friends/2 endpoint
app.get('/friends/:friendId', friendsController.getFriend);
// > POST REQUEST /friends
app.post('/friends', friendsController.postFriend);

// > GET REQUEST /messages endpoint
app.get('/messages', messagesController.getMessages);
// > POST REQUEST /messages endpoint
app.post('/messages', messagesController.postMessage);

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
