import { useState } from 'react'

import { LoadingComponents } from '@/components'
import { cityInfo } from '@/models';
import { useAsyncEffect, useLoadAndFetch } from '@/hooks';
import { getCurrentWeather, getForecast } from '@/services';
import { filterForecastByDays, getUserLocation, weatherIcon } from '@/utilities'
import { mockForecastList } from '@/__mocks__';

import { CardForecastList, SearchBar } from './components'

const backgroundImageStyle = {
	day: "linear-gradient(to right, #FBFBFB 60%, #FBF3E7)",
	night: "linear-gradient(to right, #FBFBFB 60%, #D5D5E8)",
}

export default function Dashboard() {
	const { loading, startCalling } = useLoadAndFetch();
	const [cityWeather, setCityWeather] = useState<any>({
		name: "",
		weather: {
			weather: [{ icon: "01d" }],
		},
		forecast: {
			list: mockForecastList,
		}
	})

	const requestWeatherHandler = async (city: cityInfo) => {
		const resultWeather = await startCalling(getCurrentWeather(city.lat, city.lon));
		const resultForecast = await startCalling(getForecast(city.lat, city.lon));
		setCityWeather({ name: resultWeather.name, weather: resultWeather, forecast: resultForecast });
	}

	const requestWeatherByUserLocation = async () => {
		const coords: any  = await getUserLocation();
		return { lat: coords.latitude, lon: coords.longitude };
	}

	useAsyncEffect(requestWeatherByUserLocation, requestWeatherHandler, () => {}, []);

	return (
	<div className="mx-auto w-5/12">
		<SearchBar requestWeatherHandler={requestWeatherHandler} />
		<div style={{ backgroundImage: cityWeather.weather.weather[0].icon.includes("d") ? backgroundImageStyle.day : backgroundImageStyle.night }} className={`my-3 relative shadow-card bg-white-card rounded-[2.5rem] p-10`}>
			<LoadingComponents loading={loading} />
			<div className='flex'>
				<div>
					<div className="text-[#303a52] text-8xl">{Math.round(cityWeather.weather.main?.temp | 0)}°</div>
					<div className="text-gray text-2xl">{cityWeather.name ? cityWeather.name : "City"}, {cityWeather.weather.sys?.country ? cityWeather.weather.sys?.country : "Country"}</div>
				</div>
				<div className='ml-auto'>
					<img width={120} src={weatherIcon[cityWeather.weather.weather[0].icon]} />
				</div>
			</div>
		</div>
		<div className="my-3 relative shadow-card bg-white-card rounded-[2.5rem] p-10 text-center">
			<LoadingComponents loading={loading} />
			<CardForecastList forecastList={cityWeather.forecast.list} acceptHourSystem={true} />
		</div>
		<div className="relative shadow-card bg-white-card rounded-[2.5rem] p-10 text-center">
			<LoadingComponents loading={loading} />
			<CardForecastList forecastList={filterForecastByDays(cityWeather.forecast.list)} acceptHourSystem={false} />
		</div>
	</div>
)
}