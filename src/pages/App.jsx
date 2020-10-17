import React, { useState } from "react";

import "./css/App.css";

import LoginForm from "../components/LoginForm";

function App() {
	const [form, setForm] = useState({
		username: "",
		password: ""
	});

	const rememberMe = () => console.log("Changed");

	const handleLoginForm = (data) => {
		setForm({
			...form,
			[data.target.name]: data.target.value
		});
	};

	return (
		<div className="card__background">
			<div className="card">
				<div className="card__column">
					<LoginForm
						rememberMe={rememberMe}
						handleLoginForm={handleLoginForm}
						formData={form}
					/>
					<div className="card__separator">or</div>
				</div>
				<div className="card__column card__column--right">
					<img
						src="https://i.pinimg.com/originals/1c/83/a2/1c83a220629444d73482a2f988e0abef.png"
						alt="Login img"
						height="600"
						width="100%"
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
