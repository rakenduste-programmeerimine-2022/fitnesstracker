import { Box } from '@mui/material';
import React, { useState, useEffect } from "react";
import axios from 'axios';



function Comparable() {
    
    // prints the response 5 times to console
    // dont know how to visualize it
    axios
    .get(`http://localhost:8080/body/getinfo`)
    .then(function (response) {
        console.log(response.data);
    });

    return (
        <Box>

        </Box>
    )
}

export default Comparable