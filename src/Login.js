import React, { useState, useEffect } from "react";
import "./Login.css";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import FormInput from "./components/FormInput";
import { TurnedIn } from "@material-ui/icons";

function Start() {
	const params = useLocation();
	let navigate = useNavigate();

	const [state, setState] = useState({
		email: "",
		name: "",
		password: "",
		login: true
	});

	useEffect(() => {
        load();
    }, []);

	function load(){
		setState({...state, login: params.state.login});
	}

	function handleContinue() {
		var email = state.email, name = state.name, password = state.password;
		if (state.email !== "" && state.name !== "" && state.password !== "") {
			//ISHAAN PUSH DATA from here
			
			navigate("/maps", {
				state: {
					email,
					name,
					password
				},
			});
		}
		else {
			var error = "Field(s) are blank.";
			setState({
				...state,
				"error": error
			});
		}
	}

	const inputs = [
		{
			id: 1,
			name: "name",
			type: "text",
			placeholder: "Name",
			label: "Name",
			required: true,
			errorMessage: "Please enter a valid name."
		},
		{
			id: 2,
			name: "username",
			type: "text",
			placeholder: "Username",
			label: "Username",
			required: true,
			errorMessage: "Please enter a valid username."
		},
		{
			id: 3,
			name: "password",
			type: "text",
			placeholder: "Password",
			label: "Password",
			required: true,
			errorMessage: "Please enter a valid password."
		},
	];

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const onChange = (e) => {
		setState({...state, [e.target.name]: e.target.value });
	};

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<h1>{state.login ? "Login" : "Sign Up"}</h1>
				{state.login ? (inputs.slice(1).map((input) => (
					<FormInput
						key={input.id}
						{...input}
						value={state[input.name]}
						onChange={onChange}
					/>
				))) :
				(inputs.map((input) => (
					<FormInput
						key={input.id}
						{...input}
						value={state[input.name]}
						onChange={onChange}
					/>
				)))}
				<p style= {{
					color: "red",
				}}>{state.error}</p>
				<button className="button" type="button" onClick={handleContinue}>Continue</button>
			</form>
		</div>

	);
}

export default Start;