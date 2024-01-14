export default function Output({ billCost, tip }) {
	return (
		<div>
			<h3>
				{billCost
					? `You pay $${billCost + tip} ($${billCost} + $${tip} tip)`
					: 'Please type in your bill amount and select a tip margin'}
			</h3>
		</div>
	);
}
