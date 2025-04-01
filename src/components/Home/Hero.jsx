import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import backgroundImage from "../../assets/Bg.png";

const Hero = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
        px: 2,
      }}
    >
      <Box sx={{ maxWidth: "800px", px: isSmallScreen ? 1 : 2 }}>
        <Typography
          variant={isSmallScreen ? "h4" : "h3"}
          fontWeight="bold"
        >
          Professional Tech For Your Business
        </Typography>
        <Typography
          variant={isSmallScreen ? "body1" : "h6"}
          mt={2}
        >
          At <strong>Kreate Systems</strong>, we specialize in Web Development, Graphic Designing, and Marketing.
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
