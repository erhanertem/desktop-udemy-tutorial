const library = [
	{
		title: 'The Road Ahead',
		author: 'Bill Gates',
		status: {
			own: true,
			reading: true,
			read: false,
		},
	},
	{
		title: 'The Grove',
		author: 'Bammy Yummy',
		status: {
			own: true,
			reading: false,
			read: false,
		},
	},
	{
		title: 'The Road Back',
		author: 'Bill Rattum',
		status: {
			own: true,
			reading: false,
			read: false,
		},
	},
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBookTitle } = library[0];
console.log(firstBookTitle);

const libraryJSON = JSON.stringify(library);
