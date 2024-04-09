const fs = require('fs');
const path = require('path');
const https = require('https');

const express = require('express');
const helmet = require('helmet');

require('dotenv').config();

const PORT = 3000;

const app = express();

// > SECURITY MIDDLEWARES @ THE VERY TOP
// NOTE: HELP PROTECT ALL END POINTS THAT COMES AFTER IT
app.use(helmet());

// MIDDLEWARE FUNCTION
function checkLoggedIn(req, res, next) {
  const isLoggedIn = true; //TODO
  if (!isLoggedIn) {
    return res.status(401).json({ error: 'You must login!' });
  }
  next();
}

// > OAUTH AUHENTICATION
const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};
// #1. USER LOGIN ENDPOINT - AUTHORIZATION CODE REQUEST TO AUTH GOOGLE
app.get('/auth/google', (req, res) => {});
// #2. THIS IS THE ENDPOINT GOOGLE SENDS THE AUTHORIZATION CODE RESPONSE TO THE APP
app.get('/auth/google/callback', (req, res) => {});
// #3. USER LOGOUT GENERIC ENDPOINT - USER DES NOT NEED TO PROVIDE ANY DATA
app.get('/auth/logout', (req, res) => {});

// IN EXPRESS EACH ENDPOINT CAN GET A MIDDLEWARE/MIDDLEWARES AFTER THE ROUTE DEFINITION
app.get('/secret', checkLoggedIn, (req, res) => {
  return res.send('Your personal value is 42!');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

https
  .createServer(
    {
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem'),
    }, // server options object
    app //req listener
  )
  .listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
