import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Header from "../Pages/Shared/Header";

const Main = () => {
    return (
        <Box>
            <Container>
                <Header />
                <Outlet />
                <Footer />
            </Container>
        </Box>
    );
};

export default Main;
