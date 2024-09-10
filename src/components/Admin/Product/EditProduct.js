import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Menu from "../Menu";
import { Box, FormControl, Typography, CircularProgress } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddUser() {

    const navigate = useNavigate();

    const location = useLocation();
    const { productId } = location.state;

    const [form, setForm] = useState({
        productName: "",
        productDescription: "",
        productImage: "",
        productPrice: "",
        productCategory: [],
        productStatus: "",
    });
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userId = sessionStorage.getItem('userId');
        const userRole = sessionStorage.getItem('userRole');
        if (!userId || userRole !== '1') {
            navigate('/login');
        } else {
            loadProduct();
            loadCategory();
        }
    }, [navigate]);

    const loadProduct = async () => {
        setLoading(true);
        try {
            const result = await Axios.get(`${process.env.REACT_APP_ENDPOINT}/api/product/${productId}`);
            setForm(result.data);
        } catch (error) {
            console.error("Error loading user data:", error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const loadCategory = async () => {
        setLoading(true);
        try {
            const result = await Axios.get(`${process.env.REACT_APP_ENDPOINT}/api/productCategory/allProducCategories`);
            setCategories(result.data);
        } catch (error) {
            console.error("Error loading user data:", error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleCategoriesChange = (event) => {
        const { value } = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            productCategory: typeof value === 'string' ? value.split(',') : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await Axios.put(`${process.env.REACT_APP_ENDPOINT}/api/product/${productId}`, form);
            navigate("/admin/products");
        } catch (error) {
            console.error(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const selectStyle = {
        color: 'white',
        '& .Mui-selected': {
            color: 'white',
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

    const textboxStyle = {
        input: {
            color: 'white',
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
        mt: '30px',
        mb: 2,
        color: 'white',
        background: '#fe9e0d',
        ':hover': {
            bgcolor: ' #cb7a01',
            color: 'white',
        },
    };

    const fileUploadBtn = {
        width: '100%',
        height: '50px',
        mt: 1.5,
        mb: 1,
        color: 'white',
        background: '#262626',
        border: '2px solid #fe9e0d',
        ':hover': {
            bgcolor: '#262626',
            color: '#fe9e0d',
            border: '2px solid #181818',
        },
    };

    return (
        <Grid2
            sx={{
                minWidth: '800px',
            }}
        >
            <Menu />
            <Box
                component="main"
                sx={{
                    padding: '30px 40px',
                    marginLeft: '240px',
                }}
            >
                <Box>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: 'white',
                            color: '#fe9e0d',
                            borderRadius: '10px',
                            ':hover': {
                                bgcolor: ' #fe9e0d',
                                color: 'white',
                            },
                        }}
                        startIcon={<ArrowBackIosIcon />}
                        onClick={() => navigate("/admin/products")}
                    >
                        Back
                    </Button>
                    {loading ? (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '90vh',
                            }}
                        >
                            <CircularProgress
                                size={70}
                                thickness={4}
                                sx={{
                                    color: '#fe9e0d',
                                }}
                            />
                        </Box>
                    ) : (
                        <Container
                            component="main"
                            maxWidth="xs"
                        >
                            <Typography
                                component="h1"
                                variant="h5"
                                sx={{
                                    textAlign: 'center',
                                    mt: '30px',
                                    mb: '10px',
                                    fontWeight: 'bold',
                                    textDecoration: 'underline',
                                }}
                            >
                                Edit Product
                            </Typography>
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                noValidate
                                sx={{
                                    mt: 1,
                                }}
                            >
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    autoFocus
                                    id="productName"
                                    label="Product Name"
                                    name="productName"
                                    autoComplete="product-name"
                                    sx={textboxStyle}
                                    value={form.productName}
                                    onChange={handleChange}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="productDescription"
                                    label="Description"
                                    name="productDescription"
                                    autoComplete="product-description"
                                    sx={textboxStyle}
                                    value={form.productDescription}
                                    onChange={handleChange}
                                />
                                <Button
                                    component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    startIcon={<CloudUploadIcon />}
                                    sx={fileUploadBtn}
                                    disabled
                                >
                                    Upload Image
                                    <VisuallyHiddenInput type="file" accept="image/jpg, image/jpeg, image/png" style={{ display: 'none' }} />
                                </Button>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="productPrice"
                                    label="Price"
                                    name="productPrice"
                                    autoComplete="product-price"
                                    sx={textboxStyle}
                                    value={form.productPrice}
                                    onChange={handleChange}
                                />

                                <FormControl fullWidth margin="normal" required sx={textboxStyle}>
                                    <InputLabel id="selectCategory">Categories</InputLabel>
                                    <Select
                                        multiple
                                        fullWidth
                                        labelId="selectCategory"
                                        id="productCategory"
                                        label="Categories"
                                        sx={selectStyle}
                                        name="productCategory"
                                        value={form.productCategory}
                                        onChange={handleCategoriesChange}
                                        renderValue={(selected) => selected.map(categoryId => {
                                            const category = categories.find(f => f.categoryId === categoryId);
                                            return category ? category.categoryName : '';
                                        }).join(', ')}
                                    >
                                        {categories.map((category) => (
                                            <MenuItem key={category.categoryId} value={category.categoryId}>{category.categoryName}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>


                                <FormControl>
                                    <FormLabel id="productStatus" sx={{ color: 'white', mt: 2 }}>Status</FormLabel>
                                    <RadioGroup
                                        row
                                        required
                                        aria-labelledby="productStatus"
                                        name="productStatus"
                                        onChange={handleChange}
                                        value={form.productStatus}
                                    >
                                        <FormControlLabel value="Available" control={<Radio />} label="Available" />
                                        <FormControlLabel value="Unavailable" control={<Radio />} label="Unavailable" />

                                    </RadioGroup>
                                </FormControl>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={buttonStyle}
                                >
                                    Update
                                </Button>
                            </Box>
                        </Container>
                    )};
                </Box>
            </Box>
        </Grid2>
    );
}
