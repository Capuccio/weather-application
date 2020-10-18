import React, { useEffect } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FacebookFilled } from "@ant-design/icons";

import "./css/Facebook.css";

const Facebook = (props) => {
	useEffect(() => {
		console.log(JSON.parse(sessionStorage.getItem("fbssls_1797775070371875")));
	}, []);

	const responseFacebook = (response) => {
		console.log(response);
	};

	return (
		<FacebookLogin
			appId="1797775070371875"
			autoLoad={false}
			fields="name, email, picture"
			language="es_ES"
			callback={responseFacebook}
			render={(renderProps) => (
				<div className="social__group">
					<FacebookFilled className="button__icon" />
					<button
						className="button button--facebook"
						onClick={renderProps.onClick}
					>
						LOGIN WITH FACEBOOK
					</button>
				</div>
			)}
		/>
	);
};

export default Facebook;
