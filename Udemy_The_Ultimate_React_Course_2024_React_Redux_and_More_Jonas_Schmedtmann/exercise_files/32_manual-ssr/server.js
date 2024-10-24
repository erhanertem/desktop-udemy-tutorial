const React = require('react');
const { readFileSync } = require('fs');
const { createServer } = require('http');
const { parse } = require('url');
const { renderToString } = require('react-dom/server');

// >#1.READ CONTENT FILES FOR SERVING
// >#1.A.READ INDEX.HTML CONTENT - SEND WITHIN / ROUTE.
const htmlTemplate = readFileSync(`${__dirname}/index.html`, 'utf8');
// >#1.B.READ CLIENT.JS CONTENT - SEND WITHIN /client.js ENDPOINT
const clientJS = readFileSync(`${__dirname}/client.js`, 'utf8');

const server = createServer((req, res) => {
	const pathName = parse(req.url, true).pathname;
	// >#2.A.SERVE STATIC HTML CONTENT W/ STRIPPED (STATIC) REACT CONTENT INJECTED
	if (pathName === '/') {
		const renderedHTML = renderToString(<Home />);
		const html = htmlTemplate.replace('%%%CONTENT%%%', renderedHTML);

		res.writeHead(200, { 'Content-type': 'text/html' });
		res.end(html);
	}
	// >#2.B.SERVE FULL (DYNAMIC) REACT CONTENT SCRIPT FILE TO BE CROSS CHECKED ON CLIENT SIDE WITH STATIC DOM CONTENT RECEIVED @ / ENDPOINT
	// NOTE: SEE HTML index.html BEING SERVED WITH SCRIPT LOAD
	else if (pathName === '/client.js') {
		res.writeHead(200, { 'Content-type': 'application/javascript' });
		res.end(clientJS);
	} else if (pathName === '/file') {
		// READ A FILE AND RENDER IT @ /FILE ENDPOINT
		res.end(htmlTemplate);
	} else if (pathName === '/test') {
		// SHOW A STRING @ /TEST ENDPOINT
		res.end('TEST!');
	} else {
		// BLACKLIST THE REST
		res.end('The URL cannot be found');
	}
});
server.listen(8000, () => console.log('Listening requests on Port 8000'));

const pizzas = [
	{
		name: 'Focaccia',
		price: 6,
	},
	{
		name: 'Pizza Margherita',
		price: 10,
	},
	{
		name: 'Pizza Spinaci',
		price: 12,
	},
	{
		name: 'Pizza Funghi',
		price: 12,
	},
	{
		name: 'Pizza Prosciutto',
		price: 15,
	},
];

function Home() {
	return (
		<div>
			<h1>🍕 Fast React Pizza Co.</h1>
			<p>This page has been rendered with React on the server 🤯</p>

			<h2>Menu</h2>
			<ul>
				{pizzas.map((pizza) => (
					<MenuItem
						pizza={pizza}
						key={pizza.name}
					/>
				))}
			</ul>
		</div>
	);
}

function Counter() {
	const [count, setCount] = React.useState(0);
	return (
		<div>
			<button onClick={() => setCount((c) => c + 1)}>+1</button>
			<span>{count}</span>
		</div>
	);
}

function MenuItem({ pizza }) {
	return (
		<li>
			<h4>
				{pizza.name} (${pizza.price})
			</h4>
			<Counter />
		</li>
	);
}
