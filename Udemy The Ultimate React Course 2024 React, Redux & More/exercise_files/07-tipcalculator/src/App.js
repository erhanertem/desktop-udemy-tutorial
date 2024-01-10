import { useState } from 'react'

export default function App() {
	const [billCost, setBillCost] = useState('')
	const [percentage1, setPercentage1] = useState(0)
	const [percentage2, setPercentage2] = useState(0)

	const tip = (billCost * (percentage1 + percentage2)) / 2 / 100

	function handleReset() {
		setBillCost('')
		setPercentage1(0)
		setPercentage2(0)
	}

	return (
		<div>
			<BillCost billCost={billCost} onSetBillCost={setBillCost} />
			<DropDown
				percentage={percentage1}
				onSelect={setPercentage1}
				options={[
					{ 0: 'Dissatisfied (0%)' },
					{ 5: 'It was okay (5%)' },
					{ 10: 'Fair pricing (10%)' },
					{ 20: 'Excellente! (20%)' },
				]}
			>
				How did you like the service ?
			</DropDown>
			<DropDown
				percentage={percentage2}
				onSelect={setPercentage2}
				options={[
					{ 0: 'Dissatisfied (0%)' },
					{ 5: 'It was okay (5%)' },
					{ 10: 'Fair pricing (10%)' },
					{ 20: 'Excellente! (20%)' },
				]}
			>
				How did your friend like the service ?
			</DropDown>
			<br />
			<Output billCost={billCost} tip={tip} />
			<br />
			<ResetButton onResetCost={handleReset} />
		</div>
	)
}

function BillCost({ billCost, onSetBillCost }) {
	return (
		<div>
			<label>How much was the bill?</label>
			<input
				type="number"
				placeholder="Type the bill value"
				value={billCost}
				onChange={e => onSetBillCost(+e.target.value)}
			/>
		</div>
	)
}
function DropDown({ percentage, onSelect, options, children }) {
	console.log()
	return (
		<div>
			<span>{children}</span>
			<select value={percentage} onChange={e => onSelect(+e.target.value)}>
				{options.map((optionObj, i) => (
					<option
						key={Object.entries(optionObj)[0][1]}
						value={Object.entries(optionObj)[0][0]}
					>
						{Object.entries(optionObj)[0][1]}
					</option>
				))}
			</select>
		</div>
	)
}

function Output({ billCost, tip }) {
	return (
		<div>
			<h3>
				{billCost
					? `You pay $${billCost + tip} ($${billCost} + $${tip} tip)`
					: 'Please type in your bill amount and select a tip margin'}
			</h3>
		</div>
	)
}

function ResetButton({ onResetCost }) {
	return (
		<div>
			<button onClick={onResetCost}>Reset</button>
		</div>
	)
}
