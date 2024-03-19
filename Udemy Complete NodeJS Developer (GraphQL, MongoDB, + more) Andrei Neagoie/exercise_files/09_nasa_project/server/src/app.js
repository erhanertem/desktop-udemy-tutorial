// THIS IS THE EXPRESS SERVER RUNNING UNDER NODEJS HTTP SERVER
const express = require('express');

const app = express();

// PARSES ANY INCOMING JSON FROM THE BODY OF ANY REQUEST
app.use(express.json());

module.exports = app;
