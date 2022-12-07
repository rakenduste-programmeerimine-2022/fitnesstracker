import { Box, Modal, Typography } from '@mui/material';
import React, { useState, useEffect } from "react";
import axios from 'axios';

function Comparable() {
    
    const [isLoading, setLoading] = useState(true)
    const [firstComparable, setFirstComparable] = useState(null)
    const [secondComparable, setSecondComparable] = useState(null) // second comparable will be based on date selection

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
            setLoading(false)
        });
    }
    
    if (isLoading) {
        return (
            <Typography>Loading...</Typography>
        )
    }
    return (
        <Box>
            <Typography>
                Weight: {firstComparable.get('weight')}
            </Typography>
            <Typography>
                Bicep: {firstComparable.get('bicep')}
            </Typography>
            <Typography>
                Forearm: {firstComparable.get('forearm')}
            </Typography>
            <Typography>
                Torso: {firstComparable.get('torso')}
            </Typography>
            <Typography>
                Waist: {firstComparable.get('waist')}
            </Typography>
            <Typography>
                Quad: {firstComparable.get('quad')}
            </Typography>
            <Typography>
                Calves: {firstComparable.get('calve')}
            </Typography>
            <Typography>
                Date: {firstComparable.get('date')}
            </Typography>
        </Box>
    )
}

export default Comparable