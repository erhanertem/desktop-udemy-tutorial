const products = [
   {
      id: 'redshoe',
      description: 'Red Shoe',
      price: 42.12,
      reviews: [],
   },
   {
      id: 'bluejean',
      description: 'Blue Jeans',
      price: 55.55,
      reviews: [],
   },
];

function getAllProducts() {
   console.log('Getting all the products...');
   return products;
}

function getProductsByPrice(min, max) {
   console.log('Getting the filtered products');
   return products.filter((product) => {
      return product.price >= min && product.price <= max;
   });
}

function getProductById(id) {
   console.log('Getting a product');
   return products.find((product) => {
      return product.id === id;
   });
}

function addNewProduct(id, description, price) {
   console.log('Adding a new product');
   const newProduct = {
      id,
      price,
      description,
      reviews: [],
   };
   products.push(newProduct);
   return newProduct;
}

function addNewProductReview(id, rating, comment) {
   const reviewProduct = getProductById(id);

   if (reviewProduct) {
      const newProductReview = {
         rating,
         comment,
      };

      reviewProduct.reviews.push(newProductReview);

      return newProductReview;
   }
}

module.exports = {
   getAllProducts,
   getProductsByPrice,
   getProductById,
   addNewProduct,
   addNewProductReview,
};
