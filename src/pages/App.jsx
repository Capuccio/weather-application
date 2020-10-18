import React, { useState } from "react";
import { message } from "antd";

import LoginForm from "../components/LoginForm";
import SocialLogin from "../components/SocialLogin";

import "./css/App.css";

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

	const submitData = () => {
		message.info(`User: ${form.username} \n Pass: ${form.password}`);
	};

	return (
		<div className="card__background">
			<div className="card">
				<div className="card__column">
					<LoginForm
						rememberMe={rememberMe}
						handleLoginForm={handleLoginForm}
						formData={form}
						submitData={submitData}
					/>
					<div className="card__separator">or</div>
					<SocialLogin />
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
