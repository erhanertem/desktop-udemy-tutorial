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
router.post('/users', async (req, res) => {});
// update a user with ID
router.put('/users/:id', async (req, res) => {});
// delete a user with ID
router.delete('/users/:id', async (req, res) => {});

module.exports = router;
