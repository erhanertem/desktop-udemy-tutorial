// THIS IS THE EXPRESS SERVER RUNNING UNDER NODEJS HTTP SERVER
const express = require('express');
const cors = require('cors');

const planetsRouter = require('./routes/planets/planets.router');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(express.json()); // PARSES ANY INCOMING JSON FROM THE BODY OF ANY INCOMING REQUEST
app.use(planetsRouter);

module.exports = app;
