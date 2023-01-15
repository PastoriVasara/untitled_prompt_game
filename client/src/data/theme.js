const { createTheme } = require("@mui/material");

export const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#2C0E37'
                }
            }
        }
    },
    palette: {
        primary: { main: '#E619F8', white: '#FFFFFF', dark: '#30006D' },
        secondary: { main: '#00ACE2', white: '#FFFFFF', dark: '#30006D', contrastText: "#FFFFFF" },
        background: {
            //paper: '#30006D'
        }
    },
    typography: {
        fontFamily: ['Bowlby One SC, normal']
    },
})