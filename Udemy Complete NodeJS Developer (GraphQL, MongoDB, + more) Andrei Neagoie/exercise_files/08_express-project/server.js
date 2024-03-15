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
  } else {
    res.status(404).json({ error: 'Friend does not exist' });
  }
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
