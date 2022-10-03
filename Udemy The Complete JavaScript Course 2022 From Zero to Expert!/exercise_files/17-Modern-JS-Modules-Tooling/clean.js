//LESSON 281 Let's Fix Some Bad Code: Part 1
//LESSON 283 Let's Fix Some Bad Code: Part 2

'use strict';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]); //ARRAYS CAN ALSO GET OBJECT.FREEZED() FOR IMMUTABILITY

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
}); //WE FREEZE OBJECT FOR ACCIDENTAL CHANGES AS THIS OBJECT IS NOT SUPPOSED TO BE CHANGED

const getLimit = (limits, user) => limits?.[user] ?? 0;

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;
  // const limit = spendingLimits?.[user] ?? 0;
  // const limit = getLimit(cleanUser);
  // if (value <= getLimit(cleanUser)) {
  //   return [
  //     ...state,
  //     { value: -value, description: description, user: cleanUser },
  //   ];
  //   // budget.push({ value: -value, description: description, user: cleanUser });
  // }
  return value <= getLimit(cleanUser)
    ? [...state, { value: -value, description: description, user: cleanUser }]
    : state;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
console.log(newBudget1);
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
console.log('budget2:', newBudget2);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log('budget3:', newBudget3);

const checkExpenses = (budget, limits) =>
  budget.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );
// const checkExpenses = function (budget, limits) {
//   return budget.map(entry => {
//     return entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry;
//   });
// budget.forEach(entry => {
//   if (entry.value < -getLimit(entry.user)) {
//     entry.flag = 'limit';
//   }
// });
// for (const entry of budget) {
//   // let limit;
//   // if (spendingLimits[entry.user]) {
//   //   lim = spendingLimits[entry.user];
//   // } else {
//   //   lim = 0;
//   // }
//   // const limit = spendingLimits?.[entry.user] ?? 0;
//   // const limit = getLimit(entry.user);
//   if (entry.value < -getLimit(entry.user)) {
//     entry.flag = 'limit';
//   }
// }
// };

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log('finalbudget: ', finalBudget);

const logBigExpenses = function (budget, bigLimit) {
  const bigExpenses = budget
    // .filter(entry => entry.value <= -bigLimit)
    // .reduce((acc, cur) => `${acc} / ${cur.description.slice(-2)}`, '')
    // .replace(' / ', '');
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  console.log(bigExpenses);
  // let output = '';
  // for (const entry of budget) {
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
  //   // if (entry.value <= -bigLimit) {
  //   //   output += `${entry.description.slice(-2)} / `; // Emojis are 2 chars
  //   // }
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};

logBigExpenses(finalBudget, 500);
