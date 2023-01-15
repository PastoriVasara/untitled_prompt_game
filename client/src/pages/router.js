import * as React from "react";
import { Routes,Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../data/theme";
import MainLayout from "../layouts/MainLayout";
import Home from "./home/Home";


function Router() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MainLayout>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                </Routes>
            </MainLayout>
        </ThemeProvider >
    )
}
export default Router;