import React, { useState } from "react";

import "./css/App.css";

import LoginForm from "../components/LoginForm";

function App() {
	return (
		<div className="card">
			<div className="card__column">
				<LoginForm />
			</div>
			<div className="card__column">Dos</div>
		</div>
	);
}

export default App;
