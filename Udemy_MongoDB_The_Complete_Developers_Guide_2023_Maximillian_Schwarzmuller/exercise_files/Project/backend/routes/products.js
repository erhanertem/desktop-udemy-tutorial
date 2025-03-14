const { Router } = require('express');

const db = require('../db');

const { Decimal128 } = require('mongodb');
const { ObjectId } = require('mongodb');

const router = Router();

// Get list of products products
router.get('/', (req, res, next) => {
  // const queryPage = req.query.page;
  // const pageSize = 1; //Pagination size

  const products = [];
  db.getDb()
    .db()
    .collection('products')
    .find()
    // .sort({ price: -1 })
    /*
    IMPORTANT!
    Its a good idea to provide index on pricing if we are frequentyl sorting products. This is not done thru node.js app but thru server admin.
    db.products.createIndex({price: 1})
    Direction of index do not matter. From node.js even if its -1, index is traversed automatically in mongoDB.
    */
    // .skip((queryPage - 1) * pageSize)
    // .limit(pageSize)
    .forEach(productDoc => {
      productDoc.price = productDoc.price.toString();
      products.push(productDoc);
    })
    .then(result => {
      res.status(200).json(products);
    })
    .catch(err => {
      res.status(500).json({ message: 'An error occured' });
    });
});

// Get single product
router.get('/:id', (req, res, next) => {
  db.getDb()
    .db()
    .collection('products')
    .findOne({ _id: new ObjectId(req.params.id) })
    .then(productDoc => {
      productDoc.price = productDoc.price.toString();
      res.status(200).json(productDoc);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'An error occured' });
    });
});

// Add new product
// Requires logged in user
router.post('', (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    description: req.body.description,
    price: new Decimal128(req.body.price.toString()), // store this as 128bit decimal in MongoDB
    image: req.body.image,
  };
  db.getDb()
    .db()
    .collection('products')
    .insertOne(newProduct)
    .then(result => {
      console.log(result);
      res
        .status(201)
        .json({ message: 'Product added', productId: result.insertedId });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'An error occured' });
    });
});

// Edit existing product
// Requires logged in user
router.patch('/:id', (req, res, next) => {
  const updatedProduct = {
    name: req.body.name,
    description: req.body.description,
    price: new Decimal128(req.body.price.toString()), // store this as 128bit decimal in MongoDB
    image: req.body.image,
  };
  db.getDb()
    .db()
    .collection('products')
    .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updatedProduct })
    .then(result => {
      res
        .status(200)
        .json({ message: 'Product Updated', productId: req.params.id });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'An error occured' });
    });
});

// Delete a product
// Requires logged in user
router.delete('/:id', (req, res, next) => {
  db.getDb()
    .db()
    .collection('products')
    .deleteOne({ _id: new ObjectId(req.params.id) })
    .then(result => {
      res.status(200).json({ message: 'Product deleted' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'An error occured' });
    });
});

module.exports = router;
