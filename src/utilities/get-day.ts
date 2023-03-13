const days: Array<string> = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const getDayByDate = (date: string): string => {
	const forecastDate = new Date(date); 
	return days[forecastDate.getDay()];
}