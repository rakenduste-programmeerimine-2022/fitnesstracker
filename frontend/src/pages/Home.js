import React, { useState } from "react";
import { Box, Typography, Button, AppBar, Toolbar, IconButton } from '@mui/material';

import '../Home.css';

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

            <Box sx={{ flexGrow: 1 }} className="mui-page-title">
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/* add icon component here */}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Fitness Tracker
                    </Typography>
                    <Button color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
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
                        Statistics Graph
                    </Button>
                    <Button className="menu-button" variant="contained" href="http://localhost:3000/comparison">
                        Statistics Comparison
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Home