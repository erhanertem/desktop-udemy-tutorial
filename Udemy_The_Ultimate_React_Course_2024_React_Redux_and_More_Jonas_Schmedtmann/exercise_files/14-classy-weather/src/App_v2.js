import React from 'react';
import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill';
polyfillCountryFlagEmojis();

function getWeatherIcon(wmoCode) {
	const icons = new Map([
		[[0], '☀️'],
		[[1], '🌤️'],
		[[2], '⛅️'],
		[[3], '☁️'],
		[[45, 48], '🌪️'],
		[[51, 56, 61, 66, 80], '🌨️'],
		[[53, 55, 63, 65, 57, 67, 81, 82], '🌦️'],
		[[71, 73, 75, 77, 85, 86], '❄️'],
		[[95], '🌩️'],
		[[96, 99], '🌧️'],
	]);
	const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
	if (!arr) return 'NOT FOUND';
	return icons.get(arr);
}

function convertToFlag(countryCode) {
	const codePoints = countryCode
		.toUpperCase()
		.split('')
		.map((char) => 127397 + char.charCodeAt());
	return String.fromCodePoint(...codePoints);
}

function formatDay(dateStr) {
	return new Intl.DateTimeFormat('en', {
		weekday: 'short',
	}).format(new Date(dateStr));
}

class Weather extends React.Component {
	//IMPORTANT!! IF WE DO NOT NEED A STATE OR AN EVEN HANDLER TO BIND THEN A CONSTRUCTOR IS NOT REQUIRED FOR A COMPONENT CLASS

	render() {
		// console.log('⭐', this.props);
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
					{dates.map((date, index) => (
						<Day
							date={date}
							max={max[index]}
							min={min[index]}
							code={codes[index]}
							isToday={index === 0} //Boolean value true marked if index === 0
							key={date}
						/>
					))}
				</ul>
			</div>
		);
	}
}

class Day extends React.Component {
	//IMPORTANT!! IF WE DO NOT NEED A STATE OR AN EVEN HANDLER TO BIND THEN A CONSTRUCTOR IS NOT REQUIRED FOR A COMPONENT CLASS

	render() {
		const { date, max, min, code, isToday } = this.props;

		return (
			<li className="day">
				<span>{getWeatherIcon(code)}</span>
				<p>{isToday ? 'TODAY' : formatDay(date)}</p>
				<p>
					{Math.floor(min)}&deg; &mdash; <strong>{Math.ceil(max)}&deg; </strong>
				</p>
			</li>
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { location: 'lisbon', isLoading: false, displayLocation: '', weather: {} };
		this.fetchWeather.bind(this);
	}

	async fetchWeather() {
		// console.log('Loading data....');
		// console.log(this);
		try {
			this.setState({ isLoading: true });
			// 1) Getting location (geocoding)
			const geoRes = await fetch(
				`https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`,
			);
			const geoData = await geoRes.json();
			// console.log('🔴', geoData);

			if (!geoData.results) throw new Error('Location not found');

			const { latitude, longitude, timezone, name, country_code } = geoData.results.at(0);
			// console.log(`${name} ${convertToFlag(country_code)}`);
			this.setState({ displayLocation: `${name} ${convertToFlag(country_code)}` });

			// 2) Getting actual weather
			const weatherRes = await fetch(
				`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`,
			);
			const weatherData = await weatherRes.json();
			// console.log(weatherData.daily);
			this.setState({ weather: weatherData.daily });
		} catch (err) {
			console.err(err);
		} finally {
			this.setState({ isLoading: false });
		}
	}

	render() {
		return (
			<div className="app">
				<h1>Classy Weather</h1>
				<div>
					<input
						type="text"
						placeholder="Search from location..."
						value={this.state.location}
						onChange={(e) => this.setState({ location: e.target.value })}
					/>
				</div>
				<button onClick={this.fetchWeather.bind(this)}>Get weather</button>
				{this.state.isLoading && <p className="loader">Loading...</p>}
				{this.state.weather.weathercode && (
					<Weather weather={this.state.weather} location={this.state.displayLocation} />
				)}
			</div>
		);
	}
}

export default App;
