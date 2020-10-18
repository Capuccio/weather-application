import React, { useEffect } from "react";
import Facebook from "./Facebook";

import "./css/SocialLogin.css";

const SocialLogin = (props) => {
	useEffect(() => {
		console.log(JSON.parse(sessionStorage.getItem("fbssls_1797775070371875")));
	}, []);

	const responseFacebook = (response) => {
		console.log(response);
	};

	return (
		<div className="social">
			<Facebook responseFacebook={responseFacebook} />
		</div>
	);
};

export default SocialLogin;
