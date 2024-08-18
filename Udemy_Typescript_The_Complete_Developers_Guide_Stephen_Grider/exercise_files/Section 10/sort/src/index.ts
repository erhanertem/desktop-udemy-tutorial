import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
const charactersCollection = new CharactersCollection('AaliBALI');
const linkedList = new LinkedList();
linkedList.append(500);
linkedList.append(-10);
linkedList.append(-3);
linkedList.append(4);

numbersCollection.sort();
console.log(numbersCollection.data);
charactersCollection.sort();
console.log(charactersCollection.data);
linkedList.sort();
linkedList.print();
