const http = require('http');

const PORT = 3000;

// //> LONG VERSION
// //SERVER OBJECT IS AN EMITTER.
// const server1 = http.createServer(); //Create a server object
// server
//   .on('request', (req, res) => {
//     res.writeHead(200, {
//       'Content-Type': 'application/json',
//     });
//     res.end(JSON.stringify({ id: 1, name: 'Sir Iam feeling weird today' }));
//   })
//   .listen(PORT);
// //> SHORTHAND VERSION
// const server2 = http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       'Content-Type': 'application/json',
//     });
//     res.end(JSON.stringify({ id: 1, name: 'Sir Iam feeling weird today' })); //End the response
//     //res.end function expects a string. So JS object needs to be  JSON STRINGIFIED.
//   })
//   .listen(PORT, () => {
//     console.log(`Listening server @ port ${PORT}...`);
//   }); //127.0.0.1 => localhost

// const server3 = http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       'Content-Type': 'text/plain', //RES.END PASSES TEXT -->'Hello! I am kinda feelign weird today!'
//     });
//     res.write('Hello Silly Billy'); //Wrote a response to the client
//     res.end('Hello! I am kinda feelign weird today!');
//   })
//   .listen(PORT); //Server object listens on PORT

const friends = [
  {
    id: 0,
    name: 'Nicky',
  },
  {
    id: 1,
    name: 'Tommy',
  },
  {
    id: 2,
    name: 'Micky',
  },
];

//> SHORTHAND VERSION W/CUSTOM ENDPOINT REPONSES
const _server = http
  .createServer((req, res) => {
    //req, res are readable streams which allows us use various listeners on those
    console.log(req.url);
    console.log(req.method);
    const items = req.url.split('/');
    // /friends/2 => translates to an array of ['', 'friends', '2']

    // if (req.url === '/friends') {
    if (req.method === 'POST' && items[1] === 'friends') {
      req.on('data', (data) => {
        // console.log(friends);
        // Node passes in data on the req object as a readable stream node raw buffer object
        // It looks something like this --> <Buffer 7b 22 69 64 22 3a 33 2c 22 6e 61 6d 65 22 3a 22 52 79 61 6e 22 7d>
        const friend = data.toString(); //Define buffer data as a string
        // console.log('Request: ', data);
        console.log('Request: ', friend);
        friends.push(JSON.parse(friend)); //DeJSON the the object so that we can add this JS object into our array
        /* IN ORDER TO FETCH POST TYPE @ DEV TOOLS -->
        fetch('http://localhost:3000/friends', {
          method: 'POST',
          body: JSON.stringify({ id: 3, name: 'Ryan' }),
        })
          .then((res) => res.json())
          .then((friend) => console.log(friend));
        */
      });
      req.pipe(res); //Pipes the returned data from req to response stream so the fetch string 1st then can get hold of the data
    } else if (req.method === 'GET' && items[1] === 'friends') {
      //> SHORTHAND RES HEADER
      // res.writeHead(200, {
      //   'Content-Type': 'application/json',
      // });
      // > LONG VERSION RES HEADER
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      const friendIndex = Number(items[2]);
      if (items.length === 2) {
        res.end(JSON.stringify(friends));
      } else if (items.length === 3 && friendIndex <= friends.length) {
        res.end(JSON.stringify(friends[friendIndex]));
      } else {
        res.statusCode = 404;
        res.end('No such friend');
      } //End the response
      //res.end function expects a string. So JS object needs to be  JSON STRINGIFIED.
      // } else if (req.url === '/messages') {
    } else if (req.method === 'GET' && items[1] === 'messages') {
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<body>');
      res.write('<ul>');
      res.write('<li>Hello Issac</li>');
      res.write('<li>What are your thoughts on astronomy?</li>');
      res.write('</ul>');
      res.write('</body>');
      res.write('</html>');
      res.end();
    } else {
      res.statusCode = 404;
      res.write('No such route exists');
      res.end();
    }
  })
  .listen(PORT, () => {
    console.log(`Listening server @ port ${PORT}...`);
  }); //127.0.0.1 => localhost
