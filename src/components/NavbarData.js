import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <AiIcons.AiFillDashboard style={{fontSize:'25px'}}/>,
        cName: 'nav-text'
    },
    {
        title: 'User Profile',
        path: '/userprofile',
        icon: <IoIcons.IoIosPeople style={{fontSize:'25px'}}/>,
        cName: 'nav-text'
    },
    {
        title: 'Form',
        path: '/form',
        icon: <IoIcons.IoIosPaper style={{fontSize:'25px'}}/>,
        cName: 'nav-text'
    },
    {
        title: 'Map',
        path: '/map',
        icon: <IoIcons.IoIosMap style={{fontSize:'25px'}}/>,
        cName: 'nav-text'
    },
   
]