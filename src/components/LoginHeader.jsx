import React from "react";
import loginimage from "../images/logo2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import loginStyle from "../loginStyles/loginForm.module.css";

const LoginHeader = () => {
	return (
		<>
			<div className={loginStyle.login_header}>
				<Nav>
					<ul>
						<li>
							<img src={loginimage} width={60} height={60} />
						</li>
						<li>
							<h1>
								{" "}
								<span style={{ color: "blue", paddingLeft: 40 }}>
									SHIFT Solution & Traning Institue
								</span>
							</h1>
						</li>{" "}
					</ul>
				</Nav>
			</div>
		</>
	);
};
export default LoginHeader;
