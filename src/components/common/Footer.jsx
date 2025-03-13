import React from "react";
import { Box, Typography, Link } from "@mui/material";
 
const Footer = () => {
  return (
<Box
      sx={{
        bgcolor: "#EAEAA6", // Light yellow-green background
        color: "#000", // Text color
        textAlign: "center",
        p: 3,
      }}
>
      {/* Navigation Links */}
<Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          mb: 2,
        }}
>
        {[
          "Home",
          "About",
          "Consulting Service",
          "Digital Marketing",
          "Graphic Design",
          "UI/UX Design",
          "Web Development",
          "E-commerce Solutions",
          "Software Development",
          "Contact us",
        ].map((item) => (
<Typography
            key={item}
            variant="body2"
            sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}
>
            {item}
</Typography>
        ))}
</Box>
 
      {/* Footer Information */}
<Typography variant="h6" fontWeight="bold" mb={1}>
        Kreate Systems
</Typography>
<Typography variant="body2">Kreate Systems - All Rights Reserved.</Typography>
<Link
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
</Link>
</Box>
  );
};
 
export default Footer;