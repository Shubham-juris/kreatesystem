import React from "react";
import { Box, Typography } from "@mui/material";
import WebImage from "../../assets/DigitalMarketingImg/Img1.jpg";

const BusinessNeed = () => {
  return (
    <Box sx={{ p: { xs: 2, sm: 4 }, textAlign: "center", bgcolor: "#fff" }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#8B8B5E",
          mb: 2,
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        You Need Us
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "60%" },
            textAlign: "left",
            pr: { sm: 4 },
            mb: { xs: 2, sm: 0 },
          }}
        >
          <Typography variant="body1" color="textSecondary">
            At Kreate Systems, we understand that businesses are constantly seeking solutions that
            deliver tangible benefits and drive success. That's why we're committed to highlighting
            the key features and benefits of our services to help you make informed decisions and
            achieve your goals effectively.
          </Typography>
        </Box>
        <Box sx={{ width: { xs: "100%", sm: "40%" }, textAlign: "center" }}>
          <img
            src={WebImage}
            alt="Business Need"
            style={{ maxWidth: "100%", height: "auto", maxHeight: "250px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BusinessNeed;
