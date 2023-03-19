export const getUserLocation = () => new Promise((resolve) => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
			resolve(position.coords)
		});
	}
})