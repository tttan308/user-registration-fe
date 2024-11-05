import React from "react";
import {
  Typography,
  Container,
  Button,
  Card,
  CardContent,
  Box,
  Stack
} from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Home: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #6e8efb, #a777e3)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Card sx={{ maxWidth: 500, borderRadius: 3, boxShadow: 6 }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: 4,
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#4a148c" }}
            >
              Welcome!
            </Typography>
            <Typography
              variant="h6"
              sx={{
                marginBottom: 3,
                color: "#555",
              }}
            >
              You are successfully logged in to your account.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/profile')}
                startIcon={<AccountCircleIcon />}
                sx={{
                  paddingX: 4,
                  paddingY: 1.5,
                  fontSize: "1rem",
                  borderRadius: "20px",
                  boxShadow: 3,
                  "&:hover": {
                    backgroundColor: "#1976d2",
                    color: "#fff",
                  },
                }}
              >
                Profile
              </Button>

              <Button
                variant="contained"
                color="secondary"
                onClick={logout}
                startIcon={<LogoutIcon />}
                sx={{
                  paddingX: 4,
                  paddingY: 1.5,
                  fontSize: "1rem",
                  borderRadius: "20px",
                  boxShadow: 3,
                  "&:hover": {
                    backgroundColor: "#d32f2f",
                    color: "#fff",
                  },
                }}
              >
                Logout
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Home;
