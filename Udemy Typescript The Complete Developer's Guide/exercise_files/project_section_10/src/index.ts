import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([10, 300, -5, 0]);
const sorter = new Sorter(numbersCollection).sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaxayb');
const sorter_ = new Sorter(charactersCollection).sort();
console.log(charactersCollection.data);
