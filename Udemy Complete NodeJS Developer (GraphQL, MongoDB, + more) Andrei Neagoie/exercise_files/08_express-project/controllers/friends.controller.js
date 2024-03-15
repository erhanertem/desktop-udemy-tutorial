const model = require('../models/friends.model');

function getFriends(_req, res) {
  // res.send('Hellooow My Friend');
  // IMPORTANT EXPRESS GIVES US JSON() FN INLIEU OF GENERIC SEND() FN TO BE EXPLICIT THAT WE ARE SENDING A JSON DATA
  // json() strigify the object sent
  res.json(model);
  // res.send({
  //   id: 1,
  //   name: 'Albert',
  // });
}

function getFriend(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = model[friendId];
  if (friend) {
    // EXPRESSJS DEFAULTS TO STATUS(200) IF NONE GIVEN BUT FOR THE SAKE OF BEING EXPLICIT, WE HEREBY PROVIDE STATUS(200)
    res.status(200).json(friend);
    //Status() is a chainable version of nodejs's setStatus()
  } else {
    res.status(404).json({ error: 'Friend does not exist' });
  }
}

function postFriend(req, res) {
  //GUARD CLAUSE
  if (!req.body.name) {
    return res.status(400).json({ error: 'Missing friend name' });
  }

  //json format object is passed from sender to the server thru req
  const newFriend = {
    id: model.length,
    name: req.body.name,
  };
  model.push(newFriend);

  //SENDS NEWFRIEND AS JSON STRING AS A RESPONSE
  res.json(newFriend);
}

module.exports = { getFriends, getFriend, postFriend };
