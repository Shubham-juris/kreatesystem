import React from "react";
import { Box, Typography, Button } from "@mui/material";

const ContactWithUs = () => {
  return (
    <Box sx={{ textAlign: "center", bgcolor: "#fff", p: 6 }}>
      {/* Contact Us Title with Horizontal Lines */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 3 }}>
        <Box sx={{ flexGrow: 1, height: "2px", bgcolor: "#8B8B5E" }} />
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#8B8B5E", mx: 2 }}>
          CONTACT US
        </Typography>
        <Box sx={{ flexGrow: 1, height: "2px", bgcolor: "#8B8B5E" }} />
      </Box>

      {/* Subtitle */}
      <Typography variant="h6" sx={{ fontWeight: "medium", color: "#333", mb: 2 }}>
        Questions or Comments?
      </Typography>
      <Typography variant="body1" sx={{ color: "gray", mb: 4 }}>
        We know that our clients have unique needs. Send us a message, and we will get back to you soon.
      </Typography>

      {/* Contact Information */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>Kreate Systems</Typography>
      <Typography variant="body1" sx={{ color: "gray", mb: 1 }}>
        4804 42 Ave, Innisfail, Alberta T4G 1N4, Canada
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ color: "#8B8B5E", textDecoration: "underline", cursor: "pointer", mb: 1 }}
      >
        KreateSystems8@gmail.com
      </Typography>
      <Typography variant="body1" sx={{ color: "gray", mb: 3 }}>403-352-5061</Typography>

      {/* Hours */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>Hours</Typography>
      <Typography variant="body1" sx={{ color: "gray", mb: 4 }}>
        Open today 09:00 a.m. – 05:00 p.m.
      </Typography>

      {/* Get in Touch Button */}
      <Button 
        variant="contained" 
        sx={{ bgcolor: "#8B8B5E", color: "#fff", borderRadius: "20px", px: 4, py: 1 }}
      >
        GET IN TOUCH
      </Button>
    </Box>
  );
};

export default ContactWithUs;
