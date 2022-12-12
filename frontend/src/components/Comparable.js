import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from "react";
import axios from 'axios';

function Comparable() {
    
    const [isLoading, setLoading] = useState(true)
    const [firstComparable, setFirstComparable] = useState(null)

    const [dates, setDates] = useState(null)

    useEffect(() => {
        get("");
    }, []);
    
    const get = async (selectedDate) => {
        await axios
        .get(`http://localhost:8080/body/getinfo`, {
            responseType: 'json'
        })
        .then(function (response) {
            const dataArray = response.data
            var setDate = ""
            setDates(dataArray.map(entry => entry.date))

            if (selectedDate === "") {
                setDate = dataArray.map(entry => entry.date)[0]
            } else {
                setDate = selectedDate
            }

            const dataObject = dataArray.find(obj => obj.date === setDate)
            const resMap = new Map(Object.entries(dataObject))
            setFirstComparable(resMap)

            setLoading(false)
        });
    }
        
    const handleChange = event => {
        get(event.target.value);
    };
    
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

            <form>
            <label>
                Select a date:
                <select onChange={handleChange}>
                {dates.map(date => (
                    <option key={date} value={date}>
                    {date}   {/* shows wrong date compared to the one on statistics comparison - it is one step behind */}
                    </option>
                ))}
                </select>
            </label>
            </form>
        </Box>
    )
}

export default Comparable