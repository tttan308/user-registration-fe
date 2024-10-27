import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4">Welcome to Our App</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        This is the Home page.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={() => navigate("/register")}
      >
        Register Now
      </Button>
    </Box>
  );
};

export default Home;
