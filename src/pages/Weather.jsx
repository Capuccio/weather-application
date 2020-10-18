import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SearchCity from "../components/SearchCity";
import Model from '../components/Model';

import "./css/Weather.css";

const Weather = () => {
	const [userIp, setUserIp] = useState(null)

	useEffect(() => {
		
	}, [])

	const searchCity = (city) => {
		console.log(city)
	};

	return (
		<div className="componentWeather">
			<Navbar />
			<div className="weatherImageBg" alt="New York City Background" />
			<SearchCity searchCity={searchCity} />
			<Model />
		</div>
	);
};

export default Weather;
