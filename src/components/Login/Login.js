import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { Box, Typography, CircularProgress, Stack, Alert } from "@mui/material";
import Container from '@mui/material/Container';
import Footer from '../Footer/Footer';
import Axios from 'axios';

export default function LogIn() {
    const navigate = useNavigate();
    const [enteredData, setEnteredData] = useState({
        email: "",
        password: "",
    });
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [alert, setAlert] = useState({ show: false, type: "", message: "" });

    useEffect(() => {
        if (userData) {
            checkUserData();
        }
    }, [userData]);

    const getUserDetails = async () => {
        setLoading(true);
        setError(null);
        setAlert({ show: false, type: "", message: "" });

        try {
            const result = await Axios.get(`${process.env.REACT_APP_ENDPOINT}/api/user/byEmail/${enteredData.email}`);
            if (result.data) {
                setUserData(result.data);
            } else {
                setAlert({ show: true, type: "error", message: "This email does not exist." });
            }
        } catch (error) {
            console.error("Error: ", error);
            setError("Failed to retrieve user details. Please try again.");
        } finally {
            setLoading(false);

        }
    }

    const checkUserData = () => {
        if (userData) {
            if (userData.email === enteredData.email && userData.password === enteredData.password) {
                sessionStorage.setItem('userId', userData.userId);
                sessionStorage.setItem('userRole', userData.role);
                if (userData.role === 1) {
                    navigate('/admin/dashboard');
                } else if (userData.role === 2) {
                    navigate('/staff/dashboard');
                } else {
                    navigate('/user/menu');
                }
            } else {
                setAlert({ show: true, type: "error", message: "Invalid Username or Password!" });
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEnteredData((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = enteredData;

        if (!email || !password) {
            setAlert({ show: true, type: "warning", message: "Please fill in all required fields." });
            return;
        }
        getUserDetails();
    };

    const textboxStyle = {
        input: {
            color: 'white'
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: "2px",
            borderColor: "#fe9e0d",
            "&.Mui-focused": {
                borderColor: "#fe9e0d",
                borderWidth: "3px",
            },
        },
        "& .MuiInputLabel-outlined": {
            color: "#ffffff",
            fontWeight: "bold",
        },
    };

    return (
        <Box component="div">
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            mt: '5%',
                            userSelect: 'none'
                        }}
                    >
                        <img src='/assets/logo.png' alt='ABC Restaurant logo' />
                    </Box>

                    <Typography
                        component="h1"
                        variant="h5"
                        sx={{
                            marginTop: '50px',
                            userSelect: 'none',
                        }}
                    >
                        Log in to ABC Restaurant
                    </Typography>
                    {alert.show && (
                        <Stack sx={{ width: '100%', mb: 2 }} spacing={2}>
                            <Alert severity={alert.type}>{alert.message}</Alert>
                        </Stack>
                    )}
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            sx={textboxStyle}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            sx={textboxStyle}
                            onChange={handleChange}
                        />
                        {loading ? (
                            <CircularProgress sx={{ mt: 3, mb: 2, color: '#fe9e0d', textAlign: 'center' }} />
                        ) : (
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    color: 'white',
                                    background: '#fe9e0d',
                                    ':hover': {
                                        bgcolor: ' #cb7a01',
                                        color: 'white',
                                    },
                                }}
                            >
                                Log in
                            </Button>
                        )}
                        {error && (
                            <Typography color="error" variant="body2">
                                {error}
                            </Typography>
                        )}
                        <Grid container>
                            <Grid item xs>
                                {/* <Link
                                    href="#"
                                    variant="body2"
                                    sx={{
                                        color: 'white',
                                        textDecoration: 'underline',
                                        fontWeight: 'bold',
                                        userSelect: 'none',
                                    }}
                                    
                                >
                                    Forgot password?
                                </Link> */}
                            </Grid>
                            <Grid item>
                                <Typography
                                    sx={{
                                        userSelect: 'none',
                                        fontSize: '13px',
                                    }}
                                >
                                    {"Don't have an account? "}
                                    <Link
                                        onClick={() => navigate('/register')}
                                        variant="body2"
                                        sx={{
                                            color: 'white',
                                            textDecoration: 'underline',
                                            cursor: 'pointer',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {"Register"}
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </Box>
    );
}
