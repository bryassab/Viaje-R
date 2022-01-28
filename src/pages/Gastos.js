import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'

const Tabla = [
    {
        Documento: '1234',
        Nombre: '354634',
        Fecha: 'brayan',
        PresupuestoS: '12234',
        Division: 'skjdhf',
        Telefono: 'aprovado',
        Correo: 'aprovado',
        Estado: 'aprovado'
    },
    {
        Documento: '13579',
        Nombre: '354634',
        Fecha: 'brayan',
        PresupuestoS: '12234',
        Division: 'skjdhf',
        Telefono: 'aprovado',
        Correo: 'aprovado',
        Estado: 'aprovado'
    },
    {
        Documento: '246809',
        Nombre: '354634',
        Fecha: 'brayan',
        PresupuestoS: '12234',
        Division: 'skjdhf',
        Telefono: 'aprovado',
        Correo: 'aprovado',
        Estado: 'aprovado'
    }
];
export default function Gastos() {
    return (
        <div className="gastos">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Descripcion</TableCell>
                            <TableCell>Proveedor</TableCell>
                            <TableCell>Alimentacion</TableCell>
                            <TableCell>Transportes</TableCell>
                            <TableCell>Hotel</TableCell>
                            <TableCell>Otros</TableCell>
                            <TableCell>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Tabla.map((Celda, index) => (
                            <TableRow key={Celda.Documento}>
                                <TableCell>{Celda.Fecha}</TableCell>
                                <TableCell>{Celda.Nombre}</TableCell>
                                <TableCell>{Celda.Descripcion}</TableCell>
                                <TableCell>{Celda.Proveedor}</TableCell>
                                <TableCell>{Celda.Division}</TableCell>
                                <TableCell>{Celda.Telefono}</TableCell>
                                <TableCell>{Celda.Correo}</TableCell>
                                <TableCell>{Celda.Estado}</TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}
