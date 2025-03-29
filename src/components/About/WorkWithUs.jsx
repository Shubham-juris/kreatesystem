import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import SocialImage from "../../assets/socialimg.png";
import MarketingImage from "../../assets/Marketingimg.png";
import SupportImage from "../../assets/Supportimg.png";
import CRMImage from "../../assets/webimg.png";

const images = [
  { src: SocialImage, label: "Social Media" },
  { src: MarketingImage, label: "Marketing" },
  { src: SupportImage, label: "Customer Support" },
  { src: CRMImage, label: "CRM Solutions" },
];

const WorkWithUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const borderColors = ["#6A5ACD", "#FF6347", "#32CD32", "#FFD700"];

  return (
    <Box
      sx={{
        textAlign: "center",
        bgcolor: "#f9f9f9",
        p: 4,
        width: "100%",
        maxWidth: "1400px",
        margin: "auto",
        borderRadius: "20px",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
        overflow: "hidden",
        position: "relative",
        mt: 5,
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "#6A5ACD", mb: 3 }}
      >
        Work With Us
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.img
              src={img.src}
              alt={img.label}
              style={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
                border: `4px solid ${borderColors[index % borderColors.length]}`,
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              onClick={() => setCurrentIndex(index)}
            />
          </motion.div>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mt: 4,
        }}
      >
        {images.map((_, index) => (
          <motion.div
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: index === currentIndex ? "#6A5ACD" : "#D3D3D3",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.5, rotate: 360 }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default WorkWithUs;