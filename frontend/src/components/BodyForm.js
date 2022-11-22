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

    const weightRef = useRef(null)
    const bicepRef = useRef(null)
    const forearmRef = useRef(null)
    const torsoRef = useRef(null)
    const waistRef = useRef(null)
    const quadRef = useRef(null)
    const calveRef = useRef(null)
    
    useEffect (() => {
        console.log("renderer")
    }, [weight, bicep, forearm, torso, waist, quad, calve])

    const handleSubmit = e => {
        e.preventDefault()
        console.log({ weight, bicep, forearm, torso, waist, quad, calve })
        console.log({
            weightRef: weightRef.current.value,
            bicepRef: bicepRef.current.value,
            forearmRef: forearmRef.current.value,
            torsoRef: torsoRef.current.value,
            waistRef: waistRef.current.value,
            quadRef: quadRef.current.value,
            calveRef: calveRef.current.value
        })
        /* axios({
            method: 'post',
            url: 'http://localhost:8080/body/saveinfo',
            data: {
              weight: {weightRef},
              bicep: {bicepRef},
              forearm: {forearmRef},
              torso: {torsoRef},
              waist: {waistRef},
              quad: {quadRef},
              calve: {calveRef}
            }
          }); */
          axios.post('http://localhost:8080/body/saveinfo', {
            weight: {weight},
            bicep: {bicep},
            forearm: {forearm},
            torso: {torso},
            waist: {waist},
            quad: {quad},
            calve: {calve}
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormControl
                sx={{
                    pt: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "16px"
                }}
            >
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
                <Box className="save-button">
                    <Button variant="contained" type="submit">Save</Button>
                </Box>
            </FormControl>
        </form>
    )
}

export default BodyForm