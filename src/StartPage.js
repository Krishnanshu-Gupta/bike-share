import './StartPage.css';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';


function StartPage() {
	let navigate = useNavigate();

	function handleLogin(){
		navigate("/login", {
            state: {
				login: true
			}}
		);
	}

	function handleSignup(){
		navigate("/login", {
            state: {
				login: false
			}}
		);
	}

	function handleHelp(){
		navigate("/help")
	}

	return (
		<div className="Start">
			<AppBar className="toolbar" position="static">
				<Toolbar style={{ backgroundColor: "#7ed957" }}>
					<img src="logo.png" alt="Logo" style={{ height: '60px', width: '60px' }} />
					<Typography variant="h6" style={{ flexGrow: 1, marginLeft: '10px' }}>
						Bike Share
					</Typography>
					<Button color="inherit" onClick={handleLogin}>Login</Button>
					<Button color="inherit" onClick={handleSignup}>Sign Up</Button>
				</Toolbar>
			</AppBar>
			<img src="bike.jpeg" className='image-container' alt="logo" style={{ zIndex: "1" }}/>
			<div className='floating-box'>
				<div className='text-box'>Get in the driver’s seat and get paid</div>
				<div className='small-text-box'>Drive on the platform with the largest network of active riders.</div>
				<div className='signup-button' onClick={handleSignup}>
					<Button variant="contained" style={{
						fontSize: "16px",
						fontWeight: "normal",
						lineHeight: "24px",
						color: "black",
						backgroundColor: "#7ed957",
					}}>Sign up to bike</Button>
				</div>
				<div onClick={handleHelp}>
					<div className='more-info'>Learn more about renting and biking</div>
					<hr className="hr-thin-line" />
				</div>
			</div>

		</div>
    );
}



export default StartPage;
