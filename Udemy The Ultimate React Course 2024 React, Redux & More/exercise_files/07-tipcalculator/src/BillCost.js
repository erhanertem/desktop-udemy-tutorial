export default function BillCost({ billCost, onSetBill }) {
	return (
		<div>
			<label>How much was the bill ?</label>
			<input
				type="number"
				placeholder="Type the bill value"
				value={billCost}
				onChange={(e) => onSetBill(+e.target.value)}
			/>
		</div>
	);
}
