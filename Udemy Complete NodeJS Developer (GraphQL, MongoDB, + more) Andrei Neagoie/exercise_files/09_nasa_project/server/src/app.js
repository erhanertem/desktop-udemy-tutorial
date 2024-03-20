// THIS IS THE EXPRESS SERVER RUNNING UNDER NODEJS HTTP SERVER
const path = require('path');
const express = require('express');
const cors = require('cors');

const planetsRouter = require('./routes/planets/planets.router');

const app = express();

// > MIDDLEWARE CHAIN
app.use(
  // SETS RESPONSE HEADER A-C-A-O AS PORT 3000 TO ALLOW SERVER COMMUNICATE SAFELY
  cors({
    origin: 'http://localhost:3000', //WHITELISTED/ALLOWED PORT
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);
app.use(express.json()); // PARSES JSON FROM THE BODY OF ANY INCOMING REQUEST
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(planetsRouter);

module.exports = app;
