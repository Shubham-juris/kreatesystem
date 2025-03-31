import { useState, useEffect } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import SocialImage from "../../assets/socialimg.png";
import MarketingImage from "../../assets/Marketingimg.png";
import SupportImage from "../../assets/Supportimg.png";
import CRMImage from "../../assets/webimg.png";
import ExpertTeamImg from "../../assets/DigitalMarketingImg/Img1.jpg";
import InnovationImg from "../../assets/DigitalMarketingImg/Img2.jpg";
import VersatilityImg from "../../assets/DigitalMarketingImg/img3.jpg";
import ConsistencyImg from "../../assets/DigitalMarketingImg/img4.jpg";
import QualityImg from "../../assets/DigitalMarketingImg/Img2.jpg";
import TailoredOfferingsImg from "../../assets/DigitalMarketingImg/img5.jpg";

const images = [
  { src: SocialImage, label: "Social Media" },
  { src: VersatilityImg, label: "Versatility" },
  { src: MarketingImage, label: "Marketing" },
  { src: ConsistencyImg, label: "Consistency" },
  { src: SupportImage, label: "Customer Support" },
  { src: QualityImg, label: "Quality" },
  { src: CRMImage, label: "CRM Solutions" },
  { src: ExpertTeamImg, label: "Expert Team" },
  { src: InnovationImg, label: "Innovation" },
  { src: TailoredOfferingsImg, label: "Tailored Offerings" },
];

const WorkWithUs = () => {
  const [startIndex, setStartIndex] = useState(0);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery("(max-width: 960px)");

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleImages = images.slice(startIndex, startIndex + (isSmallScreen ? 1 : isMediumScreen ? 2 : 4));

  return (
    <Box
      sx={{
        textAlign: "center",
        bgcolor: "#f9f9f9",
        p: { xs: 2, sm: 3, md: 4 },
        width: "100%",
        maxWidth: "1400px",
        margin: "auto",
        borderRadius: "20px",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
        overflow: "hidden",
        position: "relative",
        mt: { xs: 2, sm: 3, md: 5 },
      }}
    >
      <Typography
        variant={isSmallScreen ? "h5" : "h4"}
        sx={{ fontWeight: "bold", color: "#6A5ACD", mb: 3 }}
      >
        Work With Us
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(${isSmallScreen ? 1 : isMediumScreen ? 2 : 4}, 1fr)`,
          gap: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AnimatePresence mode="wait">
          {visibleImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: 180, scale: 0.8 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: -180, scale: 0.8 }}
              transition={{ duration: 1.5 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                width: "100%",
                height: isSmallScreen ? "180px" : "250px",
                perspective: "1000px",
              }}
            >
              <motion.img
                src={img.src}
                alt={img.label}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)" }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                  cursor: "pointer",
                  objectFit: "cover",
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default WorkWithUs;