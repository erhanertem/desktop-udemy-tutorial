import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
const charactersCollection = new CharactersCollection('AaliBALI');

const sorter_NC = new Sorter(numbersCollection);
sorter_NC.sort();
console.log(numbersCollection.data);
const sorter_CC = new Sorter(charactersCollection);
sorter_CC.sort();
console.log(charactersCollection.data);
