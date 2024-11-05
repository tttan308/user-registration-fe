import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getUserProfile } from '../services/api';
import {
    Box,
    Card,
    CardContent,
    Typography,
    CircularProgress,
    Alert,
    Divider,
    IconButton,
    Button,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useNavigate } from 'react-router-dom';

interface UserProfile {
    id: string;
    email: string;
    createdAt: string;
}

const Profile: React.FC = () => {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { token } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getUserProfile();
                setProfile(data);
            } catch {
                setError('Failed to load profile');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [token]);

    if (loading) {
        return (
            <Box
                sx={{
                    background: "linear-gradient(135deg, #6e8efb, #a777e3)",
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <CircularProgress sx={{ color: 'white' }} />
            </Box>
        );
    }

    if (error) {
        return (
            <Box
                sx={{
                    background: "linear-gradient(135deg, #6e8efb, #a777e3)",
                    minHeight: "100vh",
                    p: 2
                }}
            >
                <Alert severity="error" sx={{ borderRadius: 2 }}>{error}</Alert>
            </Box>
        );
    }

    if (!profile) {
        return (
            <Box
                sx={{
                    background: "linear-gradient(135deg, #6e8efb, #a777e3)",
                    minHeight: "100vh",
                    p: 2
                }}
            >
                <Alert severity="info" sx={{ borderRadius: 2 }}>No profile data found</Alert>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                background: "linear-gradient(135deg, #6e8efb, #a777e3)",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                p: 3
            }}
        >
            <IconButton
                onClick={() => navigate('/')}
                sx={{
                    color: 'white',
                    alignSelf: 'flex-start',
                    mb: 2,
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                }}
            >
                <ArrowBackIcon />
            </IconButton>

            <Box sx={{ maxWidth: 600, width: '100%', mx: 'auto' }}>
                <Card sx={{
                    borderRadius: 4,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)'
                }}>
                    <CardContent sx={{ p: 4 }}>
                        <Typography
                            variant="h4"
                            component="h1"
                            gutterBottom
                            sx={{
                                color: "#4a148c",
                                fontWeight: 'bold',
                                textAlign: 'center',
                                mb: 3
                            }}
                        >
                            User Profile
                        </Typography>
                        <Divider sx={{ my: 3 }} />

                        <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <BadgeIcon sx={{ color: '#6e8efb', fontSize: 28 }} />
                                <Box>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        ID
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                        {profile.id}
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <EmailIcon sx={{ color: '#6e8efb', fontSize: 28 }} />
                                <Box>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        Email
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                        {profile.email}
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <CalendarTodayIcon sx={{ color: '#6e8efb', fontSize: 28 }} />
                                <Box>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        Member Since
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                        {new Date(profile.createdAt).toLocaleDateString('vi-VN', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Button
                            fullWidth
                            variant="contained"
                            onClick={() => navigate('/')}
                            sx={{
                                mt: 4,
                                bgcolor: '#6e8efb',
                                borderRadius: '10px',
                                py: 1.5,
                                '&:hover': {
                                    bgcolor: '#5c7cfa'
                                }
                            }}
                        >
                            Back to Home
                        </Button>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default Profile; 
