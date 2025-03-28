import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import bgImage from "../../../assets/Bg.png";

const BusinessHeader = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "250px",
        height: isSmallScreen ? "40vh" : "40vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "64px",
        overflow: "hidden",
        px: 2,
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
          variant={isSmallScreen ? "h4" : "h3"}
          sx={{
            position: "relative",
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            px: 2,
          }}
        >
          BUSINESS PROCESS OUTSOURCING
        </Typography>
      </motion.div>
    </Box>
  );
};

export default BusinessHeader;
