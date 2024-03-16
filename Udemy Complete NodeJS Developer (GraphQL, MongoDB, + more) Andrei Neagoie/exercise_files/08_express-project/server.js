// WE NAMED THIS FILE NOT INDEX.JS BUT SERVER.JS BECAUSE THERE IS A SPECIAL CASE THAT NODE WILL RUN THIS FILE W/PUT EDITING PACKAGE.JSON

const express = require('express');
const path = require('node:path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

const PORT = 3000;

// > REGISTER A MIDDLEWARE
// We want this middleware @ the top of all middlewares because we want the timer to capture as much time as possible of the process.
app.use(function (req, _res, next) {
  const start = Date.now();
  next();
  // actions go here.... MEANING RETURNING RES LAST VISITS HERE...
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} , it took ${delta}ms`);
});

// > REGISTER A MIDDLEWARE THAT SERVES STATIC HTML WEBSITE CONTENT (VUE, REACT, PURE HTML, ANGULAR ETC)
// #1. ACCESSED @ ROOT
// app.use(express.static('public')); // Directly availabe at the root
// #2. ACCESSED @ URL
app.use('/site', express.static(path.join(__dirname, 'public'))); // Just like prefix routes used @ router middlewares, we may like to provide extra URL
// > REGISTER A MIDDLEWARE THAT PARSES(DESTRINGIFY) THE JSON DATA PASSED INTO REQ FLOW TO A JS OBJECT
// USEFULL FOR POST REQUEST (APPLICABLE TO ALL API ROUTES WE HAVE CREATED)
app.use(express.json());

// > ROUTER MIDDLEWARES
// #1. all requests will be tempted to this router. If none of the endpoints in the router satisfies, the next router will be tempted
// app.use(friendsRouter);
// #2. only requests to /friends/* will be sent to our "friendsRouter"
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
