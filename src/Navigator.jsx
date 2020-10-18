import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./pages/App";
import Weather from "./pages/Weather";

const Navigator = (props) => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<App />
				</Route>
				<Route exact path="/weather">
					<Weather />
				</Route>
			</Switch>
		</Router>
	);
};

export default Navigator;
