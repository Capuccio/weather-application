const groupForecastList = (forecastList: Array<any>) => {
	return forecastList.reduce((group, forecast) => {
		const dateSplitted = forecast.dt_txt.split(" ");
		group[dateSplitted[0]] = group[dateSplitted[0]] ?? [];
		group[dateSplitted[0]].push(forecast);
		return group;
	}, {});
}

export const filterForecastByDays = (forecastList: any[]) => {
	let forecastFiltered: any[] = [];
	const forecastGrouped = groupForecastList(forecastList)
	return Object.keys(forecastGrouped)
											.slice(1)
											.map((prueba) => forecastGrouped[prueba][Math.floor(forecastGrouped[prueba].length / 2)]);
	}