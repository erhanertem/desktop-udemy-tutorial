import BookShow from './BookShow';

function BookList({ books, onDelete, onEdit }) {
  const renderedBooks = books.map(el => {
    return (
      <BookShow key={el.id} book={el} onDelete={onDelete} onEdit={onEdit} />
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
}
export default BookList;
