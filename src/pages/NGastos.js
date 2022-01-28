import React, { Fragment, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, FloatingLabel, Stack, Form } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import Button from 'react-bootstrap/Button'



export default function NGastos() {

    const [num, setNum] = useState({
        fecha: '',
        nombre: '',
        proveedor: '',
        transporte: '',
        hotel: '',
        alimentacion: '',
        otros: '',
        total: 0,
        descripcion: ''
    });
    const handleInput = (event) => {
        setNum({
            ...num,
            [event.target.name]: event.target.value
        })
        console.log(num)

    };



    const Rgasto = (event) => {
        var total = ((+num.transporte) + (+num.hotel) + (+num.alimentacion) + (+num.otros))
        setNum({ ...num, total })
        var envio = num;
        envio.total = total;
        event.preventDefault();
        event.target.reset();
        console.log(num)
    }

    return (
        <Fragment>
            <form onSubmit={Rgasto}>
                <div>
                    <Card border="danger" style={{ width: '40rem' }} className=" mx-auto">
                        <Card className="text-center" >
                            <Stack className="mb-4" as="h5" >
                                Registrar Gasto
                            </Stack>
                            <Stack direction="horizontal" className="mb-4" style={{ justifyContent: "space-around" }}>
                                <TextField
                                    id="date"
                                    label="Fecha"
                                    type="date"
                                    defaultValue="2022-01-01"
                                    name="fecha"

                                    onChange={handleInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}

                                />
                                <FloatingLabel controlId="floatingTextarea" label="Nombre Completo" style={{ width: '18rem' }}>
                                    <Form.Control placeholder="Nombre Completo" name="nombre" onChange={handleInput} />
                                </FloatingLabel>

                            </Stack>
                            <Stack direction="horizontal" className="mb-4" style={{ justifyContent: "space-around" }}>
                                <FloatingLabel controlId="floatingTextarea" label="Proveedor" style={{ width: '30rem' }}>
                                    <Form.Control placeholder="Proveedor" name="proveedor" onChange={handleInput} />
                                </FloatingLabel>

                            </Stack>
                            <Stack direction="horizontal" className="mb-4" style={{ justifyContent: "space-around" }}>
                                <FloatingLabel controlId="floatingTextarea" label="Transporte" style={{ width: '10rem' }} >
                                    <Form.Control placeholder="Transporte" type="number" name="transporte" onChange={handleInput} />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingTextarea" label="Hotel" style={{ width: '10rem' }} >
                                    <Form.Control placeholder="Hotel" type="number" name="hotel" onChange={handleInput} />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingTextarea" label="Alimentacion" style={{ width: '10rem' }} >
                                    <Form.Control placeholder="Alimentacion" type="number" name="alimentacion" onChange={handleInput} />
                                </FloatingLabel>

                            </Stack>
                            <Stack direction="horizontal" className="mb-4" style={{ justifyContent: "space-around" }}>

                                <FloatingLabel controlId="floatingTextarea" label="Otros Gastos" style={{ width: '15.4rem' }} >
                                    <Form.Control placeholder="Otros Gastos" type="number" name="otros" onChange={handleInput} />
                                </FloatingLabel>
                            </Stack>

                            <Stack direction="horizontal" className="mb-4" style={{ justifyContent: "space-around" }}>

                                <FloatingLabel controlId="floatingTextarea" label="Descripcion" style={{ width: '25rem' }}>
                                    <Form.Control as="textarea" rows={3} placeholder="Descripcion" name="descripcion" onChange={handleInput} />
                                </FloatingLabel>

                            </Stack>

                            <Stack className=" mx-auto" >
                                <Button as="input" type="submit" value="Enviar" className="mb-4" />
                            </Stack>
                        </Card>
                    </Card>
                </div>
            </form>

        </Fragment>

    )
}


