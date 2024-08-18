import express from 'express';

import { AVAILABLE_LOCATIONS } from './data/available-locations.js';
import renderLocationsPage from './views/index.js';
import renderLocation from './views/components/location.js';
import { html } from './prettierhtmx.js';

const app = express();

const INTERESTING_LOCATIONS = [];

function getSuggestedLocations() {
	const availableLocations = AVAILABLE_LOCATIONS.filter(
		(location) => !INTERESTING_LOCATIONS.includes(location)
	);

	if (availableLocations.length < 2) return availableLocations;

	const suggestedLocation1 = availableLocations.splice(
		Math.floor(Math.random() * availableLocations.length),
		1
	)[0];
	const suggestedLocation2 = availableLocations.splice(
		Math.floor(Math.random() * availableLocations.length),
		1
	)[0];

	return [suggestedLocation1, suggestedLocation2];
}

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	const availableLocations = AVAILABLE_LOCATIONS.filter(
		(location) => !INTERESTING_LOCATIONS.includes(location)
	);
	const suggestedLocations = getSuggestedLocations();
	res.send(
		renderLocationsPage(
			suggestedLocations,
			availableLocations,
			INTERESTING_LOCATIONS
		)
	);
});

app.post('/places', (req, res) => {
	const locationId = req.body.locationId;
	// Retrieve the picked location's data from the Available Locations
	const location = AVAILABLE_LOCATIONS.find((loc) => loc.id === locationId);
	// Record into the My Dream Locations Data set
	INTERESTING_LOCATIONS.push(location);

	// Remove the picked location from Available Locations
	const availableLocations = AVAILABLE_LOCATIONS.filter(
		(location) => !INTERESTING_LOCATIONS.includes(location)
	);

	// Redraw currently suggessted list
	const suggestedLocations = getSuggestedLocations();

	// --> Perform Out of Band Swaps in POST fetch - Multi Fragment Swap: When adding the item to My Dream Location, we remove it from the Available Locations
	// VERY IMPORTANT - hx-swap-oob="true" tells that this portion of code is not part of the targeted replacement that initiated the	post req. hx-swap-oob marked element will find id="available-locations" to	replace itself
	res.send(html`
		${
			// -> #1.First Fragment Piece
			renderLocation(location, false) // When posting the pic to My Dream Locations container marked w/ hx-target="#interesting-locations" , isAvailableLocationList = false so that we know it belongs to my dream locations.
			// -> #2.Second Fragment Piece - OOBS
		}

		<ul id="suggested-locations" class="locations" hx-swap-oob="innerHTML">
			${suggestedLocations
				.map((location) => renderLocation(location))
				.join('')}
		</ul>

		<ul id="available-locations" class="locations" hx-swap-oob="true">
			${availableLocations
				.map((location) => renderLocation(location))
				.join('')}
		</ul>
	`);
});

{
	/* NOTE hx-swap-oob="true" is replaced with "innerHTML" option so that index.js>ul#suggested-locations 's hx-get="/suggested-locations" can replace the content but noit the ul element itself */
}

app.get('/suggested-locations', (req, res) => {
	const suggestedLocations = getSuggestedLocations();

	res.send(
		suggestedLocations.map((location) => renderLocation(location)).join('')
	);
});

app.delete('/places/:id', (req, res) => {
	const locationId = req.params.id;
	// Remove the item from the My Dream Locations
	const locationIndex = INTERESTING_LOCATIONS.findIndex(
		(loc) => loc.id === locationId
	);
	// Obtain the revised My Dream Locations Array
	INTERESTING_LOCATIONS.splice(locationIndex, 1);
	// Create revised Available Locations Array which do not include the My Dream Locations objects
	const availableLocations = AVAILABLE_LOCATIONS.filter(
		(location) => !INTERESTING_LOCATIONS.includes(location)
	);

	// --> Perform Out of Band Swaps - Multi Fragment Swap in DELETE fetch
	res.send(
		// -> #1.First Fragment Piece - its empy response - Via hx-swap set to 'outerHTML' the entire element is swapped with nothing as res.send() sends nothing
		// -> #2.Second Fragment Piece - oobs marked response only affects ul id="available-locations"
		html`
			<ul id="available-locations" class="locations" hx-swap-oob="true">
				${availableLocations
					.map((location) => renderLocation(location))
					.join('')}
			</ul>
		`
	);
});

app.listen(3000);
