// EXPRESS MIDDLEWARE OVER NODE
const express = require('express');
// GRAPHQL CORE API FOR JS
const { buildSchema } = require('graphql');
// GRAPHQL-EXPRESS CONNECTOR
const { createHandler } = require('graphql-http/lib/use/express');

const PORT = 3000;

// -> CREATE A GRAPHQL SCHEMA
const schema = buildSchema(`
type Query {
   description: String
   price: Float
}
`);

const rootValue = {
  description: 'Red Shoe',
  price: 42.12,
};

// -> CREATE EXPRESS HTTP CONNECTION HANDLER FOR THE GRAPHQL SCHEMA
const handler = createHandler({
  schema,
  rootValue,
  //   Not available property directly on graphql-http
  //   graphiql: true,
});

const app = express();

app.use('/graphql', handler);

app.listen(PORT, () => {
  console.log(`Running GraphQL server @ PORT ${PORT}...`);
});
