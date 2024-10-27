import React from "react";
import RegistrationForm from "../components/RegistrationForm";
import { Box, Typography } from "@mui/material";

const Register: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
        Register
      </Typography>
      <RegistrationForm />
    </Box>
  );
};

export default Register;
