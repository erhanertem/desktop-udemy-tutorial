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
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function decreaseStep(step) {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }
  function increaseStep() {
    setStep((s) => s + 1);
  }

  function decreaseCount(step) {
    setCount((c) => c - step);
  }
  function increaseCount(step) {
    console.log(step);
    setCount((c) => c + step);
  }

  return (
    <div>
      <div>
        <button onClick={() => decreaseStep(step)}>-</button>
        <span>Step: {step}</span>
        <button onClick={increaseStep}>+</button>
      </div>
      <div>
        <button onClick={() => decreaseCount(step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => increaseCount(step)}>+</button>
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
    </div>
  );
}

// function Counter() {
// 	const [count, setCount] = useState(0);
// 	const [step, setStep] = useState(1);

// 	const date = new Date('june 21 2027');
// 	date.setDate(date.getDate() + count);

// 	function decreaseStep(step) {
// 		if (step > 1) {
// 			setStep((c) => c - 1);
// 		}
// 	}

// 	return (
// 		<div>
// 			<div>
// 				<button onClick={() => decreaseStep(step)}>-</button>
// 				<span>Step: {step}</span>
// 				<button onClick={() => setStep((c) => c + 1)}>+</button>
// 			</div>

// 			<div>
// 				<button onClick={() => setCount((c) => c - step)}>-</button>
// 				<span>Count: {count}</span>
// 				<button onClick={() => setCount((c) => c + step)}>+</button>
// 			</div>

// 			<p>
// 				<span>
// 					{count === 0
// 						? 'Today is '
// 						: count > 0
// 						? `${count} days from today is `
// 						: `${Math.abs(count)} days ago was `}
// 				</span>
// 				<span>{date.toDateString()}</span>
// 			</p>
// 		</div>
// 	);
// }
