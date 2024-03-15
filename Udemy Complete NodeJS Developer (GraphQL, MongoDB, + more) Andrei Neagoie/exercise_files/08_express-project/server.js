// WE NAMED THIS FILE NOT INDEX.JS BUT SERVER.JS BECAUSE THERE IS A SPECIAL CASE THAT NODE WILL RUN THIS FILE W/PUT EDITING PACKAGE.JSON

const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: 'Sir Erhan ERTEM',
  },
  {
    id: 1,
    name: 'Ms. Melisa ERTEM',
  },
];

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
app.get('/friends', (req, res) => {
  // res.send('Hellooow My Friend');
  // IMPORTANT EXPRESS GIVES US JSON() FN INLIEU OF GENERIC SEND() FN TO BE EXPLICIT THAT WE ARE SENDING A JSON DATA
  res.json(friends);
  // res.send({
  //   id: 1,
  //   name: 'Albert',
  // });
});

// > GET REQUEST /friends/2 endpoint
app.get('/friends/:friendId', (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    // EXPRESSJS DEFAULTS TO STATUS(200) IF NONE GIVEN BUT FOR THE SAKE OF BEING EXPLICIT, WE HEREBY PROVIDE STATUS(200)
    res.status(200).json(friend);
    //Status() is a chainable version of nodejs's setStatus()
  } else {
    res.status(404).json({ error: 'Friend does not exist' });
  }
});

// > POST REQUEST /friends
app.post('/friends', (req, res) => {
  //GUARD CLAUSE
  if (!req.body.name) {
    return res.status(400).json({ error: 'Missing friend name' });
  }

  //json format object is passed from sender to the server thru req
  const newFriend = {
    id: friends.length,
    name: req.body.name,
  };
  friends.push(newFriend);

  //SENDS NEWFRIEND AS JSON STRING AS A RESPONSE
  res.json(newFriend);
});

// > GET REQUEST /messages endpoint
app.get('/messages', (req, res) => {
  res.send('<ul><li>Hello Einstein</li></ul>');
});

// > POST REQUEST /messages endpoint
app.post('/messages', (req, res) => {
  console.log('Updating messages...');
});

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
