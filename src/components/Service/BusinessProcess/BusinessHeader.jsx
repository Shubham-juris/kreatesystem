import React from "react";
import { Box, Typography, Container, Grid, List, ListItem, ListItemText, Divider, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

// Import images
import bgImage from "../../../assets/Bg.png";
import CustomizedServiceImg from "../../../assets/SolutionImg/img.jpg";
import DedicatedTeamImg from "../../../assets/SolutionImg/CloudServices.png";
import ProcessEnhancementImg from "../../../assets/SolutionImg/ITConsultingImg.jpg";
import IndustryInsightImg from "../../../assets/SolutionImg/DevelopmentImg.jpg";
import ConsistentDeliveryImg from "../../../assets/SolutionImg/CloudServices.png";
import QualityAssuranceImg from "../../../assets/SolutionImg/img.jpg";
import TailoredOfferingsImg from "../../../assets/SolutionImg/SoftwareDevelopementImg/img1.jpg";

const BusinessHeader = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const servicesAbout = [
    {
      title: "Customized Service",
      description:
        "At Kreate Systems, we offer tailored Business Process Outsourcing (BPO) solutions designed to optimize your operational efficiency and drive business growth. Our expertise lies in understanding your unique requirements and delivering streamlined processes that align seamlessly with your organizational goals.",
      image: CustomizedServiceImg,
    },
    {
      title: "Dedicated Team",
      description:
        "Our team of seasoned professionals is committed to providing exceptional BPO services, ensuring that your business functions run smoothly and effectively. With a focus on excellence and efficiency, we deliver reliable outsourcing solutions tailored to your specific needs.",
      image: DedicatedTeamImg,
    },
    {
      title: "Process Enhancement",
      description:
        "We specialize in identifying inefficiencies within your business processes and implementing strategies to optimize workflow, reduce costs, and enhance overall performance.",
      image: ProcessEnhancementImg,
    },
    {
      title: "Industry Insight",
      description:
        "With extensive experience across diverse industries, our consultants bring invaluable insights and expertise to the table. Whether you operate in finance, healthcare, retail, or any other sector.",
      image: IndustryInsightImg,
    },
    {
      title: "Consistent Delivery",
      description:
        "At Kreate Systems, consistency is key. We pride ourselves on delivering high-quality BPO services that consistently meet and exceed our clients' expectations. From initial consultation to ongoing support.",
      image: ConsistentDeliveryImg,
    },
    {
      title: "Quality Assurance",
      description:
        "Quality is ingrained in everything we do. Our rigorous quality assurance processes guarantee professionalism, integrity, and reliability in every aspect of our BPO services. You can trust us to deliver consistent, high-quality solutions that drive tangible results for your business.",
      image: QualityAssuranceImg,
    },
  ];

  const tailoredServices = [
    {
      title: "Customer Support Outsourcing",
      description:
        "• Enhance customer satisfaction and loyalty with our premium outsourced customer support services.\n• 24/7 helpdesk support and seamless multichannel assistance.",
    },
    {
      title: "Data Entry and Management",
      description:
        "• Streamline your operations with our meticulous data entry processes.\n• Robust data management solutions ensuring precision and reliability.",
    },
    {
      title: "Finance and Accounting Outsourcing",
      description:
        "• Optimize financial efficiency with our comprehensive outsourcing services.\n• Includes accounts payable/receivable, bookkeeping, and financial reporting.",
    },
    {
      title: "Human Resources Outsourcing",
      description:
        "• Elevate HR operations with our expert solutions.\n• Payroll management, benefits administration, and regulatory compliance.",
    },
    {
      title: "Back Office Operations Outsourcing",
      description:
        "• Maximize productivity by delegating administrative tasks.\n• Document processing and inventory management handled by skilled professionals.",
    },
  ];

  return (
    <>
      {/* Business Header Section */}
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

      {/* About Business Section */}
      <Container sx={{ py: 5 }}>
        {servicesAbout.map((service, index) => (
          <Grid
            container
            spacing={4}
            key={index}
            alignItems="center"
            sx={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse", mb: 5 }}
          >
            <Grid item xs={12} md={6}>
              <img
                src={service.image}
                alt={service.title}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ color: "#6D6D4E", fontWeight: "bold", mb: 2 }}>
                {service.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "#5A5A5A" }}>
                {service.description}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Container>

      {/* Tailored Offerings Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: 2, sm: 4, md: 6 },
          background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
          maxWidth: "1400px",
          margin: "0 auto",
          my: 4,
        }}
      >
        {/* Left Section: Text Content */}
        <Box
          sx={{
            flex: 1,
            pr: { md: 6 },
            mb: { xs: 4, md: 0 },
            maxWidth: { xs: "100%", md: "50%" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              color: "#1a237e",
              mb: 3,
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
              lineHeight: 1.2,
            }}
          >
            Tailored Offerings
            <Divider
              sx={{
                width: "80px",
                borderColor: "#3f51b5",
                borderWidth: "2px",
                mt: 1,
                mb: 3,
                mx: { xs: "auto", md: 0 },
              }}
            />
          </Typography>

          <List sx={{ py: 0 }}>
            {tailoredServices.map((service, index) => (
              <ListItem
                key={index}
                sx={{
                  py: 2,
                  px: 0,
                  borderBottom: "1px solid #eee",
                  "&:last-child": { borderBottom: "none" },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(63, 81, 181, 0.04)",
                    transform: "translateX(8px)",
                  },
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "#333",
                        fontSize: { xs: "1rem", sm: "1.1rem" },
                      }}
                    >
                      {service.title}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      component="span"
                      sx={{
                        color: "#666",
                        mt: 0.5,
                        fontSize: { xs: "0.9rem", sm: "0.95rem" },
                        lineHeight: 1.6,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {service.description}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Right Section: Image */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: "50%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box
            component="img"
            src={TailoredOfferingsImg}
            alt="Professional team collaboration"
            sx={{
              width: { xs: "100%", md: "80%" },
              height: { xs: "auto", md: "600px" },
              maxHeight: { md: "600px" },
              borderRadius: 2,
              objectFit: "cover",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default BusinessHeader;