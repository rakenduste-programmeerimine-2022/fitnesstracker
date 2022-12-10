import React, { useState } from "react";
import { Box, Typography, Button, AppBar, Toolbar, IconButton } from '@mui/material';
import PageTitle from '../components/PageTitle';
import { Link } from "react-router-dom"
import '../styles/HomeStyles.css';

const Home = () => {

    return (
        <Box>
            {/* alternative page title
            <Box className="title-box">
                <Typography className="title-text" align="center" variant="h2">Fitness Tracker</Typography>
            </Box>
            <Box className="button-bar">
                <Button className="logout" variant="contained" href="" disabled>
                    Log Out
                </Button>
            </Box> */}

            <PageTitle />

            <Box className="menu-container">
                <Box className="menu">
                    <Link to="/bodytrack">
                        <Button className="menu-button" variant="contained">
                            Track Body
                        </Button>
                    </Link>
                    <Link to="/calorietrack">
                        <Button className="menu-button" variant="contained">
                            Track Calories
                        </Button>
                    </Link>
                </Box>
                <Box className="menu">
                    <Link to="/statsgraph">
                        <Button className="menu-button" variant="contained">
                            Statistics Graph
                        </Button>
                    </Link>
                    <Link to="/comparison">
                        <Button className="menu-button" variant="contained">
                            Statistics Comparison
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Home