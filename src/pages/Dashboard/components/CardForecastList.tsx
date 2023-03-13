import { getDayByDate, getHour, getPmOrAm } from '@/utilities';
import { CardForecast } from './'

interface CardListProps {
	forecastList: Array<any>;
	acceptHourSystem: boolean;
}

export default function CardForecastList(props: CardListProps) {
	return (
		<div className='flex'>
			{props.forecastList.length > 0 && props.forecastList.slice(0, 5).map((forecast, index: number) => (
				<CardForecast
				key={index}
				temp={Math.round(forecast.main.temp)}
				icon={forecast.weather[0].icon}
				hourOrDay={props.acceptHourSystem ? getHour(forecast.dt_txt) : getDayByDate(forecast.dt_txt)}
				acceptHourSystem={props.acceptHourSystem}
				hourSystem={props.acceptHourSystem && getPmOrAm(forecast.dt_txt)}
				/>
			))}
		</div>
	)
}