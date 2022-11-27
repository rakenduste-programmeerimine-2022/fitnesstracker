import { Box, Modal, Typography } from '@mui/material';
import React, { useState, useEffect } from "react";
import axios from 'axios';

function Comparable() {
    
    const [firstComparable, setFirstComparable] = useState("")
    const [secondComparable, setSecondComparable] = useState("")

    useEffect(() => {
        get();
    }, []);
    
    const get = async () => {
        await axios
        .get(`http://localhost:8080/body/getinfo`, {
            responseType: 'json'
        })
        .then(function (response) {
            const resMap = new Map()
            let lines = JSON.stringify(response.data[1]).replace("{", "").replace("}", "").replaceAll('"', "").split(',')
            for (let i = 0; i < lines.length; i++) {
                let splitting = lines[i].split(':')
                resMap.set(splitting[0], splitting[1]) 
            }
            setFirstComparable(resMap)  
        });
    }
    
    return (
        <Box>
            <Typography>
                Weight: {firstComparable.get('weight')}
                Bicep: {firstComparable.get('bicep')}
                Forearm: {firstComparable.get('forearm')}
                Torso: {firstComparable.get('torso')}
                Waist: {firstComparable.get('waist')}
                Quad: {firstComparable.get('quad')}
                Calves: {firstComparable.get('calve')}
                Date: {firstComparable.get('date')}
            </Typography>
        </Box>
    )
}

export default Comparable