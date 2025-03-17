import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import BuildingOptimizationImg from "../../../assets/Bg.png";
import KeyFeaturesImg from "../../../assets/Bg.png";
import CaseStudiesImg from "../../../assets/Bg.png";
import DynamicPricingImg from "../../../assets/Bg.png";
import VirtualShoppingImg from "../../../assets/Bg.png";
import dynamicPricingImage from "../../../assets/Bg.png";
import virtualShoppingImage from "../../../assets/Bg.png";
import PersonalizedProductImg from  "../../../assets/Bg.png";
import CustomizableCheckoutProcessesImg from  "../../../assets/Bg.png";

const services = [
  {
    title: "Building Optimization",
    description:
      "We meticulously craft e-commerce platforms, ensuring they not only meet but exceed industry standards. Our team focuses on user experience, responsive design, and streamlined checkout processes, guaranteeing a seamless online shopping experience for your customers.",
    image: BuildingOptimizationImg,
  },
  {
    title: "Key Features",
    description:
      "With Kreate Solution Systems, your e-commerce platform will boast features that drive sales and enhance efficiency. From integrating secure payment gateways to implementing robust inventory management systems, we ensure every aspect of your online store is optimized for success.",
    image: KeyFeaturesImg,
  },
  {
    title: "Case Studies",
    description:
      "Explore our portfolio of successful e-commerce projects, where we've helped businesses like yours thrive in the digital marketplace. From small startups to established enterprises, our solutions have consistently delivered increased sales, higher conversion rates, and improved customer satisfaction.",
    image: CaseStudiesImg,
  },
  {
    title: "Personalized Product",
    image: PersonalizedProductImg ,
    description:
      "Develop algorithms that analyze customer behavior and preferences to offer personalized product recommendations, enhancing the shopping experience and increasing conversion rates.",
  },
  {
    title: "Customizable Checkout Processes",
    image: BuildingOptimizationImg,
    description:
      "Create a flexible checkout process that allows customers to choose their preferred payment methods, shipping options, and delivery dates, providing a tailored experience that meets their individual needs.",
  },
  
  {
    title: "Dynamic Pricing Strategies",
    image: CustomizableCheckoutProcessesImg,
    description:
      "Implement dynamic pricing algorithms that adjust product prices in real-time based on factors such as demand, inventory levels, and competitor pricing, optimizing revenue and maximizing profit margins.",
  },
  {
    title: "Interactive Virtual Shopping Experiences",
    image: virtualShoppingImage,
    description:
      "Introduce immersive virtual shopping experiences that allow customers to explore products in a virtual environment, visualize how they would look in real life, and make informed purchasing decisions, enhancing engagement and driving sales.",
  },
];

const AboutEcommerce = () => {
  return (
    <Container sx={{ py: 5 }}>
      {/* Section Title with Divider */}
      <Box display="flex" alignItems="center" justifyContent="center" sx={{ mb: 5 }}>
        <Box sx={{ flexGrow: 1, height: "1px", backgroundColor: "#A5A585", mx: 2 }} />
        <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
            color: "#A5A585",
            textAlign: "center",
            letterSpacing: "2px",
            fontFamily: "'Times New Roman', serif",
            textTransform: "uppercase",
          }}
        >
          <Box component="span" display="block">
            Tailored E-Commerce Solutions
          </Box>
          <Box component="span" display="block">
            for Seamless Online Success.
          </Box>
        </Typography>
        <Box sx={{ flexGrow: 1, height: "1px", backgroundColor: "#A5A585", mx: 2 }} />
      </Box>

      {/* First Three Services */}
      {services.slice(0, 3).map((service, index) => (
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{ flexDirection: { xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" }, mb: 6 }}
          key={index}
        >
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={service.image}
              alt={service.title}
              sx={{
                width: "100%",
                borderRadius: "12px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                maxWidth: "500px",
                display: "block",
                mx: "auto",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ color: "#6D6D4E", fontWeight: "bold", mb: 2 }}>
              {service.title}
            </Typography>
            <Typography variant="body1" sx={{ color: "#5A5A5A", lineHeight: 1.6 }}>
              {service.description}
            </Typography>
          </Grid>
        </Grid>
      ))}

      {/* Section Heading Before Last Two Services */}
      <Box display="flex" alignItems="center" justifyContent="center" sx={{ mb: 5 }}>
        <Box sx={{ flexGrow: 1, height: "1px", backgroundColor: "#A5A585", mx: 2 }} />
        <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
            color: "#A5A585",
            textAlign: "center",
            letterSpacing: "2px",
            fontFamily: "'Times New Roman', serif",
            textTransform: "uppercase",
          }}
        >
          <Box component="span" display="block">
            Transform Your Business With Kreate Systems
          </Box>
        </Typography>
        <Box sx={{ flexGrow: 1, height: "1px", backgroundColor: "#A5A585", mx: 2 }} />
      </Box>

      <Container>
  
  <Grid container spacing={4} justifyContent="center" alignItems="center">
    {services.slice(3).map((service, index) => (
      <Grid item xs={12} sm={10} md={6} key={index} textAlign="center">
        <Typography variant="h5" sx={{ color: "#6D6D4E", fontWeight: "bold", mb: 2 }}>
          {service.title}
        </Typography>
        <Box
  component="img"
  src={service.image}
  alt={service.title}
  sx={{
    width: { xs: "90%", sm: "75%", md: "400px" }, 
    height: "auto", 
    maxHeight: "800px", 
    borderRadius: "50%",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    display: "block",
    mx: "auto",
    mb: 2,
  }}
/>
        <Typography variant="body1" sx={{ color: "#5A5A5A", lineHeight: 1.6, px: { xs: 2, sm: 4 } }}>
          {service.description}
        </Typography>
      </Grid>
    ))}
  </Grid>
</Container>
</Container>
  );
};

    

export default AboutEcommerce;
