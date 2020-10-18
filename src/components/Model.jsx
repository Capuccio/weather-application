import React from "react";

import "./css/Model.css";

const Model = ({ weatherData }) => {
	return (
		<div className="model">
			<div className="model__city">{weatherData.city}</div>
			<div className="model__temperature">
				{weatherData.temperature}°C
				<img
					src={weatherData.icon}
					alt="Weather icon"
					className="model__temperature__icon"
				/>
			</div>
		</div>
	);
};

export default Model;
