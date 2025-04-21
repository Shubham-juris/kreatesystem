import React from "react";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import WebImage from "../../assets/GraphicDesign/img1.jpg";

const BusinessNeed = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ bgcolor: "#fff", py: 4 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Box sx={{ flexGrow: 1, height: "2px", bgcolor: "#8B8B5E" }} />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#8B8B5E",
            mx: 2,
            textAlign: "center",
            py: 4,
          }}
        >
          YOU NEED US
        </Typography>
        <Box sx={{ flexGrow: 1, height: "2px", bgcolor: "#8B8B5E" }} />
      </Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: { xs: "center", sm: "space-between" },
            width: "100%",
            gap: { xs: 2, sm: 0 },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "60%", md: "55%" },
              textAlign: { xs: "center", sm: "left" },
              pr: { sm: 2, md: 4 },
              mb: { xs: 2, sm: 0 },
            }}
          >
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{
                fontSize: { xs: "0.875rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
                px: { xs: 1, sm: 0 },
              }}
            >
              At Kreate Systems, we understand that businesses are constantly
              seeking solutions that deliver tangible benefits and drive
              success. That's why we're committed to highlighting the key
              features and benefits of our services to help you make informed
              decisions and achieve your goals effectively.
            </Typography>
          </Box>
          <Box
            sx={{
              width: isSmallScreen ? "100%" : "30%",
              mt: isSmallScreen ? 2 : 0,
              textAlign: "center",
            }}
          >
            <img
              src={WebImage}
              alt="Kreate Systems"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BusinessNeed;
