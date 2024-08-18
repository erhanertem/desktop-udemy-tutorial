//Sorting Numbers
let data = [5, 1, 4, 3];

// data.sort((a, b) => {
//   // console.log( a );
//   // console.log( b );
//   return a - b
// });
data.sort((a, b) => {
  return b - a;
});

//Test Strings
data = ['t', 'T', 'a', 'B', 'b'];
data.sort((a, b) => {
  return a.localeCompare(b);
});

//Object Sorting
data = [
  { name: 'Tomato', cost: 10, weight: 5 },
  { name: 'Carrot', cost: 15, weight: 2 },
  { name: 'Onion', cost: 5, weight: 7 },
];

function getSortValue(vegetable) {
  return vegetable.name;
}

const sortOrder = 'desc';

data.sort((a, b) => {
  const valueA = getSortValue(a);
  const valueB = getSortValue(b);

  const reverseOrder = sortOrder === 'asc' ? 1 : -1;

  if (typeof valueA === 'string') {
    return valueA.localeCompare(valueB) * reverseOrder;
  } //string sorting
  else {
    return (valueA - valueB) * reverseOrder;
  } //number sorting
});

console.log('🚀 | file: Untitled-1:4 | data:', data);
