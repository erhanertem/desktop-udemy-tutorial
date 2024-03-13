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

//> SHORTHAND VERSION W/CUSTOM ENDPOINT REPONSES
const server = http
  .createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/friends') {
      //> SHORTHAND RES HEADER
      // res.writeHead(200, {
      //   'Content-Type': 'application/json',
      // });
      // > LONG VERSION RES HEADER
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');

      res.end(JSON.stringify({ id: 1, name: 'Sir Iam feeling weird today' })); //End the response
      //res.end function expects a string. So JS object needs to be  JSON STRINGIFIED.
    } else if (req.url === '/messages') {
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
