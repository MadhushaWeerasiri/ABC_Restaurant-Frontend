import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';



const logoStyle = {
    width: '100px',
    height: 'auto',
    cursor: 'pointer',
};

function AppAppBar() {
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        const offset = 128;
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset;
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth',
            });
            setOpen(false);
        }
    };

    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
                    mt: 2,
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        variant="regular"
                        sx={() => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexShrink: 0,
                            borderRadius: '999px',
                            bgcolor: 'rgba(254, 158, 13, 1)',
                            maxHeight: 40,
                            border: '1px solid',
                            borderColor: 'divider',
                        })}
                    >
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                ml: '-18px',
                                px: 0,
                            }}
                        >
                            <a href='#'>
                                <img
                                    src={
                                        '/assets/logo.png'
                                    }
                                    style={logoStyle}
                                    alt="logo of sitemark"
                                />
                            </a>
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <MenuItem
                                    onClick={() => scrollToSection('home')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="white" fontWeight='bold'>
                                        Home
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection('about')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="white" fontWeight='bold'>
                                        About Us
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection('commitment')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="white" fontWeight='bold'>
                                        Commitment
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection('products')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="white" fontWeight='bold'>
                                        Menu
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection('facilities')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="white" fontWeight='bold'>
                                        Facilities
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection('location')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="white" fontWeight='bold'>
                                        Locations
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection('contact')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="white" fontWeight='bold'>
                                        Contact
                                    </Typography>
                                </MenuItem>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                gap: 0.5,
                                alignItems: 'center',
                            }}
                        >
                            <Button
                                color="primary"
                                variant="text"
                                size="small"
                                component="a"
                                onClick={() => navigate('/login')}
                                target="_blank"
                                style={{ color: 'white' }}
                            >
                                LOG IN
                            </Button>
                            <Button
                                color="primary"
                                variant="contained"
                                size="small"
                                component="a"
                                onClick={() => navigate('/register')}
                                target="_blank"
                                style={{ color: '#fe9e0d', background: 'white' }}
                            >
                                REGISTER
                            </Button>
                        </Box>
                        <Box sx={{ display: { sm: '', md: 'none' } }}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{ minWidth: '30px', p: '4px' }}
                            >
                                <MenuIcon />
                            </Button>
                            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                                <Box
                                    sx={{
                                        minWidth: '60dvw',
                                        p: 2,
                                        backgroundColor: 'rgb(254, 158, 13)',
                                        flexGrow: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'end',
                                            flexGrow: 1,
                                        }}
                                    >
                                    </Box>
                                    <MenuItem onClick={() => scrollToSection('home')}>
                                        <Typography color='white' fontWeight='bold'>
                                            Home
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('about')}>
                                        <Typography color='white' fontWeight='bold'>
                                            About
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('commitment')}>
                                        <Typography color='white' fontWeight='bold'>
                                            Commitment
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('products')}>
                                        <Typography color='white' fontWeight='bold'>
                                            Menu
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('facilities')}>
                                        <Typography color='white' fontWeight='bold'>
                                            Facilities
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('location')}>
                                        <Typography color='white' fontWeight='bold'>
                                            Loactions
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('contact')}>
                                        <Typography color='white' fontWeight='bold'>
                                            Contact
                                        </Typography>
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem>
                                        <Button
                                            variant="contained"
                                            component="a"
                                            onClick={() => navigate('/register')}
                                            target="_blank"
                                            sx={{
                                                width: '100%',
                                                color: '#fe9e0d',
                                                background: 'white',
                                                '&:hover': {
                                                    bgcolor: '#e6e6e6',
                                                }
                                            }}
                                        >
                                            REGISTER
                                        </Button>
                                    </MenuItem>
                                    <MenuItem>
                                        <Button
                                            variant="outlined"
                                            component="a"
                                            onClick={() => navigate('/login')}
                                            target="_blank"
                                            sx={{
                                                width: '100%',
                                                color: 'white',
                                                border: '2px solid white',
                                            '&:hover': {
                                                    border: '#e6e6e6',
                                                }
                                            }}
                                        >
                                            LOG IN
                                        </Button>
                                    </MenuItem>
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default AppAppBar;