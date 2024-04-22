const products = [
   {
      id: 'redshoe',
      description: 'Red Shoe',
      price: 42.12,
   },
   {
      id: 'bluejean',
      description: 'Blue Jeans',
      price: 55.55,
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

module.exports = { getAllProducts, getProductsByPrice, getProductById };
