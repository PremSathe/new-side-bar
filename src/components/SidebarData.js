import React from 'react'
import { IoIosHome } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { SiGoogleanalytics } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa6";
import { MdPermMedia } from "react-icons/md";

export const SidebarData = [
    {
        title: "Home",
        icon: <IoIosHome style={{fontSize: 22}} />,
        link: "/home"

    },

    {
        title: "Mailbox",
        icon: <IoIosMail style={{fontSize: 22}}/>,
        link: "/Mailbox"
    },

    {
        title: "Analytics",
        icon: <SiGoogleanalytics style={{fontSize: 22}}/>,
        link: "/Analytics"
    },
    {
        title: "DashBoaard",
        icon: <MdDashboard style={{fontSize: 22}}/>,
        link: "/DashBoaard"
    },
 
    {
        title: "Friends",
        icon: <FaLayerGroup style={{fontSize: 22}}/>,
        link: "/Friends"
    },
    {
        title: "Images",
        icon: <MdPermMedia style={{fontSize: 22}}/>,
        link: "/Images"
    }
    
    
];



