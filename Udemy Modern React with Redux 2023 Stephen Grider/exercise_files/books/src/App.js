import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App() {
  const { fetchBooks } = useContext(BooksContext);

  //->1st variation of useEffect() - fetchBooks() is called only once @ initialization of DOM, and never after!
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      {/* <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} /> */}
      {/* <BookCreate onCreate={createBook} /> */}
      <BookList />
      <BookCreate />
    </div>
  );
}
export default App;
