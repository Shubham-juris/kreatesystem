import React from "react";
import { Box, Typography } from "@mui/material";
import backgroundImage from "../../../assets/Bg.jpeg";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        px: 2, // Padding for better responsiveness
      }}
    >
      <Box sx={{ maxWidth: "800px" }}>
        <Typography variant="h3" fontWeight="bold">
          Professional Tech For Your Business
        </Typography>
        <Typography variant="h6" mt={2}>
          At <strong>Kreate Systems</strong>, we specialize in Web Development, Graphic Designing, and Marketing.
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
