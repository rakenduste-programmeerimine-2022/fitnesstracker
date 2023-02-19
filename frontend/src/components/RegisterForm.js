import { FormControl, Box, Button, TextField } from "@mui/material"
import { useRef, useState, useEffect } from "react"
import axios from 'axios';

const RegisterForm = props => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")

    const emailRef = useRef(null)
    const nameRef = useRef(null)
    const passwordRef = useRef(null)
    const rePasswordRef = useRef(null)
    

    const handleSubmit = e => {
        e.preventDefault()
        if (passwordRef.current.value === rePasswordRef.current.value){
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
        else {
            console.log("passwords do not match")
        }
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
                    type="email"
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
                    type="password"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    className="repassword-field"
                    value={rePassword}
                    inputRef={rePasswordRef}
                    onChange={e => setRePassword(e.target.value)}
                    label="Confirm Password"
                    type="password"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Box>
                    <Button variant="contained" type="submit">Register</Button>
                </Box>
            </FormControl>
        </form>
    )
}

export default RegisterForm