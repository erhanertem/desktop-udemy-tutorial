import axios from 'axios';

const GOOGLE_API_KEY = 'AIzaSyDGWjGB6EQWCXsmLhubOs_7yiGZFQxAzCk';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

type MapCoordinates = { lat: number; lng: number };
type GoogleGeocodingResponse = {
	results: { geometry: { location: MapCoordinates } }[];
	status: 'OK' | 'ZERO_RESULTS';
};

let map: google.maps.Map;
async function initMap(position: MapCoordinates): Promise<void> {
	const { Map } = (await google.maps.importLibrary(
		'maps',
	)) as google.maps.MapsLibrary;
	const { AdvancedMarkerElement } = (await google.maps.importLibrary(
		'marker',
	)) as google.maps.MarkerLibrary;

	map = new Map(document.getElementById('map') as HTMLElement, {
		zoom: 8,
		center: position,
		mapId: 'DEMO_MAP_ID',
	});

	new AdvancedMarkerElement({
		map: map,
		position: position,
	});
}

function searchAddressHandler(event: Event) {
	event.preventDefault();
	const enteredAddress = encodeURI(addressInput.value);
	// Send GET request to Google Map API
	axios
		.get<GoogleGeocodingResponse>(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${enteredAddress}&key=${GOOGLE_API_KEY}`,
		)
		.then((res) => {
			if (res.data.status !== 'OK') {
				throw new Error(`Could not fetch location: ${res.data.status}`);
			}
			const coordinates = res.data.results[0].geometry.location;

			initMap(coordinates);
		})
		.catch((err) => {
			alert(err.message);
			console.log(err);
		});
}

form.addEventListener('submit', searchAddressHandler);
