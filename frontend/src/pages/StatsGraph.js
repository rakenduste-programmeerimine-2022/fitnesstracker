import React, { useState } from "react";
import { Box, Typography, Button, AppBar, Toolbar, IconButton } from '@mui/material';
import { Link } from "react-router-dom"
import PageTitle from '../components/PageTitle';

const StatsGraph = () => {

    return (
        <Box>
            <PageTitle />

            <Link to="/">
                <Button variant="contained">
                    Back
                </Button>
            </Link>
        </Box>
    )
}

export default StatsGraph