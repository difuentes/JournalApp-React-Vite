import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"

export const NoteView = () => {
    return (
        <Grid container direction="row" justifyContent="space-between" sx={{mb:1}}>
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>31 Mayo </Typography>
            </Grid>
            <Grid item>
                <Button variant="outlined" >
                    <SaveOutlined sx={{fontSize:30,mr:1}}/>Guardar
                </Button>

            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese Título"
                    label="Título"
                    sx={{mb:1,mt:2}}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿que sucedio hoy ?"
                    minRows={5}
                />
                
            </Grid>
            <ImageGallery/>
        </Grid>
    )
}
