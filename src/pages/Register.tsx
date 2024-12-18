import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { registerUser } from "../services/api";
import { User } from "../types/userType";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
      return;
    } else {
      setEmailError(null);
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const userData: User = { email, password };

    try {
      await registerUser(userData);
      toast.success("Đăng ký thành công! Vui lòng đăng nhập.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/login");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const handleEmailBlur = () => {
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError(null);
    }
  };

  const handleLoginNavigation = () => {
    navigate("/login");
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
              Register
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleEmailBlur} // Validate email on blur
                required
                error={!!emailError}
                helperText={emailError}
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
              />
              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {error && (
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
              >
                Register
              </Button>
            </form>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={handleLoginNavigation}
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
              Login
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Register;
