import React, { useState } from "react";
import { Box, Typography, Button, AppBar, Toolbar, IconButton, TextField} from '@mui/material';
import { Link } from "react-router-dom"
import PageTitle from '../components/PageTitle';
import RegisterForm from "../components/RegisterForm"

const Register = () => {

    return (
        <Box>
            <PageTitle />
            
            <Link to="/">
                <Button variant="contained">
                    Back
                </Button>
            </Link>

            <Box className="full-form">
                <RegisterForm />
            </Box>
        </Box>
    )
}

export default Register