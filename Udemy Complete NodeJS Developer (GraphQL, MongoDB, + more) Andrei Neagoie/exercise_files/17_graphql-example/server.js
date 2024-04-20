// EXPRESS MIDDLEWARE OVER NODE
const express = require("express");
// GRAPHQL CORE API FOR JS
const { buildSchema } = require("graphql");
// GRAPHQL-EXPRESS CONNECTOR
// const { createHandler } = require('graphql-http/lib/use/express');
const { createYoga, createSchema } = require("graphql-yoga");

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
   // Query is the root object ina GraphQL collection.
   // Product, Review objs are custom type definitions. type! means the property needs to be entered (non-nullable)
   // ID in capital is a special type provided by GraphQL. While given ids are strings still its being explicit to provide it as ID type to id property
   typeDefs: `
				type Query {
				products: [Product]
				orders: [Order]
				}

				type Product {
				id: ID!
				description: String!
				reviews: [Review]
				price: Float!
				}

				type Review {
				rating: Int!
				comment: String
				}

				type Order {
				date: String!
				subtotal: Float!
				items: [OrderItem]
				}

				type OrderItem {
				product: Product!
				quantity: Int!
				}
			`,
   resolvers: {
      Query: {
         products: () => [
            {
               id: "redshoe",
               description: "Red Shoe",
               price: 42.12,
            },
            {
               id: "bluejean",
               description: "Blue Jeans",
               price: 55.55,
            },
         ],
         orders: () => [
            {
               date: "2005-05-05",
               subtotal: 90.22,
               items: [
                  {
                     product: {
                        id: "redshoe",
                        description: "Old Red Shoe",
                        price: 45.11,
                     },
                     quantity: 100,
                  },
               ],
            },
         ],
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

app.use("/graphql", connectionHandler);

app.listen(PORT, () => {
   console.log(`Running GraphQL server @ PORT ${PORT}...`);
});
