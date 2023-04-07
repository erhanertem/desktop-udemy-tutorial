import useBooksContext from '../hooks/use-books-context';
import BookShow from './BookShow';

function BookList() {
  // const { books } = useContext(BooksContext);
  const { books } = useBooksContext();

  const renderedBooks = books.map(el => {
    return <BookShow key={el.id} book={el} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
}
export default BookList;
