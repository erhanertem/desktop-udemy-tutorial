import React from 'react';

class Counter extends React.Component {
	// Declare props & states in the constructor boilerplate
	constructor(props) {
		super(props);

		this.state = { count: 0 };
		this.handleIncrement = this.handleIncrement.bind(this); // We can bind here else bind @ cb in jsx, either way is acceptable
	}

	handleDecrement() {
		// console.log(this);
		this.setState((curState) => ({ count: curState.count - 1 }));
	}
	handleIncrement() {
		this.setState((curState) => ({ count: curState.count + 1 }));
	}

	// Renders JSX
	render() {
		// Increment/Decrement date by count state
		const date = new Date('june 21 2027');
		date.setDate(date.getDate() + this.state.count);

		return (
			<div>
				<button onClick={this.handleDecrement.bind(this)}>-</button>
				<span>
					{date.toDateString()} [{this.state.count}]
				</span>
				{/* handleIncrement binding is carried out @ constructor instead of inline binding - either way is okay */}
				<button onClick={this.handleIncrement}>+</button>
			</div>
		);
	}
}

export default Counter;
