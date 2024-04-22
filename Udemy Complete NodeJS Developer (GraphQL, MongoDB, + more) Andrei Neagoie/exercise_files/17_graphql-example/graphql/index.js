const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs } = require('@graphql-tools/merge');

const typesArray = loadFilesSync('**/*', {
   extensions: ['graphql'],
});
const aggregateTypes = mergeTypeDefs(typesArray);

const root = {
   products: require('./products/products.model'),
   orders: require('./orders/orders.model'),
};

const resolvers = {
   Query: {
      products(obj, args, context, info) {
         // Args summary:
         // obj - N/A
         // ?args - for paramterized queries to filter data conditionally
         // ?context - datat shared across resolvers /user auth data, etc.
         // ?info - about current state of the operation
         console.log('Getting the products...');
         return root.products;
      },
      orders(obj, args, context, info) {
         console.log('Getting the orders...');
         return root.orders;
      },
   },
};

module.exports = {
   aggregateTypes,
   resolvers,
};
