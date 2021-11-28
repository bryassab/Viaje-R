import React from 'react'
import { InputLabel, MenuItem, OutlinedInput, Select } from '@material-ui/core';
import './Pages.css';
import { TextField } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, grey } from '@material-ui/core/colors';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';


const theme = createTheme({
    palette: {
        primary: {
            main: blue['400'],
        },
        secondary: {
            main: grey['50'],
        },

    },
});
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

}));



const NSolicitudes = () => {
    const classes = useStyles();

    return (
        <>
            <div>
                <Paper style={{ width: "700px", height: "500px" }} elevation={3} className="paper">
                    <h1 className="titulo" >Nueva solicitud </h1>
                    <form>
                        <div className="text1">
                            <ThemeProvider theme={theme} >
                                <TextField
                                    id="outlined-primary"
                                    label="Documento"
                                    variant="outlined"
                                    color="primary"
                                />
                                <TextField
                                    id="outlined-primary"
                                    label="Nombre Completo"
                                    variant="outlined"
                                    color="primary"
                                />

                            </ThemeProvider>
                        </div>
                        <div className="text2">
                            <div>
                                <TextField
                                    id="date"
                                    label="Fecha"
                                    type="date"
                                    defaultValue="2022-01-01"
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="outlined-adornment-amount">Presupuesto Solicitado</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    labelWidth={200}
                                />
                            </div>
                        </div>
                        <div className="text3">
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">Division</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="Division"
                                >
                                    <MenuItem value={10}>BPM</MenuItem>
                                    <MenuItem value={20}>INI</MenuItem>
                                    <MenuItem value={30}>UM</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <dic className="enviar">
                            <Button variant="contained" color="primary">
                                Enviar
                            </Button>
                        </dic>
                    </form>
                </Paper>
            </div >
        </ >
    )
}

export default NSolicitudes






