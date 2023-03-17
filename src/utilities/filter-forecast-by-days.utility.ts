import { getActualDate } from './'

const groupForecastList = (forecastList: Array<any>) => {
	return forecastList.reduce((group, forecast) => {
		const dateSplitted = forecast.dt_txt.split(" ");
		group[dateSplitted[0]] = group[dateSplitted[0]] ?? [];
		group[dateSplitted[0]].push(forecast);
		return group;
	}, {});
}

export const filterForecastByDays = (forecastList: any[]) => {
	let forecastGrouped = groupForecastList(forecastList);
	const actualDate = getActualDate();
	//console.log(forecastGrouped)
	//console.log(forecastGrouped.slice(1))
	if (Object.keys(forecastGrouped)[0] === actualDate) delete forecastGrouped[actualDate];
	return Object.keys(forecastGrouped).map((prueba) => forecastGrouped[prueba][Math.floor(forecastGrouped[prueba].length / 2)]);
	}