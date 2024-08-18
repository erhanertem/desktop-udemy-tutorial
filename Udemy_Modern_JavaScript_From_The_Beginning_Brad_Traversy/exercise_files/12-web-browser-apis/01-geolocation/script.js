// getCurrentPosition()
function curSuccess(pos) {
	console.log(pos);
	console.log(`Lat: ${pos.coords.latitude} Lng: ${pos.coords.longitude} w/accuracy of ${pos.coords.accuracy} meters`);
}
function curErr(error) {
	console.log(`Error: ${error.code} - ${error.message}`);
}
const curOptions = {
	enableHighAccuracy: true, //Enables GPS
	timeout: 5000, // Time to debunk looking for position
	maximumAge: 0, // Do not use cache position
};

navigator.geolocation.getCurrentPosition(curSuccess, curErr, curOptions);

// watchPosition()
const target = {
	latitude: 41.358977,
	longitude: -71.2356,
};

function watchSuccess(pos) {
	const coords = pos.coords;

	if (target.latitude === coords.latitude && target.longitude === coords.longitude) {
		console.log('You have reached your destination');
		navigator.geolocation.clearWatch(id);
	}
}
function watchErr(error) {
	console.log(`Error: ${error.code} - ${error.message}`);
}
const watchOptions = {
	enableHighAccuracy: true, //Enables GPS
	timeout: 5000, // Time to debunk looking for position
	maximumAge: 0, // Do not use cache position
};

const navId = navigator.geolocation.watchPosition(watchSuccess, watchErr, watchOptions);
