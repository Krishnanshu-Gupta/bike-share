import React from 'react';
import { Grid, Container, Typography, Box, Divider, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import "./Help.css";

const HelpPage = () => {
    var navigate = useNavigate();

    function handleSignup(){
		navigate("/login", {
            state: {
				login: false
			}}
		);
	}

    return (
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box m={3}>
              <Typography variant="h3" gutterBottom>Help and Support</Typography>
              <Button onClick={handleSignup} variant="contained" style={{
                    fontSize: "16px",
                    fontWeight: "normal",
                    lineHeight: "24px",
                    color: "black",
                    backgroundColor: "#7ed957",
                }}>Sign up</Button>
              <Divider />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box m={3}>
              <Typography variant="h5" gutterBottom>Frequently Asked Questions</Typography>
              // FAQ content here - coming soon
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box m={3}>
              <Typography variant="h5" gutterBottom>Contact Us</Typography>
              // Contact form here - coming soon
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }

  export default HelpPage;