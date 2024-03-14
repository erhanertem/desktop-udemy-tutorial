// WE NAMED THIS FILE NOT INDEX.JS BUT SERVER.JS BECAUSE THERE IS A SPECIAL CASE THAT NODE WILL RUN THIS FILE W/PUT EDITING PACKAGE.JSON

const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  // res.send('Hellooow My Friend');
  res.send({
    id: 1,
    name: 'Albert',
  });
});
app.get('/messages', (req, res) => {
  res.send('<ul><li>Hello Einstein</li></ul>');
});
app.post('/messages', (req, res) => {
  console.log('Updating messages...');
});

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
