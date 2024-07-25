function getLocation() {
    const locationDiv = document.getElementById('location');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        locationDiv.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const locationDiv = document.getElementById('location');
    locationDiv.innerHTML = `Latitude: ${latitude} <br> Longitude: ${longitude}`;
}

function showError(error) {
    const locationDiv = document.getElementById('location');
    switch (error.code) {
        case error.PERMISSION_DENIED:
            locationDiv.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            locationDiv.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            locationDiv.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            locationDiv.innerHTML = "An unknown error occurred.";
            break;
    }
}
