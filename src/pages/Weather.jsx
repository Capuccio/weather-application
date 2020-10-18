import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchCity from "../components/SearchCity";
import Model from "../components/Model";

import { message } from "antd";
import "./css/Weather.css";

const Weather = () => {
	const [loading, setLoading] = useState(false)
	const [weatherData, setWeatherData] = useState({
		city: "Empty",
		temperature: "0",
		icon: "https://www.weatherbit.io/static/img/icons/c01d.png"
	});

	const searchCity = async (city) => {
		setLoading(true)
		let response = await fetch(
			`https://api.weatherbit.io/v2.0/current?city=${city}&key=0a21e71b98db49a089be2b699c0f2a9c`
		);

		if (response.status === 200) {
			let { data } = await response.json();
			setWeatherData({
				city: data[0].city_name,
				temperature: Math.round(data[0].temp),
				icon: `https://www.weatherbit.io/static/img/icons/${data[0].weather.icon}.png`
			});
			setLoading(false)
		} else {
			message.error("City not found");
		}
	};

	return (
		<div className="componentWeather">
			<Navbar />
			<div className="weatherImageBg" alt="New York City Background" />
			<SearchCity searchCity={searchCity} loading={loading} />
			<Model weatherData={weatherData} />
		</div>
	);
};

export default Weather;
