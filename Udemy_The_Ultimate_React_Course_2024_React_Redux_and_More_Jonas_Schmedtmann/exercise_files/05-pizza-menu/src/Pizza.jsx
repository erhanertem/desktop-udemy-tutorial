function Pizza({ pizzaDetails }) {
	const { name, ingredients, photoName, price, soldOut } = pizzaDetails;

	// // Early return technique to avoid unwanted element rendering
	// if (soldOut) return null;

	return (
		// <li className={`pizza ${soldOut ? 'sold-out' : ''}`}> // Alternate solution
		<li className={soldOut ? 'pizza sold-out' : 'pizza'}>
			<img src={photoName} alt={name} />
			<div>
				<h3>{name}</h3>
				<p>{ingredients}</p>
				<span>{soldOut ? 'SOLD OUT' : `$${price}`}</span>
			</div>
		</li>
	);
}

export default Pizza;
