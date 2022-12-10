import React, { useState } from "react";
import { Box, Typography, Button, AppBar, Toolbar, IconButton } from '@mui/material';
import { Link } from "react-router-dom"
import PageTitle from '../components/PageTitle';
import "../styles/ComparisonStyles.css"
import Comparable from "../components/Comparable";

const Comparison = () => {

    return (
        <Box>
            <PageTitle />
            
            <Link to="/">
                <Button variant="contained">
                    Back
                </Button>
            </Link>
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