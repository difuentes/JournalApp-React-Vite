import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { OrangeTheme } from "./OrangeTheme"


export const AppTheme = ({children}) => {
    return (
       <ThemeProvider theme={OrangeTheme}>
           <CssBaseline/>
           {children}
       </ThemeProvider>
       
    )
}

