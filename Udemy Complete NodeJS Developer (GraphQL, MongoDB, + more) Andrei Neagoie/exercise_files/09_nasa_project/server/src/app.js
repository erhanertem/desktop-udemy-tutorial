// THIS IS THE EXPRESS SERVER RUNNING UNDER NODEJS HTTP SERVER
const path = require('path');
const express = require('express');
// const cors = require('cors');
const morgan = require('morgan');

const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

const app = express();

// > MIDDLEWARE CHAIN
// // > SECURITY RELATED FEATURE
// app.use(
//   // SETS RESPONSE HEADER A-C-A-O AS PORT 3000 TO ALLOW SERVER COMMUNICATE SAFELY
//   cors({
//     origin: 'http://localhost:3000', //WHITELISTED/ALLOWED PORT
//     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//   })
// );
// > SERVER LOGGER
// NOTE: SHOULD BE ABOVE EVERYTHING BELOW SECURITY FEATURES
app.use(morgan('combined'));

app.use(express.json()); // PARSES JSON FROM THE BODY OF ANY INCOMING REQUEST
app.use(express.static(path.join(__dirname, '..', 'public'))); //SERVE THE FRONTEND BUILD PUBLIC FILE LOCATED UNDER SERVER WITH THE BACKEND- SO THAT WE DONT RUN TWO SERVERS RUNNING ON DISTINCT PORTS LISTENING FOR BOTH BACKEND AND FRONTEND

app.use(planetsRouter);
app.use(launchesRouter);

// > FULLSTACK - BACKEND TO FRONT END ROUTES CONNECTION
// NOTE: app.get('/*',...) MEANS ANY ENDPOINT NOT MATCHING ABOVE ROUTES ARE HANDLED BY... THIS APPLIES ALSO TO VUE, ANGULAR PROJECTS WHICH IS BASED ON PUSHSTATE HISTORY WEB API
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
}); //FORCE EXPRESS TO PRESENT INDEX.HTML @ / ROUTE. BY DEFAULT INDEX.HTML IS TREATED SO BUT IF INDEX.HTML REMANED TO ANOTHER FILE THAN WE HAVE TO USE THIS SNIPPET. IN EITHER CASE, IT IS SAFER TO HAVE IT.

module.exports = app;
