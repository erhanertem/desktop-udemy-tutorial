const data = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: [
      'fantasy',
      'high-fantasy',
      'adventure',
      'fiction',
      'novels',
      'literature',
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux',
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: 'The Cyberiad',
    publicationDate: '1965-01-01',
    author: 'Stanislaw Lem',
    genres: [
      'science fiction',
      'humor',
      'speculative fiction',
      'short stories',
      'fantasy',
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: 'Dune',
    publicationDate: '1965-01-01',
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: '',
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal',
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos',
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find(d => d.id === id);
}

// NOTE: INSTALL QUOKKA PLUGIN FOR VSCODE to see the variables
/*
// - Destructuring
const book = getBook(2);
// const title = book.title;
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
title;
publicationDate;
genres;
hasMovieAdaptation;

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
const [primaryGenre, secondaryGenre] = genres;
primaryGenre;
secondaryGenre;

// Rest & Spread Operators

//Rest
const [primaryGenre_, secondaryGenre_, ...rest] = genres;
rest;

//Spread
const newGenres = [...genres, 'epic fantasy'];
newGenres;

const updatedBook = {
  ...book,
  moviePublicationDate: '2001-09-09', //Adding a new property
  pages: 1210, //overrides existing property - because it comes after the spread operator....
};
updatedBook;

// - Template Literals

const state = pages > 1000 ? 'over 1000' : 'less than 1000';
state;

const summary = `${title} is a book of ${
  pages + 1
} pages long book written by ${author} and published by ${
  publicationDate.split('-')[0]
}. The book has ${hasMovieAdaptation ? '' : 'not'} been adapted as a movie. `;
summary;

// - Arrow Functions
// function getYear(str) {
//   return str.split('-')[0];
// }

const getYear = str => str.split('-')[0];
getYear(publicationDate);
console.log(
  '🚀 | file: script.js:200 | getYear(publicationDate)',
  getYear(publicationDate)
);

const summary2 = `${title} is a book of ${
  pages + 100
} pages long book written by ${author} and published by ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? '' : 'not'} been adapted as a movie. `;
summary2;

// - Short Circuiting and Logical Operators

console.log(true && 'Something');
console.log(false && 'Something');
console.log(hasMovieAdaptation && 'This book has a movie');

// flasy: 0, '', undefined, null
console.log('jonas' && 'Some...');
console.log('' && 'Some...');

console.log(true || 'Some...');
console.log(false || 'Some...');

console.log(book.translations.spanish || 'Not translated');

const count = book.reviews.librarything.reviewsCount ?? 'no Data';
count;

function getTotalReviewCount(book) {
  const goodread = book.reviews.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  // console.log(goodread, librarything);
  return goodread + librarything;
}
getTotalReviewCount(book);
console.log('🚀  getTotalReviewCount(book)', getTotalReviewCount(book));
*/

/*
// - Map Method for Arrays

const books = getBooks();
books;

const x = [1, 2, 3, 4, 5].map(el => el * 2);
x;

const titles = books.map(book => book.title);
titles;

const essentialData = books.map(book => {
  return {
    title: book.title,
    author: book.author,
  };
});
essentialData;

// - Filter Method for Arrays

const longBooks = books
  .filter(book => book.pages > 500)
  .filter(book => book.hasMovieAdaptation).length;
longBooks;

const adventureBooks = books
  .filter(books => books.genres.includes('adventure'))
  .map(book => book.title);
adventureBooks;

// - Reduce Method for Arrays

console.log(books);
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

// - Sort Method for Arrays

const arr = [3, 7, 1, 9, 6];
const sorted = [...arr].sort((a, b) => a - b);
const sorted_ = arr.slice().sort((a, b) => b - a);
arr;
sorted;
sorted_;

const sortedByPage = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPage;

// - Working with Immutable Arrays

//Add an object to an array
const newBook = {
  id: 6,
  title: 'Harry Zorter and Margereth Bolton',
  author: 'J. K. Rollingstone',
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

//Remove an object from an array
const booksAfterDelete = booksAfterAdd.filter(book => book.id !== 3);
booksAfterDelete;

//Update a book in the array
const booksAfterUpdate = booksAfterDelete.map(book =>
  book.id === 1 ? { ...book, pages: 12222222222222 } : book
);
booksAfterUpdate;
*/

// - Async JS Promises

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(res => res.json())
//   .then(data => console.log(data));
// console.log('Jonas');

// - Async JS Async/Await

async function getToDos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  console.log(data);
  return data;
}

const todos = getToDos();
todos;
console.log('Jonas');
