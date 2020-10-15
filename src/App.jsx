import React, { useState } from "react";
import { Button, DatePicker, message, Alert } from "antd";

function App() {
	const [date, setDate] = useState(null);

	const handleChange = value => {
		message.info(
			`Selected Date msg: ${value ? value.format("YYYY-MM-DD") : "None"}`
		);
		setDate(value);
	};

	return (
		<div className="App">
			<DatePicker onChange={handleChange} />
			<Alert
				message="Selected date:"
				description={date ? date.format("YYYY-MM-DD") : "None"}
			/>
			<Button type="primary">Button</Button>
		</div>
	);
}

export default App;
