import React from "react";
import { Input } from "antd";

const SearchCity = ({ searchCity, loading }) => {
	let styleDiv = {
		width: "70%",
		margin: "4% auto"
	};

	let searchStyle = {
		borderRadius: "250px",
	};

	return (
		<div style={styleDiv}>
			<Input.Search
				placeholder="Find your location..."
				size="large"
				loading={loading}
				onSearch={searchCity}
				style={searchStyle}
			/>
		</div>
	);
};

export default SearchCity;
