import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import BuildingOptimizationImg from "../../../assets/Solution Img/DevelopmentImg.jpg";
import KeyFeaturesImg from "../../../assets/Solution Img/ITConsultingImg.jpg";
import CaseStudiesImg from "../../../assets/Solution Img/CloudServices.png";
import virtualShoppingImage from "../../../assets/Solution Img/ITConsultingImg.jpg";
import DynamicPricingStrategiesImg from "../../../assets/Solution Img/DevelopmentImg.jpg";
import PersonalizedProductImg from "../../../assets/Solution Img/CloudServices.png";
import CustomizableCheckoutProcessesImg from "../../../assets/Solution Img/img.jpg";
import bgImage from "../../../assets/Bg.png";

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
    image: PersonalizedProductImg,
    description:
      "Develop algorithms that analyze customer behavior and preferences to offer personalized product recommendations, enhancing the shopping experience and increasing conversion rates.",
  },
  {
    title: "Customizable Checkout Processes",
    image: CustomizableCheckoutProcessesImg,
    description:
      "Create a flexible checkout process that allows customers to choose their preferred payment methods, shipping options, and delivery dates, providing a tailored experience that meets their individual needs.",
  },
  {
    title: "Dynamic Pricing Strategies",
    image: DynamicPricingStrategiesImg,
    description:
      "Implement dynamic pricing algorithms that adjust product prices in realtime based on factors such as demand, inventory levels, and competitor pricing, optimizing revenue and maximizing profit margins.",
  },
  {
    title: "Interactive Virtual Shopping Experiences",
    image: virtualShoppingImage,
    description:
      "Introduce immersive virtual shopping experiences that allow customers to explore products in a virtual environment, visualize how they would look in real life, and make informed purchasing decisions, enhancing engagement and driving sales.",
  },
];

const Ecommerceheader = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {/* Header Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "30vh", sm: "40vh", md: "50vh" },
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: { xs: 8, sm: 4 },
          overflow: "hidden",
          px: { xs: 2, sm: 4 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Typography
            variant={isSmallScreen ? "h5" : isMediumScreen ? "h4" : "h3"}
            sx={{
              position: "relative",
              color: "white",
              fontWeight: 700,
              textAlign: "center",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            E-Commerce Solutions
          </Typography>
        </motion.div>
      </Box>

      {/* Intro Section */}
      <Container maxWidth="lg" sx={{ textAlign: "center", py: { xs: 4, md: 6 } }}>
        <Box display="flex" alignItems="center" justifyContent="center" mb={3}>
          <Divider
            sx={{
              flexGrow: 1,
              bgcolor: "#A5A585",
              height: 2,
              mx: { xs: 1, sm: 2 },
            }}
          />
          <Typography
            variant={isSmallScreen ? "h5" : "h4"}
            fontFamily="'Times New Roman', serif"
            textTransform="uppercase"
            sx={{
              fontWeight: 500,
              color: "#A5A585",
              whiteSpace: "nowrap",
              px: 2,
            }}
          >
            Innovative Custom Software Solutions
          </Typography>
          <Divider
            sx={{
              flexGrow: 1,
              bgcolor: "#A5A585",
              height: 2,
              mx: { xs: 1, sm: 2 },
            }}
          />
        </Box>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: { xs: "90%", sm: "80%", md: "70%" },
            mx: "auto",
            lineHeight: 1.8,
            fontSize: { xs: "0.95rem", sm: "1rem" },
          }}
        >
          At Kreate Solution Systems, we understand the pivotal role e-commerce
          plays in modern businesses' success. We believe that a well-crafted
          online presence can significantly impact a company’s growth and
          profitability.
        </Typography>
      </Container>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Box display="flex" alignItems="center" justifyContent="center" sx={{ mb: 5 }}>
          <Box
            sx={{
              flexGrow: 1,
              height: "1px",
              backgroundColor: "#A5A585",
              mx: { xs: 1, sm: 2 },
            }}
          />
          <Typography
            variant={isSmallScreen ? "h5" : "h4"}
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
              for Seamless Online Success
            </Box>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              height: "1px",
              backgroundColor: "#A5A585",
              mx: { xs: 1, sm: 2 },
            }}
          />
        </Box>

        {/* First Three Services */}
        {services.slice(0, 3).map((service, index) => (
          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            alignItems="center"
            sx={{
              flexDirection: {
                xs: "column",
                md: index % 2 === 0 ? "row" : "row-reverse",
              },
              mb: { xs: 4, md: 6 },
            }}
            key={index}
          >
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={service.image}
                alt={service.title}
                sx={{
                  width: "100%",
                  maxWidth: { xs: "300px", sm: "400px", md: "500px" },
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.15)",
                  display: "block",
                  mx: "auto",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.03)" },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant={isSmallScreen ? "h6" : "h5"}
                sx={{
                  color: "#6D6D4E",
                  fontWeight: 600,
                  mb: 2,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#5A5A5A",
                  lineHeight: 1.7,
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {service.description}
              </Typography>
            </Grid>
          </Grid>
        ))}

        {/* Transform Section */}
        <Box display="flex" alignItems="center" justifyContent="center" sx={{ mb: 5 }}>
          <Box
            sx={{
              flexGrow: 1,
              height: "1px",
              backgroundColor: "#A5A585",
              mx: { xs: 1, sm: 2 },
            }}
          />
          <Typography
            variant={isSmallScreen ? "h5" : "h4"}
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
          <Box
            sx={{
              flexGrow: 1,
              height: "1px",
              backgroundColor: "#A5A585",
              mx: { xs: 1, sm: 2 },
            }}
          />
        </Box>

        {/* Last Four Services */}
        <Grid container spacing={{ xs: 3, sm: 4 }} justifyContent="center">
          {services.slice(3).map((service, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  p: { xs: 2, sm: 3 },
                  bgcolor: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                  transition: "box-shadow 0.3s ease",
                  "&:hover": {
                    boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <Typography
                  variant={isSmallScreen ? "h6" : "h5"}
                  sx={{ color: "#6D6D4E", fontWeight: 600, mb: 2 }}
                >
                  {service.title}
                </Typography>
                <Box
                  component="img"
                  src={service.image}
                  alt={service.title}
                  sx={{
                    width: { xs: "200px", sm: "250px", md: "300px" },
                    height: { xs: "200px", sm: "250px", md: "300px" },
                    objectFit: "cover",
                    borderRadius: "50%",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                    mb: 2,
                    mx: "auto",
                    display: "block",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#5A5A5A",
                    lineHeight: 1.7,
                    fontSize: { xs: "0.85rem", sm: "0.95rem" },
                    px: { xs: 1, sm: 2 },
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Ecommerceheader;