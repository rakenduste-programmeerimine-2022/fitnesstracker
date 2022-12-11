import React, { useState } from "react";
import { Box, Typography, Button, AppBar, Toolbar, IconButton, TextField } from '@mui/material';
import "../styles/BodyTrackingStyles.css";
import BodyForm from "../components/BodyForm"
import { Link } from "react-router-dom"
import PageTitle from '../components/PageTitle';

const BodyTracking = () => {

    return (
        <Box>
            <PageTitle />

            <Link to="/">
                <Button variant="contained">
                    Back
                </Button>
            </Link>

            <Box className="full-form">
                <BodyForm />
            </Box>
        </Box>
    )
}

export default BodyTracking