import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const { isLoggedIn, logout } = useAuth();

    return (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="h4">Welcome to Our App</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
                This is the Home page.
            </Typography>

            {isLoggedIn ? (
                <Box sx={{ mt: 3 }}>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                        You are logged in.
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => logout()}
                    >
                        Logout
                    </Button>
                </Box>
            ) : (
                <Box sx={{ mt: 3 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => navigate('/login')}
                        sx={{ mr: 2 }}
                    >
                        Login
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => navigate('/register')}
                    >
                        Register
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default Home;
