const express = require('express');
const pg = require('pg');

// connect to postgre server
const pool = new pg.Pool({
  host: 'localhost',
  prompt: 5432,
  database: 'socialnetwork',
  user: 'postgres',
  password: 'password',
});

// test pg
// pool.query('SELECT 1+1;').then(res => console.log(res));

// create an express server
const app = express();
app.use(express.urlencoded({ extended: true }));
/*
NOTE: 
Here is the explanation that should clear doubts on express.json() and express.urlencoded() and the use of body-parser. It took me some time to figure this out.

What is Middleware? It is those methods/functions/operations that are called BETWEEN processing the Request and sending the Response in your application method.

When talking about express.json() and express.urlencoded() think specifically about POST requests (i.e. the .post request object) and PUT Requests (i.e. the .put request object)

You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Requests.

You NEED express.json() and express.urlencoded() for POST and PUT requests, because in both these requests you are sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request

Express provides you with middleware to deal with the (incoming) data (object) in the body of the request.

a. express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json());

b. express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code: app.use(express.urlencoded());

ALTERNATIVELY, I recommend using body-parser (it is an NPM package) to do the same thing. It is developed by the same peeps who built express and is designed to work with express. body-parser used to be part of express. Think of body-parser specifically for POST Requests (i.e. the .post request object) and/or PUT Requests (i.e. the .put request object).
*/

//create posts route
app.get('/posts', async (req, res) => {
  const { rows } = await pool.query(`
  SELECT * FROM posts;
  `);

  res.send(`
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>lng</th>
        <th>lat</th>
      </tr>
    </thead>
    <tbody>
      ${rows
        .map(row => {
          return `
          <tr>
            <td>${row.id}</td>
            <td>${row.lng}</td>
            <td>${row.lat}</td>
          </tr>
        `;
        })
        .join('')}
    </tbody>
  </table>
  <form method='POST'>
    <h3>Create Post</h3>
    <div>
        <label>Lng</label>
        <input name='lng'/>
    </div>
    <div>
        <label>Lat</label>
        <input name='lat'/>
    </div>
    <button type='submit'>Create</button>
  </form>
  `);
});

// create a post on posts route
app.post('/posts', async (req, res) => {
  const { lng, lat } = req.body;

  await pool.query('INSERT INTO posts (lat,lng,loc) VALUES ($1,$2,$3);', [
    lat,
    lng,
    `(${lng},${lat})`,
  ]);

  res.redirect('/posts');
});

// broadcast app server
app.listen(3005, () => {
  console.log('Listening on port 3005');
});
