import React from "react";
import { Box, Button } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";

const MapComponent = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        textAlign: "center",
        mt: 3,
      }}
    >
      <iframe
        title="Google Map"
        width="100%"
        height="400px"
        style={{ border: "none", borderRadius: "8px" }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4716.839260009365!2d-113.9445397032315!3d52.02841599326212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5374b2846f2b61f5%3A0x65f4e7d6b8d48f89!2sInnisfail%2C%20Alberta!5e0!3m2!1sen!2sca!4v1645915918653!5m2!1sen!2sca"
      ></iframe>

      {/* Get Directions Button */}
      <Button
        variant="contained"
        sx={{
          my: 2,
          mb: 5,
          backgroundColor: "#D4D19C",
          color: "black",
          fontWeight: "bold",
          borderRadius: "20px",
          textTransform: "uppercase",
          py: 1.2,
        }}
        startIcon={<RoomIcon />}
        href="https://www.google.com/maps/dir/?api=1&destination=Innisfail,Alberta"
        target="_blank"
      >
        Get Directions
      </Button>
    </Box>
  );
};

export default MapComponent;
