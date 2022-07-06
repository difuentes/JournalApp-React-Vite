import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Grid, Typography } from '@mui/material'
import React from 'react'

export const NothingSelectedView = () => {
    return (
        <Grid 
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{minHeight:'calc(100vh - 120px)',backgroundColor:'primary.main',padding:4,borderRadius:2}}
        >

        <Grid item xs={12} >
            <DarkModeIcon sx={{color:'white',fontSize:100}}/>
        </Grid>
        <Grid>
            <Typography color="white" variant="h5">Selecciona o crea una entrada</Typography>
        </Grid>
       
    </Grid>
    )
}
