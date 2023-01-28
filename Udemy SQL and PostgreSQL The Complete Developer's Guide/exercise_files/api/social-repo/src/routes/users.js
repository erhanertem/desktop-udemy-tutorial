const express = require('express');
const UserRepo = require('../repos/user-repo');

const router = express.Router();

// fetch all users
router.get('/users', async (req, res) => {
  //Run a query to get all users
  const users = await UserRepo.find();

  //Send the result back to the person who made this request
  res.send(users);
});
// fetch a user with ID
router.get('/users/:id', async (req, res) => {
  const { id } = req.params;

  const user = await UserRepo.findById(id);

  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});
// create a new user
router.post('/users', async (req, res) => {
  // console.log(req.body);
  // receive user input as JSON format
  const { username, bio } = req.body;
  // Register the user to DB
  const user = await UserRepo.insert(username, bio);
  // Return a response
  res.send(user);
});
// update a user with ID
router.put('/users/:id', async (req, res) => {
  //Pull out the user id for udpate
  const { id } = req.params;
  //Get the user input for the user data changes
  const { username, bio } = req.body;
  // Update the user info in the DB
  const user = await UserRepo.update(id, username, bio, new Date());

  // Return a response
  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});
// delete a user with ID
router.delete('/users/:id', async (req, res) => {
  //Pull out the user id for delete
  const { id } = req.params;
  // Update the user info in the DB
  const user = await UserRepo.delete(id);

  // Return a response
  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
