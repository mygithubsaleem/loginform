import "./App.css";
// import loginStyles from "./loginStyles/loginForm.module.css";
import React from "react";
import { useState } from "react";
import LoginHeader from "./components/LoginHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import LoginFooter from "./components/LoginFooter";

const Loginapp = () => {
	const [userArray, setUseArray] = useState([
		{ email: "amjad@gmail.com", pw: "amjad123" },
		{ email: "anwar@gmail.com", pw: "anwar123" },
	]);
	const [currentInput, setCurrentInpput] = useState({ email: "", pw: "" });
	const [togAction, setTogAction] = useState(true);
	const tog1 = () => {
		setTogAction(!togAction);
	};

	const checkUser = () => {
		if (currentInput.email === "" || currentInput.pw === "") {
			return window.alert("PLEASE FILL THE EMPTY FIELD FIRST.");
		}
		const findUser = userArray.find((element) => {
			return element.email === currentInput.email && element.pw === currentInput.pw;
		});
		setCurrentInpput({ email: "", pw: "" });

		if (findUser) {
			alert("User found........");
		} else {
			alert("User not found......");
		}
	};
	return (
		<>
			<Form>
				{" "}
				<LoginHeader />
				<div style={{ height: 50 }}></div>
				<label>Enter email:</label>
				<input
					className="m-4"
					type="text"
					value={currentInput.email}
					onChange={(e) => {
						setCurrentInpput({ ...currentInput, email: e.target.value });
					}}
				/>
				<label className="m-4">Enter password:</label>
				<input
					className="m-4"
					type={togAction ? "password" : "text"}
					value={currentInput.pw}
					onChange={(e) => {
						setCurrentInpput({ ...currentInput, pw: e.target.value });
					}}
				/>
				<Button
					onClick={() => {
						tog1();
					}}
				>
					{togAction === true ? (
						<FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>
					) : (
						<FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
					)}
				</Button>
				<div style={{ height: 50 }}></div>
				<Button
					onClick={() => {
						checkUser();
					}}
				>
					Submit
				</Button>
				<div style={{ height: 190 }}></div>
				<LoginFooter />
				<h2>{JSON.stringify(userArray)}</h2>
			</Form>
		</>
	);
};

export default Loginapp;
