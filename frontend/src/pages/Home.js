import React, { useState } from "react";
import { Box, Typography, Button } from '@mui/material';
import '../Home.css';

const Home = () => {

    return (
        <Box>
            <Box className="title-box">
                <Typography className="title-text" align="center" variant="h2">Fitness Tracker</Typography>
            </Box>
            <Box className="button-bar">
                <Button className="logout" variant="contained" href="" disabled>
                    Log Out
                </Button>
            </Box>

            <Box className="menu-container">
                <Box className="menu">
                    <Button className="menu-button" variant="contained" href="http://localhost:3000/bodytrack">
                        Track Body
                    </Button>
                    <Button className="menu-button" variant="contained" href="http://localhost:3000/calorietrack">
                        Track Calories
                    </Button>
                </Box>
                <Box className="menu">
                    <Button className="menu-button" variant="contained" href="http://localhost:3000/statsgraph">
                        Visualize Changes
                    </Button>
                    <Button className="menu-button" variant="contained" href="http://localhost:3000/comparison">
                        Change Comparison
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Home