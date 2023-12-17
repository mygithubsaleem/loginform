import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import loginStyle from "../loginStyles/loginForm.module.css";

const LoginFooter = () => {
	return (
		<>
			<div>
				<Row className={loginStyle.login_footer}>
					<div className="col-md-6">
						{" "}
						<Col>column-1</Col>
					</div>
					<div className="col-md-6">
						{" "}
						<Col>column-2</Col>
					</div>
				</Row>
			</div>
		</>
	);
};
export default LoginFooter;
