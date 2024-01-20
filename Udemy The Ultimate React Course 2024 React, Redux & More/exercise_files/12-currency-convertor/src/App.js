// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from 'react';
import './styles.css';

export default function App() {
	const [amount, setAmount] = useState(1);
	const [fromCur, setFromCur] = useState('USD');
	const [toCur, setToCur] = useState('EUR');
	const [output, setOutput] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(
		function () {
			if (fromCur === toCur) {
				setOutput(amount + ` ${toCur}`);
			}
			(async function () {
				try {
					setIsLoading(true);

					const res = await fetch(
						`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`,
					);

					if (!res.ok) throw new Error('Problem fetching currency conversion data');

					const data = await res.json();

					console.log(data);

					if (!data.rates) throw new Error(`Received incompatible data from server`);

					// console.log(Object.values({ ...data.rates })[0]);
					// setOutput(Object.values({ ...data.rates })[0] + ` ${toCur}`);
					// console.log(data.rates[toCur]);
					setOutput(data.rates[toCur] + ` ${toCur}`);
				} catch (err) {
					console.log(err.message);
				} finally {
					setIsLoading(false);
				}
			})();
		},
		[amount, fromCur, toCur],
	);

	return (
		<div>
			<input
				type="text"
				value={amount}
				onChange={(e) => setAmount(+e.target.value)}
				disabled={isLoading}
			/>
			<select value={fromCur} onChange={(e) => setFromCur(e.target.value)} disabled={isLoading}>
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
				<option value="CAD">CAD</option>
				<option value="INR">INR</option>
			</select>
			<select value={toCur} onChange={(e) => setToCur(e.target.value)} disabled={isLoading}>
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
				<option value="CAD">CAD</option>
				<option value="INR">INR</option>
			</select>
			<p>{output}</p>
		</div>
	);
}
