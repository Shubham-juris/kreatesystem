import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import SocialImage from "../../assets/socialimg.png";
import MarketingImage from "../../assets/Marketingimg.png";
import SupportImage from "../../assets/Supportimg.png";
import CRMImage from "../../assets/webimg.png";

const images = [SocialImage, MarketingImage, SupportImage, CRMImage];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Auto-slide every 5 seconds
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

      {/* Image Container */}
      <Box sx={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        position: "relative",
        overflow: "hidden", 
        width: "100%"
      }}>
        {/* Previous Button */}
        <IconButton 
          onClick={handlePrev} 
          sx={{ position: "absolute", left: 10, zIndex: 2 }}
        >
          <ArrowBack fontSize="large" />
        </IconButton>

        {/* Images */}
        <Box sx={{ 
          width: "80%", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
          gap: 2 
        }}>
          {getVisibleImages().map((img, index) => (
            <Box 
              key={index} 
              sx={{
                width: index === 1 ? "80%" : "30%", 
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
                  height: "300px", 
                  objectFit: "cover", 
                }} 
              />
            </Box>
          ))}
        </Box>

        {/* Next Button */}
        <IconButton 
          onClick={handleNext} 
          sx={{ position: "absolute", right: 10, zIndex: 2 }}
        >
          <ArrowForward fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Portfolio;
