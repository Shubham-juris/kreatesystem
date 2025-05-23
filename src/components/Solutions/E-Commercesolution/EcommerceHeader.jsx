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
import BuildingOptimizationImg from "../../../assets/GraphicDesign/img1.jpg";
import KeyFeaturesImg from "../../../assets/WebDevelopementimg/img2.jpg";
import CaseStudiesImg from "../../../assets/SolutionImg/CloudServices.png";
import virtualShoppingImage from "../../../assets/SolutionImg/ITConsultingImg.jpg";
import DynamicPricingStrategiesImg from "../../../assets/uiuxDesignimg/img1.jpg";
import PersonalizedProductImg from "../../../assets/uiuxDesignimg/img4.jpg";
import ProcessesImg from "../../../assets/service/collage.jpg";
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
    image: ProcessesImg,
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

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb={{ xs: 2, sm: 3, md: 4 }}
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 1, sm: 2, md: 3 },
          width: "100%",
          mt: 5,
        }}
      >
        <Divider
          sx={{
            flexGrow: { xs: 0, sm: 1 },
            bgcolor: "#A5A585",
            height: 2,
            width: { xs: "40%", sm: "auto" },
          }}
        />
        <Typography
          variant={isSmallScreen ? "h6" : isMediumScreen ? "h5" : "h4"}
          fontFamily="'Times New Roman', serif"
          textTransform="uppercase"
          sx={{
            fontWeight: 500,
            color: "#A5A585",
            whiteSpace: "nowrap",
            px: { xs: 0, sm: 1, md: 2 },
            fontSize: { xs: "0.875rem", sm: "1rem", md: "1.75rem" },
            lineHeight: 1.2,
          }}
        >
          Innovative Custom Software Solutions
        </Typography>
        <Divider
          sx={{
            flexGrow: { xs: 0, sm: 1 },
            bgcolor: "#A5A585",
            height: 2,
            width: { xs: "40%", sm: "auto" },
          }}
        />
      </Box>

      <Container>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 4,
            maxWidth: { xs: "100%", sm: "90%", md: "70%" },
            mx: "auto",
            lineHeight: 1.6,
            fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" },
            px: { xs: 1, sm: 0 },
            mt: { xs: 2, sm: 3 },
          }}
        >
          At Kreate Solution Systems, we understand the pivotal role e-commerce
          plays in modern businesses' success. We believe that a well-crafted
          online presence can significantly impact a company’s growth and
          profitability.
        </Typography>
      </Container>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ pt: 5, mb: 5 }}
      >
        <Box
          sx={{
            flexGrow: 1,
            height: "2px",
            backgroundColor: "#A5A585",
            mx: 0,
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
            height: "2px",
            backgroundColor: "#A5A585",
          }}
        />
      </Box>

      <Container>
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
                  height: { xs: "200px", sm: "250px", md: "300px" },
                  objectFit: "cover",
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
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 5 }}
        >
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
       <Box sx={{ mb: 5 }}>
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
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
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
                    mb: 4,
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
                    flexGrow: 1,
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Ecommerceheader;
