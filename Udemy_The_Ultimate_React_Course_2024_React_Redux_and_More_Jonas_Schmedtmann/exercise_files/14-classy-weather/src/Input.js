import React from 'react';

class Input extends React.Component {
	// RENDER JSX
	render() {
		return (
			<div>
				<input
					type="text"
					placeholder="Search from location..."
					value={this.props.location}
					onChange={this.props.onChangeLocation}
				/>
			</div>
		);
	}
}

export default Input;
