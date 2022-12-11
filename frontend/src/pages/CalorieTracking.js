import React, { useState } from "react";
import { Box, Typography, Button, AppBar, Toolbar, IconButton, TextField} from '@mui/material';
import CalorieForm from "../components/CalorieForm"
import { Link } from "react-router-dom"
import PageTitle from '../components/PageTitle';

const CalorieTracking = () => {

    return (
        <Box>
            <PageTitle />
            
            <Link to="/">
                <Button variant="contained">
                    Back
                </Button>
            </Link>

            <Box className="full-form">
                <CalorieForm />
            </Box>
        </Box>
    )
}

export default CalorieTracking