import React, { useState, useEffect } from "react"
import { Box, Modal, Typography } from '@mui/material';
import { Line } from "react-chartjs-2"
import axios from "axios"

function TestChart() {
    // const [isLoading, setLoading] = useState(true)
    // const [firstChart, setFirstChart] = useState(null)

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
            // const dataObject = dataArray.find()
            // const resMap = new Map(Object.entries(dataObject))
            // const userData = {
            //     bicep: dataArray.bicep
            // }
            // setFirstChart(resMap)
            // setLoading(false)

            const chartData = {
                labels: dataArray.map((data) => data.date),
                datasets: [
                    {
                    label: 'User Data',
                    data: dataArray.map((data) => data.bicep),
                    backgroundColor: [
                        "#ffffff"
                    ],
                    borderColor: "#165ccc",
                    borderWidth: 2,
                    }
                ]
            };
            return <Line data={chartData} />;
        });
    }

    // if (isLoading) {
    //     return (
    //         <Typography>Loading...</Typography>
    //     )
    // }
}

export default TestChart