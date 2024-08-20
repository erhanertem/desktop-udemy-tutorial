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
	return data.find((d) => d.id === id);
}

// // NOTE: INSTALL QUOKKA PLUGIN FOR VSCODE to see the variables

// //>  Destructuring
// const books = getBooks();
// books;
const book = getBook(2);
// book;
// // const title_ = book.title;
// // title_;
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
	book;
// title;
// publicationDate;
// genres;
// hasMovieAdaptation;

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
// const [primaryGenre, secondaryGenre] = genres;
// primaryGenre;
// secondaryGenre;

//> Rest & Spread Operators

//> Rest
const [primaryGenre, secondaryGenre, ...others] = genres;
others;

//> Spread
// const newGenres = [...genres, 'epic fantasy'];
const newGenres = ['epic fantasy', ...genres];
newGenres;

const updatedBook = {
	...book,
	//Adding a new property
	moviePublicationDate: '2001-09-09',
	//Overriding an existing property - because it comes after the spread operator....
	pages: 1210,
};
updatedBook;

//> Template Literals
const summary = `${title} is a book of ${
	pages + 1
} pages long book written by ${author} and published by ${
	publicationDate.split('-')[0]
}. The book has ${hasMovieAdaptation ? '' : 'not'} been adapted as a movie. `;
summary;

// > Ternary Operator
const state = pages > 1000 ? 'over 1000' : 'less than 1000';
state;

// > Arrow Functions
// // Function decleration
// function getYear(str) {
// 	return str.split('-')[0];
// }
// Arrow function
const getYear = (str) => str.split('-')[0];
console.log('getYear(publicationDate) :', getYear(publicationDate));

const summary2 = `${title} is a book of ${
	pages + 100
} pages long book written by ${author} and published by ${getYear(
	publicationDate
)}. The book has ${hasMovieAdaptation ? '' : 'not'} been adapted as a movie. `;
summary2;

// // > Short Circuiting and Logical Operators

console.log(true && 'Something');
console.log(false && 'Something');
console.log(hasMovieAdaptation && 'This book has a movie');

// flasy: 0, '', undefined, null
console.log('jonas' && 'Some...');
console.log('' && 'Some...');
console.log(0 && 'Some...');

console.log(true || 'Some...');
console.log(false || 'Some...');
const spanishTranslation = book.translations.spanish || 'Not translated';
spanishTranslation;

//ZERO VALUE OR '' DO NOT WORK WITH || SHORTCIRCUIT OPERATOR
console.log(0 || 'Some...');
console.log('' || 'Some...');
console.log(undefined || 0);
console.log(undefined ?? 0);
console.log(book.reviews.librarything.reviewsCount || 'no Data');
//INSTEAD WE USE NULLISH COALESCING OPERATOR - ONLY UNDEFINED AND NULL SHORTCIRCUITS
const count = book.reviews.librarything.reviewsCount ?? 'no Data';
count;

// Optional Chaining
function getTotalReviewCount(book) {
	const goodread = book.reviews?.goodreads?.reviewsCount ?? 0;
	const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
	console.log(goodread, librarything);
	return goodread + librarything;
}
console.log('getTotalReviewCount(book) :', getTotalReviewCount(book));

// > Map Method for Arrays

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
x;
const books = getBooks();
books;
const titles = books.map((book) => book.title);
titles;
// Manually returning object
const essentialData = books.map((book) => {
	return {
		title: book.title,
		author: book.author,
	};
});
essentialData;
// Return via () for objects
const essentialData1 = books.map((book) => ({
	title: book.title,
	author: book.author,
}));
essentialData1;

// > Filter Method for Arrays
const books1 = getBooks();
const longBooks = books1
	.filter((book) => book.pages > 500)
	.filter((book) => book.hasMovieAdaptation).length;
longBooks;

const adventureBooks = books1
	.filter((books) => books.genres.includes('adventure'))
	.map((book) => book.title);
adventureBooks;

// > Reduce Method for Arrays
const books2 = getBooks();
books2;
const pagesAllBooks = books2.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

// > Sort Method for Arrays
const arr = [3, 7, 1, 9, 6];
// SORTING METHOD MUTATES THE ARRAY
// EITHER USE [...ARR] OR ARR.SLICE() TO MAKE A SHALLOW COPY OF THE ARRAY
//ASCENDING ORDER SORTING - FOR A-B RETURN POSITIVE (NEEDS SORTING) A MUST BE >B
const sorted1 = [...arr].sort((a, b) => a - b);
//DESCENDING ORDER SORTING - FOR B-A RETURN POSITIVE (NEEDS SORTING) B MUST BE >A
const sorted2 = arr.slice().sort((a, b) => b - a);
arr;
sorted1;
sorted2;

const books3 = getBooks();
// const sortedByPage = books.slice().sort((a, b) => b.pages - a.pages);
const sortedByPageInDescOrder = [...books].sort((a, b) => b.pages - a.pages);
sortedByPageInDescOrder;

// > Working with Immutable Arrays
const books4 = getBooks();
//Add an object to an array
const newBook = {
	id: 6,
	title: 'Harry Zorter and Margereth Bolton',
	author: 'J. K. Rollingstone',
};
const booksAfterAdd = [...books4, newBook];
booksAfterAdd;

//Remove an object from an array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

//Update a book in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
	book.id === 1 ? { ...book, pages: 12222222222222 } : book
);
booksAfterUpdate;

// > Async JS Promises
fetch('https://jsonplaceholder.typicode.com/todos')
	.then((res) => res.json())
	.then((data) => console.log(data));
console.log('Jonas');

// > Async JS Async/Await
async function getToDos() {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos');
	const data = await res.json();
	return data;
}
const todos = getToDos();
console.log(todos)
todos;
console.log('Jonas');
