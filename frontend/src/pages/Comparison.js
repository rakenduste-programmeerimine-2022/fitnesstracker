import React, { useState } from "react";
import { Box, Typography, Button, AppBar, Toolbar, IconButton } from '@mui/material';
import "../styles/ComparisonStyles.css"
import Comparable from "../components/Comparable";

const Comparison = () => {

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
                        Fitness Tracker | Statistics Comparison
                    </Typography>
                    <Button color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Button variant="contained" href="http://localhost:3000/">
                Back
            </Button>

            <Box className="comparables">
                <Box>
                    <Typography>First comparable</Typography>
                    <Comparable />
                </Box>
                <Box>
                    <Typography>Second comparable</Typography>
                    <Comparable /> {/* Currently displaying same. When user can view only own stats then will add date selection */}
                </Box>    
            </Box>

        </Box>
    )
}

export default Comparison