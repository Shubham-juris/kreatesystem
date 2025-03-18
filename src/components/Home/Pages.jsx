import React, { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import image from "../../assets/img.png";
 
const Sitemaintenance = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isHovered, setIsHovered] = useState(false);
 
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        // backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 16px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(20, 19, 19, 0.75)",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          boxShadow: "inset 0 0 20px rgba(0,0,0,0.7)",
        }}
      >
        <img
          src={image}
          alt="Maintenance Logo"
          style={{
            height: "400px",
            marginBottom: "22px",
          }}
        />
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "10px", sm: "14px", md: "16px", lg: "30px" },
            mt: 2,
            textShadow: "2px 2px 10px rgba(57, 97, 19, 0.51)",
            lineHeight: 1.5,
            color : "white",
            width : "1300px"
          }}
        >
         We are currently experiencing technical difficulties and are conducting emergency maintenance. Our team is working to resolve the issue as quickly as possible. We apologize for the inconvenience and appreciate your patience.
        </Typography>
 
        
      </Box>
    </Box>
  );
};
 
export default Sitemaintenance;