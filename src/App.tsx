import {useState} from 'react'
import {CardComponent} from "./components/CardComponent";
import {BottomFooter} from "./components/BottomFooter";
import {MainComponent} from "./components/MainComponent";
import CssBaseline from "@mui/material/CssBaseline";
import {BottomCenter} from "./components/BottomCenter";
import {ProjectComponent} from "./components/ProjectComponent";
import {ThemeProvider, createTheme, GlobalStyles} from "@mui/material";

const theme = createTheme({
    palette: {
        background: {
            default: "#020C1B"
        }
    },
    typography: {
        "fontFamily": `Poppins, Regular`,
    }
});


function App() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <MainComponent/>
            <BottomCenter/>
            <ProjectComponent/>
            <BottomFooter/>
        </ThemeProvider>

    )
}

export default App
