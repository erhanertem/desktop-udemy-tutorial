const productsModel = require('./products.model');

module.exports = {
   // GraphQL Fetch function
   Query: {
      products: () => {
         return productsModel.getAllProducts();
      },
      productsByPrice: (_, args) => {
         return productsModel.getProductsByPrice(args.min, args.max);
      },
      product: (_, args) => {
         return productsModel.getProductById(args.id);
      },
   },
   // Mutation function - CRUD operations
   Mutation: {
      addNewProduct: (_, args) => {
         return productsModel.addNewProduct(
            args.id,
            args.description,
            args.price
         );
      },
   },
};
