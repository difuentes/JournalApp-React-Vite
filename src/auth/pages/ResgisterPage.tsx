import { AuthLayout } from "../layout/AuthLayout"
import { Grid, TextField, Button, Typography ,Link} from '@mui/material';
import {Link as RouterDom } from 'react-router-dom';
export const ResgisterPage = () => {
    return (
       <AuthLayout title="Crear Cuenta">
            <form>
                <Grid container>
                    <Grid item xs={12} sx={{mt:2}}>
                        <TextField 
                            label="Nombre completo" 
                            type="text" 
                            placeholder="Nombre"
                            fullWidth
                        />
                    </Grid>

                    <Grid item  xs={12} sx={{mt:2}}>
                        <TextField 
                            label="Contraseña" 
                            type="password" 
                            fullWidth
                        />
                    </Grid>
                    <Grid item  xs={12} sx={{mt:2}}>
                        <TextField 
                            label="Contraseña" 
                            type="password" 
                            fullWidth
                           
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{mb:2,mt:1}}>
                        <Grid item xs={12} >
                            <Button sx={{color:'white'}} variant='contained' fullWidth>
                                Crear Cuenta
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid 
                        container 
                        direction="row" 
                        justifyContent="end"
                    >
                        <Typography sx={{mr:1,color:'primary.main',fontWeight:'bold'}}>¿Ya tienes cuenta?</Typography>
                        <Link component={RouterDom} color='inherit' to="/auth/login" >
                            Ingresar
                        </Link>
                        
                    </Grid>

                </Grid>
            </form>
       </AuthLayout>
    )
}
