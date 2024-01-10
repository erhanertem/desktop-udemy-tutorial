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

	const date = new Date('june 21 2027');
	date.setDate(date.getDate() + count);

	function handleReset() {
		setCount(0);
		setStep(1);
	}

	return (
		<div>
			<div>
				<input
					type="range"
					id="step"
					min="1"
					max="10"
					value={step}
					onChange={(e) => setStep(+e.target.value)}
					name="Step"
				/>
				<label for="step">Step : {step}</label>
			</div>

			<div>
				<button onClick={() => setCount((c) => c - step)}>-</button>
				<input
					type="text"
					value={count}
					onChange={(e) => setCount(+e.target.value)}
				></input>
				<button onClick={() => setCount((c) => c + step)}>+</button>
			</div>

			<p>
				<span>
					{count === 0
						? 'Today is '
						: count > 0
						? `${count} days from today is `
						: `${Math.abs(count)} days ago was `}
				</span>
				<span>{date.toDateString()}</span>
			</p>

			{count !== 0 || step !== 1 ? (
				<div>
					<button onClick={handleReset}>Reset</button>
				</div>
			) : null}
		</div>
	);
}
