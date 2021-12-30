import React, { Fragment, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, FloatingLabel, Form } from 'react-bootstrap'
import Stack from 'react-bootstrap/Stack'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Pages.css';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Button from 'react-bootstrap/Button'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 165,
    },
}));



export default function NSolicitudes() {
    const classes = useStyles();
    const [date, setDate] = useState()
    const [aprob, setAprob] = useState({
        documento: '',
        nombre: '',
        fecha: '',
        presuepuesto: '',
        division: '',
        correo: ''

    })
    const handleInputChange = (event) => {
        //console.log(event.target.value)

        setAprob({
            ...aprob,
            [event.target.name]: event.target.value
        })



    }
    const envio = (event) => {

        setAprob({ ...aprob, "numero": date });

        event.preventDefault();
        console.log(aprob.documento + ' ' + aprob.nombre + ' ' + aprob.fecha + ' ' + aprob.presuepuesto + ' ' + aprob.division + ' ' + date + ' ' + aprob.correo)
        console.log(aprob)
        event.target.reset()
    }
    return (
        <Fragment>
            <form className="row" onSubmit={envio}>

                <div className="formulario" >
                    <Card border="primary" style={{ width: '32rem' }} className=" mx-auto">
                        <Card className="text-center" >
                            <Stack className="mb-4" as="h5" >
                                Nueva Solicitud
                            </Stack>

                            <Stack direction="horizontal" gap={5} className="mb-4">
                                <FloatingLabel controlId="floatingTextarea" label="Documento"  >

                                    <Form.Control placeholder="Documento" name="documento" type="text" onChange={handleInputChange} />

                                </FloatingLabel>

                                <FloatingLabel controlId="floatingTextarea" label="Nombre Completo" style={{ width: '19rem' }} >
                                    <Form.Control placeholder="Nombre completo" name="nombre" onChange={handleInputChange} />
                                </FloatingLabel>
                            </Stack>

                            <Stack direction="horizontal" gap={5} className="mb-4" >
                                <TextField
                                    id="date"
                                    label="Fecha"
                                    type="date"
                                    defaultValue="2022-01-01"
                                    name="fecha"
                                    className={classes.textField}
                                    onChange={handleInputChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <FloatingLabel controlId="floatingTextarea" label="Presupuesto Solicitado" style={{ width: '15.4rem' }} >
                                    <Form.Control placeholder="Presupuesto Solicitado" type="number" name="presupuesto" onChange={handleInputChange} />
                                </FloatingLabel>



                            </Stack>
                            <Stack direction="horizontal" gap={5} className="mb-4" >
                                <Form.Select aria-label="Default select example" style={{ width: '11.2rem' }} name="division" onChange={handleInputChange}>

                                    <option>División</option>
                                    <option value="BPN">BPN</option>
                                    <option value="INI">INI</option>
                                    <option value="UM">UM</option>
                                </Form.Select>

                                <PhoneInput style={{ width: '15rem', height: '2rem' }}
                                    placeholder="Celular"
                                    name="numero"
                                    value={date}
                                    onChange={setDate}

                                />


                            </Stack>

                            <Stack direction="horizontal"  >
                                <FloatingLabel controlId="floatingTextarea" label="Correo Electronico" style={{ width: '29rem' }} className="mb-4" >
                                    <Form.Control placeholder="Correo Electronico" name="correo" onChange={handleInputChange} />
                                </FloatingLabel>

                            </Stack>
                            <Stack className=" mx-auto" >
                                <Button as="input" type="submit" value="Enviar" className=" mx-auto" onChange={handleInputChange} />
                            </Stack>

                        </Card >
                    </Card>
                </div >
            </form>
        </Fragment>
    )
}







