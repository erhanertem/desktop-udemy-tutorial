const age = 19;

age >= 18 ? console.log('You can vote!') : console.log('You cant vote!!');

const canVote = age >= 18 ? true : false;
console.log(canVote);

const auth = true;
const redirect = auth ? (alert('Welcome to dashboard'), '/dashboard') : (alert('Access Denied'), '/login');
