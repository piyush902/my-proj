import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './NavbarData'
import './Navbar.css';
import { IconContext } from 'react-icons'



function Navbar() {
    const [sidebar, setsidebar] = useState(false);

    const showSidebar = () => setsidebar(!sidebar);
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbar">
         <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} className="cross_icon" style={{color:'#000'}}/>
            
             
         </Link>
         <div className="nav_heading">
         {/* {SidebarData.map((item, index) => {
                    return(   
                    <h3 key={index} style={{position:'absolute', top:'14px', fontSize:'25px'}}>{item.title}</h3>
                    // <h3  style={{position:'absolute', top:'18px', fontSize:'27px'}}>DashBoard</h3>
                    )
                })} */}
         </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return(
                        <li key={index} className={item.cName}>
                             {/* <h3 key={index[0]} style={{position:'absolute', top:'14px', left:'250px', fontSize:'25px'}}>{item.title}</h3> */}
                             {/* <h3 style={{position:'absolute', top:'18px', left:'250px', fontSize:'27px'}}>DashBoard</h3> */}
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
