import React, { useState } from "react";
import { TextField, Button, Typography, Box, Container } from "@mui/material";

const MainContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <Box sx={{ mt: "5rem", py: 4, textAlign: "center" }}>
      
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
          }}
        >
          <Box sx={{ flexGrow: 1, height: "2px", bgcolor: "#8B8B5E" }} />
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#8B8B5E",
              mx: 2,
              textAlign: "center",
            }}
          >
            CONTACT US
          </Typography>
          <Box sx={{ flexGrow: 1, height: "2px", bgcolor: "#8B8B5E" }} />
        </Box>

        <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            p: 4,
          }}
        >
          {/* Contact Form */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" align="left" sx={{ color: "#000" }}>
              Drop us a line!
            </Typography>
            <Box
              sx={{
                p: 3,
                backgroundColor: "#f9f9f9",
                border: "1px solid #ddd",
              }}
            >
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Email*"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  required
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  margin="normal"
                  multiline
                  rows={4}
                  variant="outlined"
                />
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2,
                    backgroundColor: "#d4d19c",
                    color: "black",
                    fontWeight: "bold",
                    borderRadius: "20px",
                  }}
                  type="submit"
                >
                  SEND
                </Button>
              </form>
            </Box>
          </Box>

          {/* Contact Info */}
          <Box sx={{ flex: 1, textAlign: "left", p: 4 }}>
            <Typography variant="h6" sx={{ color: "#000" }}>
              Better yet, see us in person!
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              We love our customers, so feel free to visit during normal
              business hours.
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Kreate Systems
            </Typography>
            <Typography variant="body2">
              Unit #19, 4804 42 Ave, Innisfail, Alberta T4G 1N4, Canada
            </Typography>
            <Typography variant="body2">403-352-5061</Typography>
            <Typography variant="body2">Kreatesystems8@gmail.com</Typography>
            <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
              Hours
            </Typography>
            <Typography variant="body2">
              Open today 09:00 a.m. – 05:00 p.m.
            </Typography>
          </Box>
        </Box>

        {/* reCAPTCHA Notice */}
        <Typography variant="caption" sx={{ mt: 3, color: "#777" }}>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </Typography>
      </Container>
    </Box>
  );
};

export default MainContactUs;
