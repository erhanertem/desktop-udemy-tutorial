// CREATE GENERATOR FUNCTION W/ * SIGNATURE
function* createTeamIterator(teams) {
	for (let i = 0; i < teams.length; i++) {
		yield teams[i];
	}
}
// PROVIDE ARRAY
const teams = ['Red Sox', 'Yankees', 'Astros', 'Dodgers'];
// INVOKE ITERATOR
const iterator = createTeamIterator(teams);
// ITERATE THRU
console.log(iterator.next().value);
console.log(iterator.next().value);
// SINCE ITERABLE WORKS WITH 'FOR OF' LOOP
for (let team of createTeamIterator(teams)) {
	console.log(team);
}
// WORKS W/ SPREAD OPERATOR
console.log([...createTeamIterator(teams)]);
