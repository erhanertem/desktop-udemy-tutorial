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

	return (
		<div>
			<br />
			<div>
				<button onClick={() => setStep((step) => step - 1)}>-</button>
				<span>Step: {step}</span>
				<button onClick={() => setStep((step) => step + 1)}>+</button>
			</div>
			<br />
			<div>
				<button onClick={() => setCount((count) => count - step)}>-</button>
				<span>Count: {count}</span>
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
		</div>
	);
}
