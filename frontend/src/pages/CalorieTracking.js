import React, { useState } from "react";
import { Box, Typography, Button, AppBar, Toolbar, IconButton, TextField} from '@mui/material';
import CalorieForm from "../components/CalorieForm"

const CalorieTracking = () => {

    return (
        <Box>
            <Box sx={{ flexGrow: 1 }} className="mui-page-title">
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        href="http://localhost:3000/"
                    >
                        {/* add icon component here */}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Fitness Tracker | Calorie Tracking
                    </Typography>
                    <Button color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            
            <Button variant="contained" href="http://localhost:3000/">
                Back
            </Button>

            <Box className="full-form">
                <CalorieForm />
            </Box>
        </Box>
    )
}

export default CalorieTracking