"use strict";
let movieTitle = 'Amadeus!!';
movieTitle = 'Arrival';
movieTitle.toUpperCase();
let myNumber = 42;
myNumber = 60;
let numCatLives = 9;
numCatLives += 1;
let myBoolean = true;
myBoolean = false;
let tvShow = 'Olive Kitteridge';
tvShow = 'The Other two';
let isFunny = false;
isFunny = true;
let thing = 'hello';
thing = 1;
thing = false;
const movies = ['Aliens', 'Alabama', 'Nasty Fellow'];
let favMovie;
for (let movie of movies) {
    if (movie === 'Alabama') {
        favMovie = 'Alabama';
    }
}
function square(num) {
    return num * num;
}
square(3);
function greet(num, person) {
    console.log(`I am  ${person}`);
    return num * num;
}
greet(3, 'Jonny');
function greet2(person = 'stranger') {
    console.log(`I am  ${person}`);
}
greet2();
greet2('Tonny');
function multiply(x, y) {
    return x * y;
}
const doSomething = (person, age, isFunny) => {
    return person + age + isFunny;
};
doSomething('ChickenFace', 23, true);
const doSomething2 = function (person, age, isFunny) {
    return person + age + isFunny;
};
doSomething2('ChickenFace', 23, true);
function add(x, y) {
    return x + y;
}
function rando(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
const colors = ['red', 'orange', 'yellow'];
colors.map(color => {
    return color.toUpperCase();
});
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
}
function secondsInDay() {
    return 24 * 60 * 60;
}
function makeError(msg) {
    throw new Error(msg);
}
function twoFer(name = 'you') {
    return `one for ${name}, one for me`;
}
console.log(twoFer());
console.log(twoFer('Elton'));
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));
const dog = {
    name: 'Elton',
    breed: 'Australian Shephard',
    age: 0.5,
};
function printName(person) {
    console.log(`${person.first} ${person.last}`);
}
printName({ first: 'Thomas', last: 'Jenkins' });
const singer = { first: 'Mick', last: 'Jagger', age: 473, isAlive: true };
printName(singer);
let coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function calculatePayout(song) {
    const x = song.numStreams * 0.0033;
    console.log(x);
    return x;
}
function printSong(song) {
    console.log(`${song.title}-${song.artist}`);
}
const mySong = {
    title: 'Unchained Melody',
    artist: 'Erhan ERTEM',
    numStreams: 1211,
    credits: {
        producer: 'Ernie Welco',
        writer: 'Elon Edinburg',
    },
};
calculatePayout(mySong);
printSong(mySong);
const myPoint = { x: 1, y: 3 };
const user = {
    id: 123456,
    username: 'catgirl',
};
console.log(user.id);
const happyFace = {
    radius: 4,
    color: 'yellow',
};
const christy = {
    numLives: 7,
    breed: 'Husky',
    age: 9,
};
const dune = {
    title: 'Dune',
    originalTitle: 'Dune Part One',
    director: 'Denis Villeneuve',
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789,
    },
};
const cats = {
    title: 'Cats',
    director: 'Tom Hooper',
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348,
    },
};
function getProfit(movie) {
    return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
}
console.log(getProfit(cats));
//# sourceMappingURL=exercises.js.map