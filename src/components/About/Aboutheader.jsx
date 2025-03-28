import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import bgImage from "../../assets/Bg.png"; // Ensure the correct path

const AboutUs = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "300px",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "64px",
        overflow: "hidden",
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Animated Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Typography
          variant="h3"
          sx={{
            position: "relative",
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          ABOUT US
        </Typography>
      </motion.div>
    </Box>
  );
};

export default AboutUs;
