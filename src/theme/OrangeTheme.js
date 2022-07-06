import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";
import { red } from "@mui/material/colors";

export const OrangeTheme = createTheme({
    palette:{
        primary:{
            main:'#F5B041'
        },
        secondary:{
            main:'#9B59B6'
        },
        error:{
            main: red.A400
        }
    },
    
})