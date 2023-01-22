import React, { useState, useEffect } from "react";
import "./Login.css";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import {fetchData , putData, queryData} from '../components/AWS_Functions';

function Start() {
	const params = useLocation();
	let navigate = useNavigate();

	const [state, setState] = useState({
		name: "",
		username: "",
		password: "",
		login: true
	});

	useEffect(() => {
        load();
    }, []);

	function load(){
		setState({...state, login: params.state.login});
	}


	async function addSignUpDatatoUserDB(username, name, password, bikes) {
		const userData = {
			'username': username,
			'name': name,
			'password': password,
			'bikes': bikes
		}
		await putData('users', userData)
	}

	async function handleContinue() {
		var name = state.name, username = state.username, password = state.password;
		if(!state.login && state.name !== "" && state.username !== "" && state.password !== "") {
			//signup
			addSignUpDatatoUserDB(username, name, password, '{}');
			navigate("/maps", {
				state: {
					name,
					username,
					password
				},
			});
		}
		if(state.login && state.username !== "" && state.password !== "") {
			//login
            const userData = {
                'username': username,
                'password': password
            }
            var db_pass = await queryData('users', userData);
            let passed = false;
            if (db_pass === password) {
                passed = true;
            }
            if (!passed) {
                var error = "Invalid username or password.";
                setState({
                    ...state,
                    "error": error
                });
            } else {
                navigate("/maps", {
                    state: {
                        name,
                        username,
                        password
                    },
                });
            }
		}
		else {
			var blank_error = "Field(s) are blank.";
			setState({
				...state,
				"error": blank_error
			});
		}
	}

	const signupinput = [
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

	const logininput = [
		{
			id: 1,
			name: "username",
			type: "text",
			placeholder: "Username",
			label: "Username",
			required: true,
			errorMessage: "Please enter a valid username."
		},
		{
			id: 2,
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
				{state.login ?
					<>
						<h1>Login</h1>
						{logininput.map((input) => (
							<FormInput
								key={input.id}
								{...input}
								value={state[input.name]}
								onChange={onChange}
							/>
						))}
					</>
				:
					<>
						<h1>Sign Up</h1>
						{signupinput.map((input) => (
							<FormInput
								key={input.id}
								{...input}
								value={state[input.name]}
								onChange={onChange}
							/>
						))}
					</>
				}
				<p style= {{
					color: "red",
				}}>{state.error}</p>
				<button className="button" type="button" onClick={handleContinue}>Continue</button>
			</form>
		</div>

	);
}

export default Start;