import {Link as RouterDom } from 'react-router-dom';
import {Grid, TextField, Typography,Button,Link} from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
    return ( 
       <AuthLayout title="login">
            <form>
                <Grid container>
                    <Grid item xs={12} sx={{mt:2}}>
                        <TextField 
                            label="Correo" 
                            type="email" 
                            placeholder="correo@gmail.com"
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
                        <Grid item xs={12} sm={6}>
                            <Button sx={{color:'white'}} variant='contained' fullWidth>
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button  variant='contained' fullWidth>
                                <Google sx={{color:'white'}}/>
                                <Typography sx={{color:'white',ml:1}}>Google</Typography> 
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid 
                        container 
                        direction="row" 
                        justifyContent="end"
                    >
                        <Link component={RouterDom} color='inherit' to="/auth/register" >
                            Crear Cuenta
                        </Link>
                        
                    </Grid>

                </Grid>
            </form>
       </AuthLayout>
            
    )
}
