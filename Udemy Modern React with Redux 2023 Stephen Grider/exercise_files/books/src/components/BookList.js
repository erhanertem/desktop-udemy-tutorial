import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow';

function BookList() {
  const { books } = useContext(BooksContext);

  const renderedBooks = books.map(el => {
    return <BookShow key={el.id} book={el} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
}
export default BookList;
