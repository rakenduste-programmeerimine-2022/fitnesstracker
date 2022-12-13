import React, { useState, useEffect } from "react"
import { Box, Typography } from '@mui/material';
import { Line } from "react-chartjs-2"
import axios from "axios"
import Chart from 'chart.js/auto'

function BodyChart() {
    const [isLoading, setLoading] = useState(true)
    const [weightChartData, setWeightChartData] = useState(null)
    const [bicepChartData, setBicepChartData] = useState(null)
    const [forearmChartData, setForearmChartData] = useState(null)
    const [torsoChartData, setTorsoChartData] = useState(null)
    const [waistChartData, setWaistChartData] = useState(null)
    const [quadChartData, setQuadChartData] = useState(null)
    const [calveChartData, setCalveChartData] = useState(null)

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

            const dataWeight = dataArray.map((data) => data.weight)
            const dataBicep = dataArray.map((data) => data.bicep)
            const dataForearm = dataArray.map((data) => data.forearm)
            const dataTorso = dataArray.map((data) => data.torso)
            const dataWaist = dataArray.map((data) => data.waist)
            const dataQuad = dataArray.map((data) => data.quad)
            const dataCalve = dataArray.map((data) => data.calve)

            const weightChart = {
                labels: dataDate,
                datasets: [
                    {
                    label: 'Weight Data',
                    data: dataWeight,
                    backgroundColor: [
                        "#ffffff"
                    ],
                    borderColor: "#165ccc",
                    borderWidth: 2,
                    }
                ]
            };

            const bicepChart = {
                labels: dataDate,
                datasets: [
                    {
                    label: 'Bicep Data',
                    data: dataBicep,
                    backgroundColor: [
                        "#ffffff"
                    ],
                    borderColor: "#165ccc",
                    borderWidth: 2,
                    }
                ]
            };

            const forearmChart = {
                labels: dataDate,
                datasets: [
                    {
                    label: 'Forearm Data',
                    data: dataForearm,
                    backgroundColor: [
                        "#ffffff"
                    ],
                    borderColor: "#165ccc",
                    borderWidth: 2,
                    }
                ]
            };

            const torsoChart = {
                labels: dataDate,
                datasets: [
                    {
                    label: 'Torso Data',
                    data: dataTorso,
                    backgroundColor: [
                        "#ffffff"
                    ],
                    borderColor: "#165ccc",
                    borderWidth: 2,
                    }
                ]
            };

            const waistChart = {
                labels: dataDate,
                datasets: [
                    {
                    label: 'Waist Data',
                    data: dataWaist,
                    backgroundColor: [
                        "#ffffff"
                    ],
                    borderColor: "#165ccc",
                    borderWidth: 2,
                    }
                ]
            };

            const quadChart = {
                labels: dataDate,
                datasets: [
                    {
                    label: 'Quad Data',
                    data: dataQuad,
                    backgroundColor: [
                        "#ffffff"
                    ],
                    borderColor: "#165ccc",
                    borderWidth: 2,
                    }
                ]
            };

            const calveChart = {
                labels: dataDate,
                datasets: [
                    {
                    label: 'Calve Data',
                    data: dataCalve,
                    backgroundColor: [
                        "#ffffff"
                    ],
                    borderColor: "#165ccc",
                    borderWidth: 2,
                    }
                ]
            };

            setLoading(false)
            setWeightChartData(weightChart)
            setBicepChartData(bicepChart)
            setForearmChartData(forearmChart)
            setTorsoChartData(torsoChart)
            setWaistChartData(waistChart)
            setQuadChartData(quadChart)
            setCalveChartData(calveChart)
        });
    }

    if (isLoading) {
        return (
            <Typography>Loading...</Typography>
        )
    }

    return (
        <>
            <Box>
                <Line data={weightChartData} />
            </Box>
            <Box>
                <Line data={bicepChartData} />
            </Box>
            <Box>
                <Line data={forearmChartData} />
            </Box>
            <Box>
                <Line data={torsoChartData} />
            </Box>
            <Box>
                <Line data={waistChartData} />
            </Box>
            <Box>
                <Line data={quadChartData} />
            </Box>
            <Box>
                <Line data={calveChartData} />
            </Box>

        </>
    )
}

export default BodyChart