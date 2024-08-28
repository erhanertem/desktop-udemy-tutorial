// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from 'react';

export default function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('EUR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function convert() {
        setIsLoading(true);
        fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
          .then((response) => response.json())
          .then((data) => setOutput(data.rates[toCurrency]))
          .catch((err) => console.log(err.message))
          .finally(setIsLoading(false));
      }

      if (amount && !isNaN(Number(amount)) && fromCurrency && toCurrency && fromCurrency !== toCurrency) convert();
    },
    [fromCurrency, toCurrency, amount]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        disabled={isLoading}
      />
      <select
        value={fromCurrency}
        disabled={isLoading}
        onChange={(e) => {
          setFromCurrency(e.target.value);
        }}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        disabled={isLoading}
        onChange={(e) => {
          setToCurrency(e.target.value);
        }}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {!amount || (amount && isNaN(Number(amount)))
          ? 'Please enter a valid amount'
          : amount && !isNaN(Number(amount)) && fromCurrency === toCurrency
          ? 'Please choose a different currency to convert to'
          : output
          ? `Converted amount is ${Number(output).toFixed(2)} ${toCurrency}`
          : ''}
      </p>
    </div>
  );
}
