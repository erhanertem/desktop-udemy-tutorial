import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

function App() {
  //State
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map(book => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = id => {
    const updatedBooks = books.filter(book => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = async title => {
    const response = await axios.post('http://localhost:3001/books', {
      title, // title: title,
    });
    // console.log(response);
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };
  // const createBook = title => {
  //   // console.log('✨', title);
  //   // //BAD CODE
  //   // books.push({ id: 123, title: title });
  //   // console.log(books);

  //   const updatedBooks = [
  //     ...books,
  //     { id: Math.round(Math.random() * 9999), title: title },
  //   ];

  //   setBooks(updatedBooks);
  //   console.log(updatedBooks);
  // };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}
export default App;
