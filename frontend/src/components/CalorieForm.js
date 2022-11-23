import { FormControl, Box, Button, TextField } from "@mui/material"
import { useRef, useState, useEffect } from "react"
import axios from 'axios';

const CalorieForm = props => {
    const [calories, setCalories] = useState("")
    const [fats, setFats] = useState("")
    const [carbs, setCarbs] = useState("")
    const [protein, setProtein] = useState("")
    const [date, setDate] = useState("")

    const caloriesRef = useRef(null)
    const fatsRef = useRef(null)
    const carbsRef = useRef(null)
    const proteinRef = useRef(null)
    const dateRef = useRef(null)

    useEffect (() => {
        console.log("renderer")
    }, [calories, fats, carbs, protein, date])

    const handleSubmit = e => {
        e.preventDefault(
            console.log({ calories, fats, carbs, protein, date })
        )
        console.log ({
           caloriesRef: caloriesRef.current.value,
           fatsRef: fatsRef.current.value,
           carbsRef: carbsRef.current.value,
           proteinRef: proteinRef.current.value,
           dateRef: dateRef.current.value 
        })
        axios.post('http://localhost:8080/blablablalblabla', {
        calories: caloriesRef.current.value,
        fats: fatsRef.current.value,
        carbs: carbsRef.current.value,
        protein: proteinRef.current.value,
        date: dateRef.current.value
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
                    value={calories}
                    inputRef={caloriesRef}
                    onChange={e => setCalories(e.target.value)}
                    label="Calories"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    className="body-field"
                    value={fats}
                    inputRef={fatsRef}
                    onChange={e => setFats(e.target.value)}
                    label="Fats"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    className="body-field"
                    value={carbs}
                    inputRef={carbsRef}
                    onChange={e => setCarbs(e.target.value)}
                    label="Carbonhydrates"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    className="body-field"
                    value={protein}
                    inputRef={proteinRef}
                    onChange={e => setProtein(e.target.value)}
                    label="Protein"
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
                <Box className="save-button">
                    <Button variant="contained" type="submit">Save</Button>
                </Box>
            </FormControl>
        </form>
    )
}

export default CalorieForm