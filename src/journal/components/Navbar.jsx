import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Navbar = ({drawerWidth = 240}) => {
    return (
        <AppBar 
            position='fixed'
            sx={{
                width:{sm:`calc(100% - ${drawerWidth}px)`},
                ml:{sm:`${drawerWidth}px`}
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge="start"
                    sx={{mr:2,display:{sm:'none'}}}
                >
                    <MenuOutlined/>
                </IconButton>
                <Grid 
                    container direction="row" 
                    justifyContent="space-between"
                   
                >
                    <Typography sx={{color:'#FBFCFC'}} variant="h6" noWrap component="div">Diario de tareas </Typography>
                    <IconButton sx={{color:'white'}}>
                        <LogoutOutlined/>
                    </IconButton>

                </Grid>
            </Toolbar>
        </AppBar>
    )
}
