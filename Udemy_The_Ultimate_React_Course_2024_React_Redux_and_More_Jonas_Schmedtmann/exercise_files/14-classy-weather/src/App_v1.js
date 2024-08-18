import React from 'react';

//Class Component instead of a functional component
class Counter extends React.Component {
	//> DEFINE STATES
	constructor(props) {
		super(props); //Boiler plate coming from React.Component

		this.state = { count: 5 }; //Adding a state

		// //NOTE: Bind this to declared function's this in order to refer to the same object
		// this.handleDecrement = this.handleDecrement.bind(this);
		// this.handleIncrement = this.handleIncrement.bind(this);
	}

	//> DECLARE EVENT HANDLERS
	handleDecrement() {
		// console.log(this);
		this.setState((curState) => {
			return {
				count: --curState.count,
			};
		});
	}
	handleIncrement() {
		// console.log(this);
		this.setState((curState) => {
			return {
				count: ++curState.count,
			};
		});
	}

	//> RETURN JSX BODY
	//Function that renders jsx - from React.Component
	render() {
		const date = new Date('June 21 2027');
		date.setDate(date.getDate() + this.state.count);

		return (
			<div>
				<button onClick={this.handleDecrement.bind(this)}>-</button>
				<span>
					{date.toDateString()} [{this.state.count}]
				</span>
				<button onClick={this.handleIncrement.bind(this)}>+</button>
			</div>
		);
	}
}

export default Counter;
