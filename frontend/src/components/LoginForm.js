import { FormControl, Box, Button, TextField } from "@mui/material"
import { useRef, useState, useEffect } from "react"
import axios from 'axios';

const LoginForm = props => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    
    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:8080/accounts/login', {
            email: emailRef.current.value,
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
                    className="password-field"
                    value={password}
                    inputRef={passwordRef}
                    onChange={e => setPassword(e.target.value)}
                    label="Password"
                    type="password"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Box className="save-button">
                    <Button variant="contained" type="submit">Login</Button>
                </Box>
            </FormControl>
        </form>
    )
}

export default LoginForm