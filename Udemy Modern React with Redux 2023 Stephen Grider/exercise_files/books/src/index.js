import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import BooksContext from './context/books';
import { Provider } from './context/books';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  //NOTE: Sandwich App component within context component so all the app children gets access to this context file
  //->Static value
  // <BooksContext.Provider value={5}>
  //   <App />
  // </BooksContext.Provider>);
  //->Dynamic value
  <Provider>
    <App />
  </Provider>
);