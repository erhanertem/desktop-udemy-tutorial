import { useEffect, useState } from 'react'

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
	const [amount, setAmount] = useState(1)
	const [fromCur, setFromCur] = useState('EUR')
	const [toCur, setToCur] = useState('USD')
	const [converted, setConverted] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		async function convert() {
			setIsLoading(true)
			const res = await fetch(
				`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`,
			)
			const data = await res.json()
			console.log(data.rates[toCur])
			setConverted(data.rates[toCur])
			setIsLoading(false)
		}

		if (fromCur === toCur) {
			return setConverted(amount)
		}
		convert()
	}, [amount, fromCur, toCur])

	return (
		<div>
			<Input amount={amount} setAmount={setAmount} />
			<select
				value={fromCur}
				onChange={e => setFromCur(e.target.value)}
				disabled={isLoading}
			>
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
				<option value="CAD">CAD</option>
				<option value="INR">INR</option>
			</select>
			<select
				value={toCur}
				onChange={e => setToCur(e.target.value)}
				disabled={isLoading}
			>
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
				<option value="CAD">CAD</option>
				<option value="INR">INR</option>
			</select>
			<p>
				{converted} {toCur}
			</p>
		</div>
	)
}

function Input({ amount, setAmount, isLoading }) {
	console.log(amount)
	const [tempAmount, setTempAmount] = useState(amount)

	useEffect(
		function () {
			const lag = setTimeout(() => setAmount(tempAmount), 500)

			// Cleanup timeout
			return () => clearTimeout(lag)
		},
		[setAmount, tempAmount],
	)

	return (
		<input
			type="text"
			value={tempAmount}
			onChange={e => setTempAmount(Number(e.target.value))}
			disabled={isLoading}
		/>
	)
}
