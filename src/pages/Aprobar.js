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

export default function Aprobar() {
    return (
        <div className="aprobar">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Documento</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Presupuesto Solicitado</TableCell>
                            <TableCell>Division</TableCell>
                            <TableCell>Telefono</TableCell>
                            <TableCell>Correo</TableCell>
                            <TableCell>Estado</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Tabla.map((Celda, index) => (
                            <TableRow key={Celda.Documento}>
                                <TableCell>{Celda.Documento}</TableCell>
                                <TableCell>{Celda.Nombre}</TableCell>
                                <TableCell>{Celda.Fecha}</TableCell>
                                <TableCell>{Celda.PresupuestoS}</TableCell>
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
