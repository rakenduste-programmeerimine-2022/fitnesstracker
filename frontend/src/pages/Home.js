import React, { useState } from "react";
import { Box, Typography, Button } from '@mui/material';
import '../Home.css';

const Home = () => {

    return (
        <Box>
            <Typography align="center" variant="h2">Fitness Tracker</Typography>
            <Button variant="contained" href="" disabled>
                Log Out
            </Button>

            <Box className="menu_container">
                <Box className="menu">
                    <Button className="menu_button button1" variant="contained" href="http://localhost:3000/bodytrack">
                        Track Body
                    </Button>
                    <Button className="menu_button button2" variant="contained" href="http://localhost:3000/calorietrack">
                        Track Calories
                    </Button>
                </Box>
                <Box className="menu">
                    <Button className="menu_button button3" variant="contained" href="http://localhost:3000/statsgraph">
                        Visualize Changes
                    </Button>
                    <Button className="menu_button button4" variant="contained" href="http://localhost:3000/comparison">
                        Change Comparison
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Home