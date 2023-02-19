import React, { useState } from "react";
import { Box, Typography, Button, AppBar, Toolbar, IconButton } from '@mui/material';
import PageTitle from '../components/PageTitle';
import { Link } from "react-router-dom"
import '../styles/HomeStyles.css';

const Home = () => {

    return (
        <Box>
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