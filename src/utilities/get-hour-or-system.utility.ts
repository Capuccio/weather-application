export const getHour = (date: string): string => {
	const forecastDate = new Date(date); 
	const hour = forecastDate.getHours();
	const transformedHour = hour > 12 ? hour % 12 : hour;
	const finalHour = transformedHour === 0 ? `0${transformedHour}` : transformedHour;
	return `${finalHour}:00`;
}

export const getPmOrAm = (date: string): string => {
	const forecastDate = new Date(date); 
	return forecastDate.getHours() < 12 ? 'AM' : 'PM';
}