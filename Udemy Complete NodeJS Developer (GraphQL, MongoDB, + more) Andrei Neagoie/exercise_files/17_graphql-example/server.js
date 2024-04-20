// EXPRESS MIDDLEWARE OVER NODE
const express = require('express');
// GRAPHQL CORE API FOR JS
const { buildSchema } = require('graphql');
// GRAPHQL-EXPRESS CONNECTOR
// const { createHandler } = require('graphql-http/lib/use/express');
const { createYoga, createSchema } = require('graphql-yoga');

const PORT = 4000;

// -> CREATE A GRAPHQL SCHEMA
// const schema = buildSchema(`
// type Query {
//    description: String
//    price: Float
// }
// `);
// const rootValue = {
//   description: 'Red Shoe',
//   price: 42.12,
// };

const schema = createSchema({
  typeDefs: `
         type Query {
            description: String
            price: Float
         }
         `,
  resolvers: {
    Query: {
      description: () => 'Red Shoe',
      price: () => 42.12,
    },
  },
});

// -> CREATE EXPRESS HTTP CONNECTION HANDLER FOR THE GRAPHQL SCHEMA
// const connectionHandler = createHandler({
//   schema,
//   rootValue,
//   //   Not available property directly on graphql-http
//   //   graphiql: true,
// });
const connectionHandler = createYoga({
  schema,
  graphiql: true,
});

const app = express();

app.use('/graphql', connectionHandler);

app.listen(PORT, () => {
  console.log(`Running GraphQL server @ PORT ${PORT}...`);
});
