import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  Container,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import MarketingImage from "../../assets/Marketingimg.png";
import ExpertTeamImg from "../../assets/DigitalMarketingImg/Img1.jpg";
import TailoredOfferingsImg from "../../assets/DigitalMarketingImg/img5.jpg";

const images = [ExpertTeamImg, TailoredOfferingsImg, MarketingImage];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const getVisibleImages = () => {
    return [
      images[(currentIndex - 1 + images.length) % images.length],
      images[currentIndex % images.length],
      images[(currentIndex + 1) % images.length],
    ];
  };

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
            py: 3,
            textAlign: "center",
          }}
        >
          PORTFOLIO
        </Typography>
        <Box sx={{ flexGrow: 1, height: "2px", bgcolor: "#8B8B5E" }} />
      </Box>

      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            width: "100%",
          }}
        >
          <IconButton
            onClick={handlePrev}
            sx={{ position: "absolute", left: 10, zIndex: 2 }}
          >
            <ArrowBack fontSize="large" />
          </IconButton>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            {getVisibleImages().map((img, index) => (
              <Box
                key={index}
                sx={{
                  width: index === 1 ? (isMobile ? "90%" : "60%") : "30%",
                  opacity: index === 1 ? 1 : 0.6,
                  transform: index === 1 ? "scale(1.1)" : "scale(0.9)",
                  transition: "all 0.5s ease-in-out",
                }}
              >
                <img
                  src={img}
                  alt="Portfolio"
                  style={{
                    width: "100%",
                    height: isMobile ? "200px" : "300px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Box>
            ))}
          </Box>

          <IconButton
            onClick={handleNext}
            sx={{ position: "absolute", right: 10, zIndex: 2 }}
          >
            <ArrowForward fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Portfolio;
