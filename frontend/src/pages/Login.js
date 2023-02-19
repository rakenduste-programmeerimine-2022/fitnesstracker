import React, { useState } from "react";
import { Box, Button, Typography } from '@mui/material';
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = () => {

    return (
        <Box>
            <PageTitle />

            <Link to="/">
                <Button variant="contained">
                    Back
                </Button>
            </Link>
            
            <Box className="full-form">
                <LoginForm />
            </Box>
            {/* <Box className="save-button">
                <Link to="/register">
                    <Button variant="contained">
                        Register
                    </Button>
                </Link>
            </Box> */}
        </Box>
    )
}

export default Login