import React, { useState, useEffect } from "react"
import { Box, Typography } from '@mui/material';
import { Line } from "react-chartjs-2"
import axios from "axios"
import Chart from 'chart.js/auto'

function TestChart() {
    const [isLoading, setLoading] = useState(true)
    // const [firstChart, setFirstChart] = useState(null)
    const [newChartData, setChartData] = useState(null)

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
            const dataDate = dataArray.map((data) => data.date)
            const dataBicep = dataArray.map((data) => data.bicep)
            // const dataObject = dataArray.find()
            // const resMap = new Map(Object.entries(dataObject))
            // const userData = {
            //     bicep: dataArray.bicep
            // }
            // setFirstChart(resMap)

            const chartData = {
                labels: dataDate,
                datasets: [
                    {
                    label: 'User Data',
                    data: dataBicep,
                    backgroundColor: [
                        "#ffffff"
                    ],
                    borderColor: "#165ccc",
                    borderWidth: 2,
                    }
                ]
            };

            setLoading(false)
            setChartData(chartData)
            // return <Line data={chartData} />;
        });
    }

    if (isLoading) {
        return (
            <Typography>Loading...</Typography>
        )
    }

    return (
        <Box>
            <Line data={newChartData} />
        </Box>
    )
}

export default TestChart