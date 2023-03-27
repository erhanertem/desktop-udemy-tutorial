//1)Import the React and React DOM Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

//2) Import the App component
import MyApp from './App'; //NOTE: default export names could be renamed!!!

//3) Get a reference to the div element with ID root
const el = document.getElementById('root');

//4) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

//5) Show the JSX component on the screen
root.render(<MyApp />);
