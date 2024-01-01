const displayArea = document.querySelector('#locationDisplay');
document.querySelector('#getLocation').addEventListener('click', () => {
  if (navigator.geolocation) {
    // // console.log('YAYY!!');
    // // getCurrentPosition gets the current position
    // navigator.geolocation.getCurrentPosition(displayGeoData, displayError);

    // watchPosition updates whenever a user's position changes
    // usefull in mobile apps
    navigator.geolocation.watchPosition(displayGeoData, displayError);
  }
});

const displayGeoData = position => {
  // console.log(position);
  const { latitude, longitude } = position.coords;
  displayArea.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
};

const displayError = err => {
  displayArea.textContent = err.message;
};
