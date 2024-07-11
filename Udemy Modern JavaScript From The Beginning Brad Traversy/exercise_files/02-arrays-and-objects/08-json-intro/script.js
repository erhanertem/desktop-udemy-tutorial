const post = [
	{
		id: 1,
		title: 'Posgt One',
		body: 'This is the body',
	},
	{
		id: 2,
		title: 'Post Two',
		body: 'This is the second body',
	},
];

//Convert to JSON string
const str = JSON.stringify(post);
console.log(str);

// Parse JSON
const obj = JSON.parse(str);
console.log(obj);
