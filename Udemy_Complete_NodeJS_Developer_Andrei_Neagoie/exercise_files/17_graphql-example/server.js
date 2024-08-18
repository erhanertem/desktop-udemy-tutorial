// EXPRESS MIDDLEWARE OVER NODE
const express = require('express');
// GRAPHQL APOLLO SERVER
const { ApolloServer } = require('apollo-server-express');
// GRAPHQL-TOOLS DISPARATE GRAPHQLFILE UNIFIER
const { makeExecutableSchema } = require('@graphql-tools/schema');
// IMPORT UNIFIED GRAPHQL TYPES AND RESOLVERS ARRAYS
const { typesArray, resolversArray } = require('./graphql/index');

const PORT = 4000;

// -> APOLLO WRAPS EXPRESS
(async function startApolloServer() {
   // -> CREATE EXPRESS APP INSTANCE
   const app = express();
   // -> CREATE A UNIFIED GRAPHQL-TOOL SCHEMA FROM DISPARATE GRAPHQL FILES
   // NOTE THAT GRAPHQL TOOLS ARE ALSO DEVELOPED BY APOLLO SO THEY WORK WELL TOGETHER.
   const schema = makeExecutableSchema({
      typeDefs: typesArray,
      resolvers: resolversArray,
   });
   // -> CREATE APOLLO  GRAPHQL SERVER INSTANCE FROM THE UNIFIED SCHEMA
   const server = new ApolloServer({ schema });
   // -> START APOLLO SERVER
   await server.start();
   // -> TELL EXPRESS APP USE APOLLO SERVER @ GRAPHQL ENDPOINT
   // EX: app.use('/graphql', connectionHandler);
   server.applyMiddleware({ app, path: '/graphql' });
   // -> START EXPRESS SERVER
   app.listen(PORT, () => {
      console.log(`Running GraphQL server @ PORT ${PORT}...`);
   });
})();
