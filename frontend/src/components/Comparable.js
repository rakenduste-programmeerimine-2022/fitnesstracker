import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from "react";
import axios from 'axios';

function Comparable() {
    
    const [isLoading, setLoading] = useState(true)
    const [firstComparable, setFirstComparable] = useState(null)
    const [secondComparable, setSecondComparable] = useState(null) // second comparable will be based on date selection

    const [dates, setDates] = useState(null)
    const [selectedDate, setSelectedDate] = useState("2022-11-22");

    useEffect(() => {
        get();
    }, []);
    
    const get = async () => {
        await axios
        .get(`http://localhost:8080/body/getinfo`, {
            responseType: 'json'
        })
        .then(function (response) {
            const dataArray = response.data
            const dataObject = dataArray.find(obj => obj.date === selectedDate)
            const resMap = new Map(Object.entries(dataObject))
            setFirstComparable(resMap)
            setDates(response.data.map(entry => entry.date))
            setLoading(false)
        });
    }
        
    const handleChange = event => {
        setSelectedDate(event.target.value);
        get();
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
                    {date}   {/* shows wrong date compared to the one on statistics comparison */}
                    </option>
                ))}
                </select>
            </label>
            </form>
        </Box>
    )
}

export default Comparable