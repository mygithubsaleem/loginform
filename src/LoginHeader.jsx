import React from "react";
import loginimage from "./images/logo2.png"

import loginStyles from "./loginForm.module.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Navbar } from "react-bootstrap";

const LoginHeader = (prosp) => {
	return (
		<div>
			<>
				
				<Navbar>
				<img  src={loginimage} />
				 SHIFT Solution
				</Navbar>
			</>
		</div>
	);
};
export default LoginHeader;
