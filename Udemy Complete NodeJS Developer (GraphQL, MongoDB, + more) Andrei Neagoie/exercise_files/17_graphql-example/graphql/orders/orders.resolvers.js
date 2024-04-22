module.exports = {
   Query: {
      orders: (parent = root, args, context, info) => {
         console.log('Getting the orders...');
         return parent.orders;
      },
   },
};
