import React from 'react';
import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill';
import Weather from './Weather';
polyfillCountryFlagEmojis();

class App extends React.Component {
	// CONSTRUCTOR BOILERPLATE FOR PROPS/STATES
	constructor(props) {
		// PROPS PASSED FROM THE PARENTING CLASS COMPONENT
		super(props);
		// STATES
		this.state = {
			location: 'lisbon',
			isLoading: false,
			displayLocation: '',
			weather: {},
		};
	}

	convertToFlag(countryCode) {
		const codePoints = countryCode
			.toUpperCase()
			.split('')
			.map((char) => 127397 + char.charCodeAt());
		return String.fromCodePoint(...codePoints);
	}

	// EVENTHANDLER
	async fetchWeather() {
		try {
			// Start loader indicator
			this.setState({ isLoading: true });
			// 1) Getting location (geocoding)
			const geoRes = await fetch(
				`https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`
			);
			const geoData = await geoRes.json();
			console.log(geoData);

			if (!geoData.results) throw new Error('Location not found');

			const { latitude, longitude, timezone, name, country_code } =
				geoData.results.at(0);
			this.setState({
				displayLocation: `${name} ${this.convertToFlag(country_code)}`,
			});

			// 2) Getting actual weather
			const weatherRes = await fetch(
				`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
			);
			const weatherData = await weatherRes.json();
			this.setState({ weather: weatherData.daily });
		} catch (err) {
			console.err(err);
		} finally {
			// Stop loader indicator
			this.setState({ isLoading: false });
		}
	}

	// RENDER JSX
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
					<Weather
						weather={this.state.weather}
						location={this.state.displayLocation}
					/>
				)}
			</div>
		);
	}
}

export default App;
