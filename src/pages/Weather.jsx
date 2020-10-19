import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SearchCity from "../components/SearchCity";
import Model from "../components/Model";

import { message } from "antd";
import "./css/Weather.css";

const KEY_WEATHERBIT = process.env.REACT_APP_KEY_WEATHERBIT;

const Weather = () => {
	const [loading, setLoading] = useState(false);
	const [weatherData, setWeatherData] = useState({
		city: "Empty",
		temperature: "0",
		icon: "https://www.weatherbit.io/static/img/icons/c01d.png"
	});

	useEffect(() => {
		if (localStorage.getItem("listWeather") != null) {
			let oldData = JSON.parse(localStorage.getItem("listWeather"));
			setWeatherData(oldData[oldData.length - 1]);
		}
	}, []);

	const dataLocal = (data) => {
		if (localStorage.getItem("listWeather") == null) {
			let weather = [data];
			localStorage.setItem("listWeather", JSON.stringify(weather));
		} else {
			let weather = JSON.parse(localStorage.getItem("listWeather"));
			weather.length > 10 ? weather.shift() : weather.push(data);
			localStorage.setItem("listWeather", JSON.stringify(weather));
		}
		return;
	};

	const searchCity = async (city) => {
		setLoading(true);
		let response = await fetch(
			`https://api.weatherbit.io/v2.0/current?city=${city}&key=${KEY_WEATHERBIT}`
		);

		if (response.status === 200) {
			let { data } = await response.json();
			let weatherObj = {
				city: data[0].city_name,
				temperature: Math.round(data[0].temp),
				icon: `https://www.weatherbit.io/static/img/icons/${data[0].weather.icon}.png`
			};
			setWeatherData(weatherObj);
			dataLocal(weatherObj);

			setLoading(false);
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
