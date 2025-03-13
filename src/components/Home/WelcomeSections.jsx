import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import WebImage from "../../assets/Appimg.png";

const WelcomeSections = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ p: 4, textAlign: "center", bgcolor: "#fff" }}>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}
      >
        <Box sx={{ flexGrow: 1, height: "2px", bgcolor: "#8B8B5E" }} />
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#8B8B5E", mx: 2, textAlign: "center" }}
        >
          WELCOME TO KREATE SYSTEMS
        </Typography>
        <Box sx={{ flexGrow: 1, height: "2px", bgcolor: "#8B8B5E" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          textAlign: "left",
        }}
      >
        <Box sx={{ width: isSmallScreen ? "100%" : "70%", pr: isSmallScreen ? 0 : 4 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Transform Your Business with Kreate Systems IT Solutions
          </Typography>
          <Typography variant="body1" color="textPrimary">
            At Kreate Systems, we specialize in empowering businesses with cutting-edge
            Business Intelligence (BI) solutions tailored to their unique needs. As a
            leading IT company, we are dedicated to unlocking the full potential of
            data to drive informed decision-making, optimize operations, and fuel growth.
          </Typography>
        </Box>
        <Box sx={{ width: isSmallScreen ? "100%" : "30%", mt: isSmallScreen ? 2 : 0, textAlign: "center" }}>
          <img
            src={WebImage}
            alt="Kreate Systems"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomeSections;
