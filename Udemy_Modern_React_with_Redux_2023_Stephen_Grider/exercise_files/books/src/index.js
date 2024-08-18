import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// import BooksContext from './context/books';
import { Provider } from './context/books';
//If we want to IMPORT default and custom import object from the context file
// import BooksContext, { Provider } from './context/books';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  //NOTE: Sandwich App component within context component so all the app children gets access to this context file
  //->Static value
  // <BooksContext.Provider value={5}>
  //   <App />
  // </BooksContext.Provider>);
  //->Dynamic value
  //IMPORTANT!!! Refer to Provider import
  <Provider>
    <App />
  </Provider>
);
