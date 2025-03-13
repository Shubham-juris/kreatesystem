import React from "react";
import { Box, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "300px",
        backgroundImage: "url('/path-to-your-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "64px", // Adjust margin to ensure it starts after the navbar
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      <Typography
        variant="h3"
        sx={{
          position: "relative",
          color: "white",
          fontWeight: "bold",
        }}
      >
        ABOUT US
      </Typography>
    </Box>
  );
};

export default AboutUs;
