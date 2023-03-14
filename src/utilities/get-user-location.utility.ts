export const getUserLocation = () => new Promise((resolve) => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			resolve(position.coords)
		});
	}
})