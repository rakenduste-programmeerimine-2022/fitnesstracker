import React, { useState } from "react";
import { Box, Typography, Button, AppBar, Toolbar, IconButton } from '@mui/material';
import { Link } from "react-router-dom"
import PageTitle from '../components/PageTitle';
import BodyChart from '../components/BodyChart'

const StatsGraph = () => {

    return (
        <Box>
            <PageTitle />

            <Link to="/">
                <Button variant="contained">
                    Back
                </Button>
            </Link>
            
            <Box style={{ width: 700 }}>
                <BodyChart />
            </Box>
        </Box>
    )
}

export default StatsGraph