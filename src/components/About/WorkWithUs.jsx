import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SocialImage from "../../assets/socialimg.png";
import MarketingImage from "../../assets/Marketingimg.png";
import SupportImage from "../../assets/Supportimg.png";
import CRMImage from "../../assets/webimg.png";

const images = [SocialImage, MarketingImage, SupportImage, CRMImage];

const WorkWithUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Box sx={{ textAlign: "center", bgcolor: "#fff", p: 3, position: "relative", width: "100%", maxWidth: "1400px", margin: "auto", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", mt: 4 }}>
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 4 }}>
        <Box sx={{ flexGrow: 1, height: "2px", bgcolor: "#8B8B5E" }} />
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#8B8B5E", mx: 2 }}>
          Work With Us
        </Typography>
        <Box sx={{ flexGrow: 1, height: "2px", bgcolor: "#8B8B5E" }} />
      </Box>

      {/* Image Grid */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
        {images.map((img, index) => (
          <motion.div
            key={index}
            onClick={() => setCurrentIndex(index)}
            initial={{ opacity: 0.8, scale: 0.95 }}
            animate={{
              opacity: currentIndex === index ? 1 : 0.5,
              scale: currentIndex === index ? 1.4 : 1,
              zIndex: currentIndex === index ? 2 : 1,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              cursor: "pointer",
              position: "relative",
              width: "300px",
              height: "200px",
              overflow: "hidden",
              borderRadius: "10px",
              boxShadow: currentIndex === index ? "0 10px 20px rgba(0,0,0,0.3)" : "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={img}
              alt="Portfolio"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: currentIndex === index ? "none" : "blur(3px)",
                transition: "filter 0.3s ease",
              }}
            />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default WorkWithUs;