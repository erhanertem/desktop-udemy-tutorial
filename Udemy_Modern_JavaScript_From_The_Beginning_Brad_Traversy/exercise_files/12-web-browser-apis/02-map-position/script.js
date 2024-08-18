const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap ERHAN ERTEM</a> contributors',
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);

const currOptions = {
	enableHighAccuracy: true, //Enables GPS
	timeout: 5000, // Time to debunk looking for position
	maximumAge: 0, // Do not use cache position
};

function currErr(error) {
	console.log(`Error: ${error.code} - ${error.message}`);
}

navigator.geolocation.getCurrentPosition(
	(pos) => {
		const lat = pos.coords.latitude;
		const lng = pos.coords.longitude;

		marker.setLatLng([lat, lng]);
		map.setView([lat, lng], 6);

		marker.bindPopup('<strong>Hello World</strong> <br> This is my location weirdo');
	},
	currErr,
	currOptions
);
