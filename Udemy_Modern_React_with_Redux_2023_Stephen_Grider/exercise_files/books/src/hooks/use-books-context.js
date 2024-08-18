import { useContext } from 'react';
import BooksContext from '../context/books';

//reusable custom function (custom hook)
function useBooksContext() {
  return useContext(BooksContext);
}

export default useBooksContext; //camel case naming with use is important for react hook naming
