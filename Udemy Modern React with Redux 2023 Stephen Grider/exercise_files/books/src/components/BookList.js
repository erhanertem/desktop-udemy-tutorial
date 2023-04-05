import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow';

function BookList({ books, onDelete, onEdit }) {
  // const value = useContext(BooksContext);
  const { count, incrementCount } = useContext(BooksContext);

  const renderedBooks = books.map(el => {
    return (
      <BookShow key={el.id} book={el} onDelete={onDelete} onEdit={onEdit} />
    );
  });

  return (
    <div className="book-list">
      {/* {value} */}
      {count}
      <button onClick={incrementCount}>Click</button>
      {renderedBooks}
    </div>
  );
}
export default BookList;
