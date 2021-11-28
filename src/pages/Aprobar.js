import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'

const Tabla = [
    {
        Identificador: '1234',
        Fecha: '354634',
        Nombre: 'brayan',
        PresupuestoAS: '12234',
        Responsable: 'skjdhf',
        Estado: 'aprovado'
    },
    {
        Identificador: '13579',
        Fecha: '354634',
        Nombre: 'brayan',
        PresupuestoAS: '12234',
        Responsable: 'skjdhf',
        Estado: 'aprovado'
    },
    {
        Identificador: '246809',
        Fecha: '354634',
        Nombre: 'brayan',
        PresupuestoAS: '12234',
        Responsable: 'skjdhf',
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
                            <TableCell>Identificador</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Presupuesto Solicitado</TableCell>
                            <TableCell>Responsable</TableCell>
                            <TableCell>Estado</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Tabla.map((Celda, index) => (
                            <TableRow key={Celda.Identificador}>
                                <TableCell>{Celda.Identificador}</TableCell>
                                <TableCell>{Celda.Fecha}</TableCell>
                                <TableCell>{Celda.Nombre}</TableCell>
                                <TableCell>{Celda.PresupuestoAS}</TableCell>
                                <TableCell>{Celda.Responsable}</TableCell>
                                <TableCell>{Celda.Estado}</TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>




        </div>
    )
}
