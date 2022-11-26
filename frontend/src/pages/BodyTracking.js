import React, { useState } from "react";
import { Box, Typography, Button, AppBar, Toolbar, IconButton, TextField } from '@mui/material';
import "../BodyTrackingStyles.css";
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
                <Box> {/* picture upload should be added into form */} 
                    <Button className="picture-button" variant="outlined">Uploadable Picture</Button>
                </Box>
                <BodyForm />
            </Box>
        </Box>
    )
}

export default BodyTracking