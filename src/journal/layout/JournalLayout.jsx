import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';


const drawerWidth = 240;

export const JournalLayout = ({children}) => {
    return (
        <Box sx={{display:'flex'}}>
        {/*Navbar */}
        <Navbar drawerWidth={drawerWidth}/>
        {/*Sidebar */}
        <Sidebar drawerWidth={drawerWidth}/>
        {/*container */}
        <Box 
            component='main'
            sx={{flexGrow:1,p:3}}
        >
           <Toolbar/>

          
           {/*container */}
           {children}
        </Box>

        </Box>
    )
}
