import { useEffect, useState } from 'react';

function App() {
	const [advice, setAdvice] = useState('');
	const [count, setCount] = useState(0);

	useEffect(function () {
		getAdvice();
	}, []);

	async function getAdvice() {
		const response = await fetch('https://api.adviceslip.com/advice');
		const data = await response.json();
		// console.log(data.slip.advice);
		setAdvice(data.slip.advice);
		setCount((count) => count + 1);
	}

	return (
		<div>
			<h1>{advice}</h1>
			<button onClick={getAdvice}>Get advice</button>
			<Message count={count} />
		</div>
	);
}

export default App;

function Message({ count }) {
	return (
		<p>
			You have read <strong>{count}</strong> pieces of advice
		</p>
	);
}
