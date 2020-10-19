import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Facebook from "./Facebook";

import "./css/SocialLogin.css";

const SocialLogin = (props) => {
	var history = useHistory();

	useEffect(() => {
		let session = JSON.parse(sessionStorage.getItem("fbssls_1797775070371875"));

		if (session != null) {
			history.push("/weather");
		}
	}, [history]);

	const responseFacebook = (response) => {
		if('accessToken' in response) {
			history.push("/weather");
		}
	};

	return (
		<div className="social">
			<Facebook responseFacebook={responseFacebook} />
		</div>
	);
};

export default SocialLogin;
