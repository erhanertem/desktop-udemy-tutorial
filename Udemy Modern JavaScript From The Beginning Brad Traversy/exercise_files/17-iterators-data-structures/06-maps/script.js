const myMap = new Map();

myMap.set('name', 'John');
myMap.set(1, 'zip');
myMap.set(2, 'zap');

console.log(myMap.get('name'));
console.log(myMap.get(1));
console.log(myMap.get(2));

console.log(myMap.size);

console.log(myMap.has(3));

myMap.delete(2);
console.log(myMap);

const peopleMap = new Map();
peopleMap.set('brad', { phone: '444-444-444', email: 'e@e.com' });
peopleMap.set('jrad', { phone: '222-444-444', email: 't@t.com' });
peopleMap.set('drad', { phone: '111-444-444', email: 's@s.com' });
peopleMap.forEach((person) => console.log(person.email));

console.log(peopleMap.keys());
peopleMap.keys().forEach((key) => console.log(key));

const iterator = peopleMap.values();
iterator.next();
