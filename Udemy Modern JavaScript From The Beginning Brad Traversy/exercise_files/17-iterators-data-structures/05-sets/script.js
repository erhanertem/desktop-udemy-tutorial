let x;
const set = new Set([1, 2, 3, 3, 4, 5, 4, 6, 7, 8, 1]);

set.add(5);
set.delete(5);
set.clear();
x = set.has(5);

for (let i of set) {
	console.log(i);
}

console.log(x);
console.log(set);

const setArray = Array.from(set);
console.log(setArray);

const iterator = new Set([1, 7, 8, 1]).values();
iterator.next();
iterator.next();
