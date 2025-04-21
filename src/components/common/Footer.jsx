import { Box, Typography, Link as MuiLink } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Consulting Service", path: "/consultingservices" },
    { name: "Digital Marketing", path: "/digitalmarketing" },
    { name: "Graphic Design", path: "/graphicdesign" },
    { name: "UI/UX Design", path: "/UiUxDesign" },
    { name: "Web Development", path: "/webdevelopement" },
    { name: "E-commerce Solutions", path: "/ecommerceheader" },
    { name: "Software Development", path: "/softwaresolutionssection" },
    { name: "Contact us", path: "/contactus" },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#EAEAA6",
        color: "#000",
        textAlign: "center",
        p: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          mb: 2,
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            style={{ textDecoration: "none" }}
          >
            <Typography
              variant="body2"
              sx={{
                color: location.pathname === item.path ? "#ff6b6b" : "#000", // Highlight active item
                fontWeight: location.pathname === item.path ? "bold" : "normal",
                "&:hover": {
                  textDecoration: "underline",
                  color: "#007BFF",
                },
              }}
            >
              {item.name}
            </Typography>
          </Link>
        ))}
      </Box>

      <Typography variant="h6" fontWeight="bold" mb={1}>
        Kreate Systems
      </Typography>
      <Typography variant="body2">
        Kreate Systems - All Rights Reserved.
      </Typography>
      <MuiLink
        href="mailto:Kreatesystems8@gmail.com"
        sx={{
          display: "block",
          mt: 1,
          fontWeight: "bold",
          color: "#000",
          "&:hover": { color: "#007BFF" },
        }}
      >
        Kreatesystems8@gmail.com
      </MuiLink>
    </Box>
  );
};

export default Footer;