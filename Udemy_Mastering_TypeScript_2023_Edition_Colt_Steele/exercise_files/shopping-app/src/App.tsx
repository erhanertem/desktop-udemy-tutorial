import { useState } from 'react';
// import Greeter from './components/greeter';
import ShoppingList from './components/shoppinglist';
import ShoppingListForm from './components/shoppinglistform';
import Item from './models/item';
import { v4 as getId } from 'uuid';
// import logo from './logo.svg';

import './App.css';

// const num: number = 123;
// console.log('HELLO FROM TYPESCRIPT!!', num);
// const func = <T,>(x: T): T => {
//   console.log(x);
//   return x;
// };
// func(6);

// interface Item {
//   id: number;
//   product: string;
//   quantity: number;
// }

function App() {
  // const items = [
  //   { id: 1, product: 'Lemon', quantity: 3 },
  //   { id: 2, product: 'Chicken Breast', quantity: 2 },
  // ];
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: number) => {
    console.log('MADE TO THE APP COMPONENT!!', product);
    setItems([...items, { id: getId(), product, quantity }]);
  };

  return (
    <div className="App">
      {/* <h1>HELLO WORLD!!</h1> */}
      {/* <Greeter el="Colt" />
      <Greeter el="Chicky" />
      <Greeter el="Erhan" />
      <div>~~~~~~~~</div> */}
      {/* <ShoppingList /> */}
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
