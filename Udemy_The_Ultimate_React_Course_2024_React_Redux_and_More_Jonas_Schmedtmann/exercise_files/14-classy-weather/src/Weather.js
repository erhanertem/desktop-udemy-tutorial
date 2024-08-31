import React from 'react';
import Day from './Day';

class Weather extends React.Component {
	// NOTE: REMOVED CONSTRUCTOR

	// LIFECYCLE METHOD - SIMILAR TO CLEANUP - CALLED UPON COMPONENT DISMOUNT
	componentWillUnmount() {
		// Add cleanup code here
		console.log('Weather will unmount');
		// Remove any subscriptions, timers, or other cleanup logic
	}

	// Render jsx
	render() {
		console.log(this.props);

		const {
			temperature_2m_max: max,
			temperature_2m_min: min,
			time: dates,
			weathercode: codes,
		} = this.props.weather;

		return (
			<div>
				<h2>Weather {this.props.location}</h2>
				<ul className="weather">
					{dates.map((date, i) => (
						<Day
							max={max.at(i)}
							min={min.at(i)}
							date={date}
							code={codes.at(i)}
							isToday={i === 0} //Passes either false | true
							key={date}
						/>
					))}
				</ul>
			</div>
		);
	}
}

export default Weather;
