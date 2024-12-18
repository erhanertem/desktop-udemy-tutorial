import React from 'react';
import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill';
import Weather from './Weather';
import Input from './Input';
polyfillCountryFlagEmojis();

class App extends React.Component {
	// NOTE: REMOVED CONSTRUCTOR AS STATES COULD BE RETRIEVED THRU CLASS FIELDS
	// STATES
	state = {
		location: '',
		isLoading: false,
		displayLocation: '',
		weather: {},
	};

	convertToFlag(countryCode) {
		const codePoints = countryCode
			.toUpperCase()
			.split('')
			.map((char) => 127397 + char.charCodeAt());
		return String.fromCodePoint(...codePoints);
	}

	// EVENTHANDLER
	// NOTE: In order to avoid this binding, we can opt to use async arrow functions
	// async fetchWeather() {
	fetchWeather = async () => {
		if (this.state.location.length < 2) return this.setState({ weather: {} });
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
			console.error(err);
		} finally {
			// Stop loader indicator
			this.setState({ isLoading: false });
		}
	};

	setLocation = (e) => this.setState({ location: e.target.value });

	// LIFECYCLE METHOD - SIMILAR TO USEEFFECT[] WITH EMPTY DEPENDENCY ARRAY - CALLED ONLY ONMOUNT
	componentDidMount() {
		// this.fetchWeather();
		this.setState({ location: localStorage.getItem('location') || '' });
	}
	// LIFECYCLE METHOD - SIMILAR TO USEEFFECT[] WITH SOME DEPENDENCY ARRAY - CALLED ONLY BETWEEN RE-RENDERS
	componentDidUpdate(prevProps, prevState) {
		if (this.state.location !== prevState.location) {
			this.fetchWeather();

			localStorage.setItem('location', this.state.location);
		}
	}

	// RENDER JSX
	render() {
		return (
			<div className="app">
				<h1>Classy Weather</h1>
				<Input
					location={this.state.location}
					onChangeLocation={this.setLocation}
				/>
				{/* <button onClick={this.fetchWeather}>Get weather</button> */}
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
