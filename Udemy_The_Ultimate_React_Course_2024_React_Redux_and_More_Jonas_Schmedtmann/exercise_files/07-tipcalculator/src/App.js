import { useState } from 'react';

export default function App() {
	return (
		<div>
			<TipCalculator />
		</div>
	);
}

function TipCalculator() {
	const [bill, setBill] = useState('');
	const [tipA, setTipA] = useState(0);
	const [tipB, setTipB] = useState(0);

	function resetHandler() {
		setBill('');
		setTipA(0);
		setTipB(0);
	}

	let tips = [(bill * tipA) / 100, (bill * tipB) / 100];

	return (
		<div>
			<BillInput
				bill={bill}
				onSetBill={setBill}
			>
				How much was the bill?{' '}
			</BillInput>
			<SelectPercentage
				tip={tipA}
				onSelect={setTipA}
			>
				How did you like the service?{' '}
			</SelectPercentage>
			<SelectPercentage
				tip={tipB}
				onSelect={setTipB}
			>
				How did your friend like the service?{' '}
			</SelectPercentage>
			{bill > 0 && (
				<Output
					bill={bill}
					tips={tips}
				/>
			)}
			<Reset onReset={resetHandler} />
		</div>
	);
}
function BillInput({ children, bill, onSetBill }) {
	return (
		<div>
			<label>{children}</label>
			<input
				type="text"
				placeholder="Bill value"
				value={bill}
				onChange={(e) => onSetBill(Number(e.target.value))}
			></input>
		</div>
	);
}
function SelectPercentage({ children, tip, onSelect }) {
	return (
		<div>
			<label>{children}</label>
			<select
				value={tip}
				onChange={(e) => onSelect(Number(e.target.value))}
			>
				<option value="0">Dissatisfied (0%)</option>
				<option value="5">It was okay (5%)</option>
				<option value="10">It was good (10%)</option>
				<option value="20">Absolutely amazing (20%)</option>
			</select>
		</div>
	);
}
function Output({ bill, tips }) {
	return (
		<h3>
			On a meal of ${bill}, you pay ${tips[0] + tips[1]} (${tips[0]} + $
			{tips[1]} tip)
		</h3>
	);
}
function Reset({ onReset }) {
	return <button onClick={onReset}>Reset</button>;
}
