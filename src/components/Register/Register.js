import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Footer from '../Footer/Footer';

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (passwordsMatch) {
            // Handle form submission logic
            console.log({
                firstName: formData.firstName,
                lastName: formData.lastName,
                address: formData.address,
                email: formData.email,
                password: formData.password,
            });
            // Proceed with the registration process
        } else {
            console.error("Passwords do not match.");
        }
    };

    const textboxStyle = {
        input: {
            color: 'white'
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: "2px",
            borderColor: "#fe9e0d",
            "&.Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#fe9e0d",
                    borderWidth: "3px",
                },
            },
        },
        "& .MuiInputLabel-outlined": {
            color: "#ffffff",
            fontWeight: "bold",
            borderColor: "#fe9e0d",
        },
    };

    const buttonStyle = {
        mt: 3,
        mb: 2,
        color: 'white',
        background: '#fe9e0d',
        ':hover': {
            bgcolor: ' #cb7a01',
            color: 'white',
        },
    };

    React.useEffect(() => {
        setPasswordsMatch(formData.password === formData.confirmPassword);
    }, [formData.password, formData.confirmPassword]);

    return (
        <Box>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        variant: "filled",
                        mt: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        fill: '#262626',
                    }}
                >
                    <Box
                        sx={{
                            userSelect: 'none',
                        }}
                    >
                        <img
                            src='/assets/logo.png'
                            alt='ABC Restaurant logo'
                            style={{
                                width: '300px',
                            }}
                        />
                    </Box>
                    <Typography
                        component="h1"
                        variant="h5"
                        sx={{
                            mt: '50px',
                            userSelect: 'none',
                        }}
                    >
                        Register to ABC Restaurant
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                            mt: 1
                        }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            autoComplete="first-name"
                            autoFocus
                            sx={textboxStyle}
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                            sx={textboxStyle}
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="address"
                            label="Address"
                            name="address"
                            autoComplete="address"
                            sx={textboxStyle}
                            value={formData.address}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            sx={textboxStyle}
                            value={formData.email}
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
                            sx={textboxStyle}
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            id="confirmPassword"
                            sx={textboxStyle}
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            error={!passwordsMatch && formData.confirmPassword !== ''}
                            helperText={!passwordsMatch && formData.confirmPassword !== '' ? "Passwords don't match" : ''}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={buttonStyle}
                            disabled={!passwordsMatch}
                        >
                            Register
                        </Button>
                    </Box>
                    <Grid item sx={{ textAlign: 'center' }}>
                        <Typography sx={{ userSelect: 'none' }}>
                            {"Already have an account? "}
                            <Link
                                onClick={() => navigate('/login')}
                                variant="body2"
                                sx={{
                                    color: 'white',
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                }}
                            >
                                {"Log in"}
                            </Link>
                        </Typography>
                    </Grid>
                </Box>
            </Container>
            <Footer />
        </Box>
    );
}
