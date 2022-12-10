import { FormControl, Box, Button, TextField } from "@mui/material"
import { useRef, useState, useEffect } from "react"
import axios from 'axios';

const RegisterForm = props => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef(null)
    const nameRef = useRef(null)
    const passwordRef = useRef(null)
    
    useEffect (() => {
        console.log("renderer")
    }, [ email, name, password ])

    const handleSubmit = e => {
        e.preventDefault()
        console.log({ email, name, password })
        console.log({
            emailRef: emailRef.current.value,
            nameRef: nameRef.current.value,
            passwordRef: passwordRef.current.value,
        })
        axios.post('http://localhost:8080/accounts/signup', {
            email: emailRef.current.value,
            name: nameRef.current.value,
            password: passwordRef.current.value,
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
                }}>
                <TextField
                    className="email-field"
                    value={email}
                    inputRef={emailRef}
                    onChange={e => setEmail(e.target.value)}
                    label="Email"
                    type="string"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    className="name-field"
                    value={name}
                    inputRef={nameRef}
                    onChange={e => setName(e.target.value)}
                    label="Name"
                    type="string"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    className="password-field"
                    value={password}
                    inputRef={passwordRef}
                    onChange={e => setPassword(e.target.value)}
                    label="Password"
                    type="string"
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

export default RegisterForm