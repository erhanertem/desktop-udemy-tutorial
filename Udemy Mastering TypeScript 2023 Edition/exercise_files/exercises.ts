//LESSON 3 - TYPE ANNOTATION BASICS

//STRING
let movieTitle: string = 'Amadeus!!';
movieTitle = 'Arrival';
// movieTitle = 9;
// movieTitle.upper();
movieTitle.toUpperCase();

//NUMBER
let myNumber: number = 42;
// myNumber = 'I am a string!!';
myNumber = 60;

let numCatLives: number = 9;
numCatLives += 1;

//BOOLEAN
let myBoolean: boolean = true;
// myBoolean = 87;
myBoolean = false;

//TYPE INFERENCE
let tvShow = 'Olive Kitteridge';
tvShow = 'The Other two';
// tvShow = 19;

let isFunny = false;
isFunny = true;
// isFunny = 'true';

//ANY
// Simply disables TS checking
let thing: any = 'hello';
thing = 1;
thing = false;
thing();

// let thing = 'hello';
// thing();

const movies = ['Aliens', 'Alabama', 'Nasty Fellow'];
let favMovie: string; //Uninitialized variables needs to be assigned a type for any inference

for (let movie of movies) {
  if (movie === 'Alabama') {
    favMovie = 'Alabama';
  }
}
// favMovie = 12;

//LESSON 4 - FUNCTIONS
