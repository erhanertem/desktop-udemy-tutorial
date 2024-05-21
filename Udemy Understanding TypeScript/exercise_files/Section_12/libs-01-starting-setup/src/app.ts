// Code goes here!
import _ from 'lodash';
import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

import { Product } from './product.model';

declare const GLOBAL: any;

console.log(_.shuffle([1, 2, 3, 4, 5]));

console.log(GLOBAL);

// Some fetched response received from a DB hypothetically
const fetchedProducts = [
  { title: 'A Carpet', price: 29.99 },
  { title: ' A Book', price: 10.99 },
];
// // This how we store data ['A Book', $12.99]
// // Manual gtransformation code would be like:
// const products = fetchedProducts.map(
//   (each) => new Product(each.title, each.price)
// );
// Via class-transformer npm package which works well with TS
const products = plainToInstance(Product, fetchedProducts);
for (const product of products) {
  console.log(product.getInformation());
}

const p1 = new Product('A Book', 12.99);
console.log(p1.getInformation());

const newProduct = new Product('', -5.99);
validate(newProduct).then((errors) => {
  if (errors.length > 0) {
    console.log('VALIDATION ERRORS!');
    console.log(errors);
  } else {
    console.log(newProduct.getInformation());
  }
});
