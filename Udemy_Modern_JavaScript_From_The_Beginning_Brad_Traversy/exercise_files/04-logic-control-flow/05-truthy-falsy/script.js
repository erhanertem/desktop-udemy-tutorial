const email = 'test@test.com';

if (email) {
	console.log('You passed in an email');
}

console.log(Boolean(email));

/*
FALSY VALUES:
false
0
'' or ""
null
undefined
NaN
*/
/*
TRUTHY VALUES:
true
'0'
' ' - space
'false'
[] - empty
{} - empty
function(){} - empty
*/

// TRUTHY & FALSY CAVEATS
const children = 0;
if (!isNaN(children)) {
	console.log('You have specified children info');
} else console.log('You didnt specified any children info');

// CHECKING FOR EMPTY ARRAYS
const posts = [];
if (posts.length > 0) {
	console.log('List Posts');
} else console.log('No Posts');

// CHECKING FOR EMPTY OBJECTS
const user = {};
if (Object.keys(user).length > 0) {
	console.log('List user');
} else {
	console.log('No user');
}
