import React, { useState } from "react";

import "./css/App.css";

import LoginForm from "../components/LoginForm";

function App() {
	const rememberMe = () => console.log("Changed");

	return (
		<div className="card">
			<div className="card__column">
				<LoginForm rememberMe={rememberMe} />
				<div className="card__separator">
					or
				</div>
			</div>
			<div className="card__column">Imagen</div>
		</div>
	);
}

export default App;
