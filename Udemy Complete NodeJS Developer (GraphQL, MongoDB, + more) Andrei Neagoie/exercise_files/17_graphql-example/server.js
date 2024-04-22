// EXPRESS MIDDLEWARE OVER NODE
const express = require('express');
// GRAPHQL YOGA SERVER
const { createYoga, createSchema } = require('graphql-yoga');
// // GRAPHQL-TOOLS DISPARATE GRAPHQLFILE UNIFIER
// // Used within createSchema - from Yoga
// const { makeExecutableSchema } = require('@graphql-tools/schema');

const { typesArray, resolversArray } = require('./graphql/index');

const PORT = 4000;

// -> CREATE A UNIFIED GRAPHQL-TOOL SCHEMA FROM DISPARATE GRAPHQL FILES
// const schema = makeExecutableSchema({
// 👆 Uses the above function under the hood
const schema = createSchema({
   typeDefs: typesArray,
   resolvers: resolversArray,
});

// -> CREATE EXPRESS HTTP CONNECTION HANDLER FOR THE GRAPHQL SCHEMA
const connectionHandler = createYoga({ schema });

const app = express();

app.use('/graphql', connectionHandler);

app.listen(PORT, () => {
   console.log(`Running GraphQL server @ PORT ${PORT}...`);
});
