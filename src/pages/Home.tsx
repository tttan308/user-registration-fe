import React from 'react';
import { Typography, Container, Button, Card, CardContent, Box } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Home: React.FC = () => {
  const { logout } = useAuth();

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Card sx={{ maxWidth: 500, borderRadius: 3, boxShadow: 6 }}>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: 4,
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: 'bold', color: '#4a148c' }}
            >
              Welcome!
            </Typography>
            <Typography
              variant="h6"
              sx={{
                marginBottom: 3,
                color: '#555',
              }}
            >
              You are successfully logged in to your account.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={logout}
              sx={{
                paddingX: 4,
                paddingY: 1.5,
                fontSize: '1rem',
                borderRadius: '20px',
                boxShadow: 3,
                '&:hover': {
                  backgroundColor: '#d32f2f',
                  color: '#fff',
                },
              }}
            >
              Logout
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Home;
