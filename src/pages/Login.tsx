import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (email === "user@example.com" && password === "password") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } else {
      setError("Thông tin đăng nhập không chính xác");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      style={{ maxWidth: 400, margin: "auto", padding: "1rem" }}
    >
      <Typography variant="h5">Đăng Nhập</Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Đăng Nhập
      </Button>
      {error && <Typography color="error.main">{error}</Typography>}
    </form>
  );
};

export default Login;
