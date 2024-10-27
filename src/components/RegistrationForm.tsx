import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { registerUser } from "../services/api";
import { User } from "../types/userType";

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<User>({ email: "", password: "" });
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    try {
      const response = await registerUser(formData);
      setMessage(response.message);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5">Đăng Ký</Typography>
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Đăng Ký
      </Button>
      {message && <Typography color="success.main">{message}</Typography>}
      {error && <Typography color="error.main">{error}</Typography>}
    </form>
  );
};

export default RegistrationForm;
