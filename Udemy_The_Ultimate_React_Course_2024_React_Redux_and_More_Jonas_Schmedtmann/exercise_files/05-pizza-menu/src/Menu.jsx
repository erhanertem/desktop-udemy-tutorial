import Pizza from './Pizza';

export const pizzaData = [
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

export function Menu() {
	return (
		<main className="menu">
			<h2>Our menu</h2>

			{/* Conditional Rendering via Ternary Operator */}
			{pizzaData.length > 0 ? (
				<>
					<p>
						Authentic Italian cusine. 6 cereative dishes to choose from.
						All from our stone oven, all organic, all delicious.
					</p>
					<ul className="pizzas">
						{pizzaData.map((pizza) => {
							return <Pizza pizzaDetails={pizza} key={pizza.name} />;
						})}
					</ul>
				</>
			) : (
				<p>We're still working on our menu. Please come back later.</p>
			)}
			{/* {pizzaData.length > 0 ? (
				<ul className="pizzas">
					{pizzaData.map((pizza) => {
						return <Pizza pizzaDetails={pizza} key={pizza.name} />;
					})}
				</ul>
			) : null} */}
			{/* Conditional Rendering with && operator */}
			{/* {pizzaData.length > 0 && (
				<ul className="pizzas">
					{pizzaData.map((pizza) => {
						return <Pizza pizzaDetails={pizza} key={pizza.name} />;
					})}
				</ul>
			)} */}
		</main>
	);
}
