const express = require('express');

const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router();

// > REGISTER A MIDDLEWARE FOR ONLY THIS ROUTER
//THE ABSTRACTED ROUTE (PARTIAL APP) MAY ALSO BEAR ITS MIDDLEWARE THAT ONLY AFFECTS THIS ROUTER
friendsRouter.use((req, _res, next) => {
  console.log(`ip address: ${req.ip}`);
  next();
});

// > GET REQUEST /friends endpoint
// #1
// friendsRouter.get('/friends', friendsController.getFriends);
// #2
friendsRouter.get('/', friendsController.getFriends);
// > POST REQUEST /friends endpoint
// #1
// friendsRouter.post('/friends', friendsController.postFriend);
// #2
friendsRouter.post('/', friendsController.postFriend);
// > GET REQUEST /friends/2 endpoint
// #1
// friendsRouter.get('/friends/:friendId', friendsController.getFriend);
// #2
friendsRouter.get('/:friendId', friendsController.getFriend);

module.exports = friendsRouter;
