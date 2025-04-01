import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import SocialImage from "../../assets/DigitalMarketingImg/Img2.jpg";
import MarketingImage from "../../assets/Marketingimg.png";
import SupportImage from "../../assets/DigitalMarketingImg/Img2.jpg";
import CRMImage from "../../assets/DigitalMarketingImg/img4.jpg";
import ExpertTeamImg from "../../assets/DigitalMarketingImg/Img1.jpg";
import InnovationImg from "../../assets/DigitalMarketingImg/Img2.jpg";
import VersatilityImg from "../../assets/DigitalMarketingImg/img3.jpg";
import ConsistencyImg from "../../assets/DigitalMarketingImg/img4.jpg";
import QualityImg from "../../assets/DigitalMarketingImg/Img2.jpg";
import TailoredOfferingsImg from "../../assets/DigitalMarketingImg/img5.jpg";

const images = [
  SocialImage,
  ExpertTeamImg,
  TailoredOfferingsImg,
  InnovationImg,
  MarketingImage,
  QualityImg,
  VersatilityImg,
  SupportImage,
  ConsistencyImg,
  CRMImage,
  VersatilityImg,
];

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
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const getVisibleImages = () => {
    return [
      images[(currentIndex - 1 + images.length) % images.length],
      images[currentIndex % images.length],
      images[(currentIndex + 1) % images.length],
    ];
  };

  return (
    <Box sx={{ textAlign: "center", bgcolor: "#fff", p: 4, position: "relative" }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 3 }}>
        <Box sx={{ flexGrow: 1, height: "2px", bgcolor: "#8B8B5E" }} />
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#8B8B5E", mx: 2 }}>
          PORTFOLIO
        </Typography>
        <Box sx={{ flexGrow: 1, height: "2px", bgcolor: "#8B8B5E" }} />
      </Box>

      <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}>
        <IconButton onClick={handlePrev} sx={{ position: "absolute", left: 10, zIndex: 2 }}>
          <ArrowBack fontSize="large" />
        </IconButton>

        <Box sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}>
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

        <IconButton onClick={handleNext} sx={{ position: "absolute", right: 10, zIndex: 2 }}>
          <ArrowForward fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Portfolio;