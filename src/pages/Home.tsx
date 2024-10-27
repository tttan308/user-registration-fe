import React from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useAuthRedirect from '../hooks/useAuthRedirect';

const Home: React.FC = () => {
    useAuthRedirect();

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

    return (
        <div className="p-4 max-w-lg mx-auto text-center bg-white shadow-md rounded-md">
            <Typography variant="h4" className="text-3xl font-bold mb-4">Chào mừng đến Trang Chủ</Typography>
            <Button variant="contained" color="secondary" onClick={handleLogout} className="mt-4">
                Đăng Xuất
            </Button>
        </div>
    );
};

export default Home;
