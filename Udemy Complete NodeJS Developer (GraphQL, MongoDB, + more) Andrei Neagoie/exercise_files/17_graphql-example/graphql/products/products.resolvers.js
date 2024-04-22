module.exports = {
   Query: {
      products: (parent = root, args, context, info) => {
         // Args summary:
         // parent - N/A
         // ?args - for paramterized queries to filter data conditionally
         // ?context - datat shared across resolvers /user auth data, etc.
         // ?info - about current state of the operation
         console.log('Getting the products...');
         return parent.products;
      },
   },
};
