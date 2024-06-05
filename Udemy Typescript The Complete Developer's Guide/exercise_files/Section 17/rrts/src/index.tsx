import React, { useState } from 'react';

// // > Older Syntax - ClassBased
// import ReactDOM from 'react-dom';

// interface AppProps {
// 	color: string;
// }

// class App extends React.Component<AppProps> {
// 	state = { counter: 0 };

// 	onIncrement = (): void => {
// 		this.setState({ counter: this.state.counter + 1 });
// 	};
// 	onDecrement = (): void => {
// 		this.setState({ counter: this.state.counter - 1 });
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<p>Hi there. {this.props.color}</p>
// 				<button onClick={this.onIncrement}>Increment</button>
// 				<button onClick={this.onDecrement}>Decrement</button>
// 				{this.state.counter}
// 			</div>
// 		);
// 	}
// }
// ReactDOM.render(<App color="red" />, document.querySelector('#root'));

// > Newer Syntax - Functional React Component
import ReactDOM from 'react-dom/client';

// NOTE: An interface has to accompany a React Component
interface AppProps {
	color?: string;
}

// React Component
// function App(props: AppProps) {
function App({ color }: AppProps): JSX.Element {
	const [counter, setCounter] = useState(0);

	const onIncrement = (): void => {
		setCounter((counter) => counter + 1);
	};
	const onDecrement = (): void => {
		setCounter((counter) => counter - 1);
	};

	return (
		<div>
			<p>Hi there. {color}</p>
			<button onClick={onIncrement}>Increment</button>
			<button onClick={onDecrement}>Decrement</button>
			{counter}
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
	<React.StrictMode>
		<App color="red" />
	</React.StrictMode>,
);
