import React, { useState } from "react";
import { Box, Typography, Button, AppBar, Toolbar, IconButton, TextField } from '@mui/material';
import "../BodyTrackingStyles.css";
import BodyForm from "../components/BodyForm"

const BodyTracking = () => {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        

    }

    return (
        <Box>
            <Box sx={{ flexGrow: 1 }} className="mui-page-title">
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        href="http://localhost:3000/"
                    >
                        {/* add icon component here */}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Fitness Tracker | Body Tracking
                    </Typography>
                    <Button color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <Button variant="contained" href="http://localhost:3000/">
                Back
            </Button>

            <Box className="full-form">
                <Box>
                    <Button className="picture-button" variant="outlined">Uploadable Picture</Button>
                </Box>
                {/* <form className="body-form" onSubmit={handleSubmit}>
                    
                    <TextField
                        className="body-field"
                        name="weight"
                        value={inputs.weight || ""}
                        onChange={handleChange} 
                        label="Weight"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        className="body-field"
                        name="bicep"
                        value={inputs.bicep || ""}
                        onChange={handleChange} 
                        label="Bicep Circumference"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        className="body-field"
                        name="forearm"
                        value={inputs.forearm || ""}
                        onChange={handleChange}
                        label="Forearm Circumference"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        className="body-field"
                        name="torso"
                        value={inputs.torso || ""} 
                        onChange={handleChange}
                        label="Torso Circumference"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        className="body-field"
                        name="waist"
                        value={inputs.waist || ""}
                        onChange={handleChange}
                        label="Waist Circumference"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        className="body-field"
                        name="quad"
                        value={inputs.quad || ""}
                        onChange={handleChange}
                        label="Quad Circumference"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        className="body-field"
                        name="calve"
                        value={inputs.calve || ""}
                        onChange={handleChange}
                        label="Calve Circumference"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Box className="save-button">
                        <Button variant="contained" type="submit">Save</Button>
                    </Box>
                </form> */}
                <BodyForm />
            </Box>
        </Box>
    )
}

export default BodyTracking