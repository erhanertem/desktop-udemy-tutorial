const express = require('express');

const messagesController = require('../controllers/messages.controller');

const messagesRouter = express.Router();
// > GET REQUEST /messages endpoint
// #1
// app.get('/messages', messagesController.getMessages);
// #2
messagesRouter.get('/', messagesController.getMessages);
// > POST REQUEST /messages endpoint
// #1
// app.post('/messages', messagesController.postMessage);
// #2
messagesRouter.post('/', messagesController.postMessage);

module.exports = messagesRouter;
