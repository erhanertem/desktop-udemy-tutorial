import { createContext, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
  //State
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  };
  // fetchBooks(); //IMPORTANT!! React enters into a infinite loop if the function is called directly. Therefore, we make use of useEffect function in React.

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    // console.log('🎃', response);

    const updatedBooks = books.map(book => {
      if (book.id === id) {
        // return { ...book, title: newTitle };
        //NOTE: instead of manually registering the title, we acquire the response data and register our local array since some other gut may have already updated another property belongs to the same register.
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async id => {
    await axios.delete(`http://localhost:3001/books/${id}`);

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

  return <BooksContext.Provider value={{}}>{children}</BooksContext.Provider>;
}

export { Provider };
export default BooksContext;
