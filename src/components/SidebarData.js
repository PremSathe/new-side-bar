import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import PermMediaIcon from '@mui/icons-material/PermMedia';
export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"

    },

    {
        title: "Mailbox",
        icon: <MailIcon />,
        link: "/Mailbox"
    },

    {
        title: "Analytics",
        icon: <AnalyticsIcon />,
        link: "/Analytics"
    },
    {
        title: "DashBoaard",
        icon: <DashboardIcon />,
        link: "/DashBoaard"
    },
 
    {
        title: "Friends",
        icon: <GroupIcon />,
        link: "/Friends"
    },
    {
        title: "Images",
        icon: <PermMediaIcon />,
        link: "/Images"
    }
    
    
];



