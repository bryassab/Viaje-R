import React from 'react'
import * as FiIcons from 'react-icons/fi';

 const Sidebard = [
    {
        title: 'Solicitudes',
        path: '/Solicitudes',
        icon: <FiIcons.FiLayers />,
        cName: 'nav-text'


    },
    {
        title: 'Nueva Solicitud',
        path: '/NSolicitud',
        icon: <FiIcons.FiUserPlus />,
        cName: 'nav-text'

    },
    {
        title: 'Aprobar Solicitud',
        path: '/ASolicitud',
        icon: <FiIcons.FiCheckSquare />,
        cName: 'nav-text'

    }
    

]

export default Sidebard

