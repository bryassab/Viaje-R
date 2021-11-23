import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';


function Navbar() {
    const [Sidebar, SetSidebar] =  useState(false)
    const showSidebar = () => {
        SetSidebar(!Sidebar)
     }
    return (
        <>
            <div className="Navbar">
                < Link to="#" className='menu-barra'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={Sidebar ? 'Nav-menu Active' : 'Nav-menu'}>
                <ul className='Nav-menu-items'>
                    <li className="Navbar-toggle">
                        <Link to="#" className='menu-barra'>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
