import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Login: React.FC = () => {
    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 3 }}>
                Login
            </Typography>
            <form>
                <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    required
                />
                <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
                    Login
                </Button>
            </form>
        </Box>
    );
};

export default Login;
