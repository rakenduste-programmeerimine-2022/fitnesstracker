import React, { useState } from "react";
import { Box, Typography, Button, AppBar, Toolbar, IconButton } from '@mui/material';

const StatsGraph = () => {

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
                    >
                        {/* add icon component here */}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Fitness Tracker | Statistics Graph
                    </Typography>
                    <Button color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            
            <Button variant="contained" href="http://localhost:3000/">
                Back
            </Button>
        </Box>
    )
}

export default StatsGraph