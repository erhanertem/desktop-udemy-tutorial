import { useState } from 'react';
import './styles.css';

export default function App() {
	return (
		<div className="App">
			<Counter />
		</div>
	);
}

function Counter() {
	const [count, setCount] = useState(0);
	const [step, setStep] = useState(1);

	function handleReset() {
		setCount(0);
		setStep(1);
	}

	const date = new Date('june 21 2027');
	date.setDate(date.getDate() + count);

	return (
		<div>
			<br />
			<div>
				<input
					type="range"
					min="1"
					max="10"
					value={step}
					onChange={(e) => setStep(Number(e.target.value))}
				/>
				<span>Step: {step}</span>
			</div>
			<br />
			<div>
				<button onClick={() => setCount((count) => count - step)}>-</button>
				<input
					type="text"
					value={count}
					onChange={(e) => setCount(Number(e.target.value))}
				></input>
				<button onClick={() => setCount((count) => count + step)}>+</button>
			</div>
			<p>
				<span>
					{count === 0
						? 'Today is '
						: count > 0
						? `${count} days from today is `
						: `${count} days ago was `}
				</span>
				<span>{date.toDateString()}</span>
			</p>
			{/* CONDITIONALLY SHOW THE RESET BUTTON IF ANY OF THE ITEMS ARE NOT @ THEIR DEFAULT */}
			{(count !== 0 || step !== 1) && (
				<div>
					<button onClick={handleReset}>Reset</button>
				</div>
			)}
		</div>
	);
}
