const url = require('url');
const querystring = require('querystring');

// -> url.parse() - Full fledged information about the url
const myUrl = url.parse('https://example.com/listing?id=1000&premium=true');
console.log(myUrl);

// -> url.format() - Manually create a url
const url2 = url.format({
	protocol: 'https',
	host: 'www.example.com',
	pathname: 'listing',
	query: {
		id: 1000,
		premium: true,
	},
});
console.log(url2);

// -> querystring.parse() Parses query string to an JS object
const myQs = 'year=2023&month=january&day=20';
const q = querystring.parse(myQs);
console.log(q);
console.log(q.month);

// -> querystring.stringify() Turmns JS Object representation of a query string to a query string
const myQs2 = querystring.stringify({ year: 2023, month: 'january', day: 20 });
console.log(myQs2);
