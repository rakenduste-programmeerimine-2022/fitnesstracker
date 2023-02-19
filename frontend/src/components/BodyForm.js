import { FormControl, Box, Button, TextField } from "@mui/material"
import { useRef, useState, useEffect } from "react"
import axios from 'axios';

const BodyForm = props => {
    const [weight, setWeight] = useState("")
    const [bicep, setBicep] = useState("")
    const [forearm, setForearm] = useState("")
    const [torso, setTorso] = useState("")
    const [waist, setWaist] = useState("")
    const [quad, setQuad] = useState("")
    const [calve, setCalve] = useState("")
    const [date, setDate] = useState("")
    /* const [image, setImage] = useState("") */

    const weightRef = useRef(null)
    const bicepRef = useRef(null)
    const forearmRef = useRef(null)
    const torsoRef = useRef(null)
    const waistRef = useRef(null)
    const quadRef = useRef(null)
    const calveRef = useRef(null)
    const dateRef = useRef(null)
    /* const imageRef =useRef(null) */
    
    useEffect (() => {
        console.log("renderer")
    }, [ weight, bicep, forearm, torso, waist, quad, calve, date ])

    const handleSubmit = e => {
        e.preventDefault()
        console.log({ weight, bicep, forearm, torso, waist, quad, calve, date })
        console.log({
            weightRef: weightRef.current.value,
            bicepRef: bicepRef.current.value,
            forearmRef: forearmRef.current.value,
            torsoRef: torsoRef.current.value,
            waistRef: waistRef.current.value,
            quadRef: quadRef.current.value,
            calveRef: calveRef.current.value,
            dateRef: dateRef.current.value
            /* imageRef:  */
        })
        axios.post('http://localhost:8080/body/saveinfo', {
            weight: weightRef.current.value,
            bicep: bicepRef.current.value,
            forearm: forearmRef.current.value,
            torso: torsoRef.current.value,
            waist: waistRef.current.value,
            quad: quadRef.current.value,
            calve: calveRef.current.value,
            date: dateRef.current.value
            /* image:  */
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const [picture, setPicture] = useState(null);

    const handlePictureChange = (event) => {
        const file = event.target.files[0];
        
        if (!file) {
        return;
        }

        if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
            alert('Only JPG and PNG files are allowed.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
        setPicture(event.target.result);
        };
        reader.readAsDataURL(file);
        console.log(reader.readAsDataURL(file))
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box className="body-form">
                <Box className="section">
                    <Button
                        variant="outlined"
                        component="label"
                        className="picture-button"
                    >
                        Upload File
                        <input
                            type="file"
                            onChange={handlePictureChange}
                            accept="image/jpeg, image/png"
                            hidden
                        />
                    </Button>
                </Box>
                <Box className="displayPicture">
                    {picture && <img src={picture} style={{
                        width: 450,
                        height: 500,
                        objectFit: 'cover',
                    }} alt="Selected picture" />}
                </Box>
                <Box className="section">
                    <TextField
                        className="body-field"
                        value={weight}
                        inputRef={weightRef}
                        onChange={e => setWeight(e.target.value)}
                        label="Weight"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        className="body-field"
                        value={bicep}
                        inputRef={bicepRef}
                        onChange={e => setBicep(e.target.value)}
                        label="Bicep Circumference"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        className="body-field"
                        value={forearm}
                        inputRef={forearmRef}
                        onChange={e => setForearm(e.target.value)}
                        label="Forearm Circumference"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        className="body-field"
                        value={torso}
                        inputRef={torsoRef}
                        onChange={e => setTorso(e.target.value)}
                        label="Torso Circumference"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Box>
                <Box className="section">
                    <TextField
                        className="body-field"
                        value={waist}
                        inputRef={waistRef}
                        onChange={e => setWaist(e.target.value)}
                        label="Waist Circumference"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        className="body-field"
                        value={quad}
                        inputRef={quadRef}
                        onChange={e => setQuad(e.target.value)}
                        label="Quad Circumference"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        className="body-field"
                        value={calve}
                        inputRef={calveRef}
                        onChange={e => setCalve(e.target.value)}
                        label="Calve Circumference"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        className="body-field"
                        value={date}
                        inputRef={dateRef}
                        onChange={e => setDate(e.target.value)}
                        label="Date"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Box>
            </Box>
            <Box className="save-button">
                <Button variant="contained" type="submit">Save</Button>
            </Box>
        </form>
    )
}

export default BodyForm