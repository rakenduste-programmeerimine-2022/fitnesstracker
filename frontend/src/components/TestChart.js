import React, { useState, useEffect } from "react"
import { Box, Modal, Typography } from '@mui/material';
import { Line } from "react-chartjs-2"
import axios from "axios"

function TestChart() {
    const [isLoading, setLoading] = useState(true)
    const [firstChart, setFirstChart] = useState(null)

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
            const dataObject = dataArray.find(obj => obj.date)
            // const resMap = new Map(Object.entries(dataObject))
            const userData = {
                bicep: dataObject.bicep
            }
            // setFirstChart(resMap)
            setLoading(false)

            const chartData = {
            labels: ["2020", "2021", "2022"],  // x-axis labels
            datasets: [
                {
                label: 'User Data',
                data: Object.entries(userData).map(([label, value]) => value),
                borderColor: 'rgba(75,192,192,1)',
                fill: false
                }
            ]
            };
            return <Line data={chartData} />;
        });
    }

    if (isLoading) {
        return (
            <Typography>Loading...</Typography>
        )
    }

    // return (
    //     <Box>
    //         <Line data={chartData} />
    //     </Box>
    // )

}

export default TestChart