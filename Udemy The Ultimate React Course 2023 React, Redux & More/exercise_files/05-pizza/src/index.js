import './index.css'; //Import external CSS

import React from 'react';
import ReactDOM from 'react-dom/client';

const pizzaData = [
	{
		name: 'Focaccia',
		ingredients: 'Bread with italian olive oil and rosemary',
		price: 6,
		photoName: 'pizzas/focaccia.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Margherita',
		ingredients: 'Tomato and mozarella',
		price: 10,
		photoName: 'pizzas/margherita.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Spinaci',
		ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
		price: 12,
		photoName: 'pizzas/spinaci.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Funghi',
		ingredients: 'Tomato, mozarella, mushrooms, and onion',
		price: 12,
		photoName: 'pizzas/funghi.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Salamino',
		ingredients: 'Tomato, mozarella, and pepperoni',
		price: 15,
		photoName: 'pizzas/salamino.jpg',
		soldOut: true,
	},
	{
		name: 'Pizza Prosciutto',
		ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
		price: 18,
		photoName: 'pizzas/prosciutto.jpg',
		soldOut: false,
	},
];

function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	return (
		<header className="header">
			<h1>Fast React Pizza Co.</h1>
		</header>
	);
}
//Inline CSS examples
// function Header() {
// 	const style = { color: 'red', fontSize: '48px', textTransform: 'uppercase' };
// 	return (
// 			<h1 style={style} className="header">
// 				Fast React Pizza Co.
// 			</h1>
// 	); //Inline CSS with JSX
// }
// function Header() {
// 	return (
// 		<h1 style={{ color: 'red', fontSize: '48px', textTransform: 'uppercase' }}>
// 			Fast React Pizza Co.
// 		</h1>
// 	);
// }

// function Menu() {
// 	return (
// 		<main className="menu">
// 			<h2>Our Menu</h2>
// 			{pizzaData.length > 0 && ( //VERY IMPORTANT!!! pizzaData.length >0 check disable rendering ul element all together!!!
// 				<ul className="pizzas">
// 					{pizzaData.map((pizza) => (
// 						<Pizza key={pizza.name} pizzaObj={pizza} />
// 					))}
// 				</ul>
// 			)}
// 		</main>
// 	);
// }
function Menu() {
	return (
		<main className="menu">
			<h2>Our Menu</h2>
			{/* VERY IMPORTANT!!! pizzaData.length >0 check disable rendering ul element
			all together!!! */}
			{pizzaData.length > 0 ? (
				<>
					<p>
						Authentic Italian cuisine. 6 creative dishes to choose from. All
						from our stone even, all organic, all delicious.
					</p>

					<ul className="pizzas">
						{pizzaData.map((pizza) => (
							<Pizza key={pizza.name} pizzaObj={pizza} />
						))}
					</ul>
				</>
			) : (
				<p>We're still working on our menu. Please come back later.</p>
			)}
		</main>
	);
}

function Pizza({ pizzaObj }) {
	// if (pizzaObj.soldOut) return null;

	return (
		// VERY IMPORTANT!!! CLASS NAME MANUPULATION W/TERNARY OPERATOR FOR SELECTIVE CSS
		<li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
			<img src={pizzaObj.photoName} alt={pizzaObj.name} />
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>

				{/* {pizzaObj.soldOut ? (
					<span>SOLD OUT</span>
				) : (
					<span>$ {pizzaObj.price}</span>
				)} */}
				<span>{pizzaObj.soldOut ? 'SOLD OUT' : '$' + pizzaObj.price}</span>
			</div>
		</li>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;

	// return React.createElement('footer', null, "We're currently open!");
	// return (
	// 	<footer className="footer">
	// 		{isOpen ? (
	// 			<div className="order">
	// 				<p>We're open until {closeHour}:00. Come visit us or order online.</p>
	// 				<button className="btn">Order</button>
	// 			</div>
	// 		) : (
	// 			<p>
	// 				We're happy to welcome you between {openHour}:00 and {closeHour}:00.
	// 			</p>
	// 		)}
	// 	</footer>
	// );
	return isOpen && pizzaData.length > 0 ? (
		<Order closeHour={closeHour} />
	) : (
		<Close closeHour={closeHour} openHour={openHour} />
	);
}

function Order({ closeHour }) {
	return (
		<footer className="footer">
			<div className="order">
				<p>We're open until {closeHour}:00. Come visit us or order online.</p>
				<button className="btn">Order</button>
			</div>
		</footer>
	);
}

function Close({ openHour, closeHour }) {
	return (
		<footer className="footer">
			<div className="order">
				<p>
					We're happy to welcome you between {openHour}:00 and {closeHour}:00.
				</p>
			</div>
		</footer>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
