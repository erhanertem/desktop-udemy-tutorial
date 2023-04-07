import { useState, useContext } from 'react';
import BooksContext from '../context/books';

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const { editBookById } = useContext(BooksContext);

  const handleChange = e => {
    setTitle(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    // console.log('New Title', title);
    onSubmit(); //closes the form simply
    editBookById(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange}></input>
      <button className="button is-primary">Save</button>
    </form>
  );
}
export default BookEdit;
