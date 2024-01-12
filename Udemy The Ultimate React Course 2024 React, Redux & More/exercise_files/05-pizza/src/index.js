import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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
			<h1 className="header">Fast React Pizza Co.</h1>
		</header>
	);
}
// //Inline CSS examples
// function Header() {
// 	return (
// 		<h1
//Inline CSS with JSX
// 			style={{
// 				color: 'blue',
// 				fontSize: '48px',
// 				textTransform: 'uppercase',
// 			}}
// 		>
// 			Fast React Pizza Co.
// 		</h1>
// 	);
// }

function Menu() {
	// // NOTE - CANT DIRECTLY DECLARE A COMPONENT INSIDE ANOTHER COMPONENT - CAUSES ISSUES IN THE LONG RUN.
	// function Pizza() {
	// 	return (
	// 		<div>
	// 			<img src="pizzas/spinaci.jpg" alt="Pizza spinaci" />
	// 			<h2>Pizza Spinaci</h2>
	// 			<p>Tomato, mozarella, spinach, and ricotta cheese</p>
	// 		</div>
	// 	);
	// }

	const pizzas = pizzaData;
	// const pizzas = [];

	return (
		<main className="menu">
			<h2>Our menu</h2>

			{pizzas.length > 0 ? (
				<>
					<p>
						Authentic Italian cuisine. 6 creative dishes to choose
						from. All from our stone oven, all organic, all
						delicious.
					</p>
					<ul className="pizzas">
						{pizzas.map(pizza => (
							<Pizza pizzaObj={pizza} key={pizza.name} />
						))}
					</ul>
				</>
			) : (
				<p>
					We're still working on our menu. Please come back later :)
				</p>
			)}
			{/* {pizzas.length > 0 ? (
				<ul className="pizzas">
					{pizzas.map(pizza => (
						<Pizza pizzaObj={pizza} key={pizza.name} />
					))}
				</ul>
			) : null} */}
			{/* {pizzas.length > 0 && (
				<ul className="pizzas">
					{pizzas.map(pizza => (
						<Pizza pizzaObj={pizza} key={pizza.name} />
					))}
				</ul>
			)} */}

			{/* <div>
				{pizzaData.map(pizza => (
					<Pizza
						name={pizza.name}
						ingredients={pizza.ingredients}
						photoName={pizza.photoName}
						price={pizza.price}
					/>
				))}
			</div> */}
			{/* <Pizza
				name="Pizza Spinaci"
				ingredients="Tomato, mozarella, spinach, and ricotta cheese"
				photoName="pizzas/spinaci.jpg"
				price={10} //entering numbers via entering js mode in jsx
			/>
			<Pizza
				name="Pizza Fungi"
				ingredients="Tomato, mushrooms"
				photoName="pizzas/funghi.jpg"
				price={12}
			/> */}
		</main>
	);
}

function Pizza({ pizzaObj }) {
	// if (pizzaObj.soldOut) return null;

	return (
		<li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
			<img src={pizzaObj.photoName} alt={pizzaObj.name} />
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>
				<span>
					{pizzaObj.soldOut ? 'SOLD OUT' : `$${pizzaObj.price}`}
				</span>
				{/* <span>{props.price + 1}</span> */}
			</div>
		</li>
	);
}

function Footer() {
	const hour = new Date().getHours();
	// console.log(hour);
	const openHour = 0;
	const closeHour = 20;
	const isOpen = hour >= openHour && hour <= closeHour;
	// console.log(isOpen);

	// if (!isOpen)
	// 	return (
	// 		<footer className="footer">
	// 			<p>
	// 				We're happy to welcome you between {openHour}:00 and{' '}
	// 				{closeHour}
	// 				:00
	// 			</p>
	// 		</footer>
	// 	);
	// return (
	// 	<footer className="footer">
	// 		{isOpen && (
	// 			<div className="order">
	// 				<p>
	// 					We're open until {closeHour}:00. Come visit us or order
	// 					online
	// 				</p>
	// 				<button className="btn">Order</button>
	// 			</div>
	// 		)}
	// 	</footer>
	// );
	return (
		<footer className="footer">
			{/* {isOpen && (
				<div className="order">
					<p>
						We're open until {closeHour}:00. Come visit us or order
						online
					</p>
					<button className="btn">Order</button>
				</div>
			)} */}
			{isOpen ? (
				<Order closeHour={closeHour} openHour={openHour} />
			) : (
				<p>
					We're happy to welcome you between {openHour}:00 and{' '}
					{closeHour}:00
				</p>
			)}
		</footer>
	);
	// return React.createElement('footer', null, "We're currently open!"); //html tag element/received props/tag element content
}

function Order({ closeHour, openHour }) {
	return (
		<div className="order">
			<p>
				We're open from {openHour}:00 until {closeHour}:00. Come visit
				us or order online
			</p>
			<button className="btn">Order</button>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

// //Prior to react 18
// ReactDOM.render(<App />, document.getElementById('root'));
