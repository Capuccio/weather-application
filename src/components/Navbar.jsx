import React from "react";

import "./css/Navbar.css";
import Logo from "../assets/clouds.svg";

const Navbar = (props) => {

	return (
		<div className="navbar">
			<div className="navbar__logo">
				<img src={Logo} alt="Logo Company"/>
			</div>

			<div className="navbar__options">
				<div className="navbar__item">Home</div>
				<div className="navbar__item">News</div>
				<div className="navbar__item">Live cameras</div>
				<div className="navbar__item">Photos</div>
				<div className="navbar__item">Contact</div>
			</div>
		</div>
	);
};

export default Navbar;
