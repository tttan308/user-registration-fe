import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  Box,
  CircularProgress,
} from "@mui/material";
import { loginUser } from "../services/api";
import { User, LoginResponse } from "../types/userType";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    setLoading(true);

    const userData: User = { email, password };

    try {
      const response: LoginResponse = await loginUser(userData);
      localStorage.setItem('refreshToken', response.refreshToken);
      login(response.accessToken);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
      setLoading(false);
    }
  };

  const handleRegisterNavigation = () => {
    navigate("/register");
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xs">
        <Card sx={{ borderRadius: 3, boxShadow: 6 }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 4,
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#1976d2" }}
            >
              Login
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => {
                  if (!emailRegex.test(email)) {
                    setError("Invalid email format");
                  } else {
                    setError(null);
                  }
                }}
                required
                error={!!error && error.includes("email")}
                helperText={error && error.includes("email") ? error : ""}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                error={!!error && !error.includes("email")}
              />
              {error && !error.includes("email") && (
                <Typography
                  color="error"
                  variant="body2"
                  sx={{ mt: 2, textAlign: "center" }}
                >
                  {error}
                </Typography>
              )}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  mt: 3,
                  py: 1.5,
                  fontSize: "1rem",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  boxShadow: 3,
                  "&:hover": {
                    backgroundColor: "#1565c0",
                    boxShadow: 4,
                  },
                }}
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Login"
                )}
              </Button>
            </form>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={handleRegisterNavigation}
              sx={{
                mt: 2,
                py: 1,
                fontSize: "1rem",
                borderRadius: "20px",
                fontWeight: "bold",
                boxShadow: 2,
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                  boxShadow: 3,
                },
              }}
            >
              Register
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Login;
