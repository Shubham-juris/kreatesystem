import { useState, useEffect } from "react";
import { Box, Typography, useMediaQuery, Container } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import SocialImage from "../../assets/DigitalMarketingImg/img4.jpg";
import MarketingImage from "../../assets/Marketingimg.png";
import SupportImage from "../../assets/Supportimg.png";
import CRMImage from "../../assets/DigitalMarketingImg/img4.jpg";
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

  const visibleImages = [];
  for (let i = 0; i < 4; i++) {
    const index = (startIndex + i) % images.length;
    visibleImages.push(images[index]);
  }

  const imageVariants = {
    hidden: { opacity: 0, rotateY: 180, scale: 0.8, y: 100, z: -100 },
    visible: { 
      opacity: 1, 
      rotateY: 0, 
      scale: 1, 
      y: 0, 
      z: 0,
      transition: { 
        type: "spring", 
        stiffness: 120, 
        damping: 15,
        bounce: 0.4,
        duration: 1.8 
      }
    },
    exit: { opacity: 0, rotateY: -180, scale: 0.8, y: -100, z: -100 },
  };

  const hoverVariants = {
    hover: { 
      scale: 1.15, 
      boxShadow: "0px 20px 40px rgba(106, 90, 205, 0.6)",
      filter: "brightness(110%)",
      transition: { duration: 0.4, ease: "easeInOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2 
      }
    }
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        bgcolor: "#f5f5f5",
        py: 5,
        width: "100%",      
        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
        position: "relative",
        mt: { xs: 2, sm: 4, md: 6 },
        background: "linear-gradient(135deg, #f9f9f9, #e0e0e0)",
      }}
    >
      <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 3,
              }}
            >
              <Box sx={{ flexGrow: 1, height: "2px", bgcolor: "#8B8B5E" }} />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "#8B8B5E",              
                  textAlign: "center",
                  py: 4,
                  mx: { xs: 1, sm: 2 },
                }}
              >
                 YOU NEED US 
              </Typography>
              <Box sx={{ flexGrow: 1, height: "2px", bgcolor: "#8B8B5E" }} />
            </Box>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: `repeat(${Math.min(4, isSmallScreen ? 1 : isMediumScreen ? 2 : 4)}, 1fr)`,
              gap: 4,
              justifyContent: "center",
              alignItems: "center",
             
            }}
          >
            <AnimatePresence mode="wait">
              {visibleImages.map((img, index) => (
                <motion.div
                  key={img.label}
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover="hover"
                  whileInView={{ scale: 1.02 }} 
                  viewport={{ once: true }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    width: "100%",
                    height: isSmallScreen ? "200px" : isMediumScreen ? "250px" : "300px",
                    perspective: "2000px",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.img
                    src={img.src}
                    alt={img.label}
                    variants={hoverVariants}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                      cursor: "pointer",
                      objectFit: "cover",
                      border: "3px solid #6A5ACD",
                      transform: "translateZ(20px)",
                    }}
                  />
                  <motion.div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: "20px",
                      background: "rgba(106, 90, 205, 0.1)",
                      opacity: 0,
                    }}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default WorkWithUs;
