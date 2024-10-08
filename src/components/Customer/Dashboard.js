import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import BottomNav from "./BottomNav"
import AppBar from "./AppBar"
import Products from "./Menu/Products"
import { useNavigate } from "react-router-dom";


export default function Dashboard() {

    let userId = "";
    let navigate = useNavigate();

    useEffect(() => {
        const userId = sessionStorage.getItem('userId');
        const userRole = sessionStorage.getItem('userRole');
        if (!userId || userRole !== '3') {
            navigate('/login');
        }
    }, [navigate]);

    const imgStyle = {
        mt: '20px',
        borderRadius: '10px',
        height: '75vh',
        objectFit: 'cover',
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
            }}
        >
            <AppBar sx={{ display: 'fixed' }} />
            <Box
                sx={{
                    padding: "3% 7%"
                }}
            >
                <Typography variant="h3">
                    Welcome
                </Typography>
                <img src="/assets/dashboard.jpeg" alt="restaurant"
                    style={imgStyle}
                />
            </Box>
            <Products />
            <BottomNav />
        </Box>
    )
}