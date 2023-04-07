import { useContext } from 'react';
import BooksContext from '../context/books';

function useBooksContext() {
  return useContext(BooksContext);
}

export default useBooksContext; //camel case naming with use is important for react hook naming
