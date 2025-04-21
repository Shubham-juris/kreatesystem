import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { motion } from "framer-motion";
import bgImage from "../../../assets/Bg.png";

import ExpertTeamImg from "../../../assets/DigitalMarketingImg/Img1.jpg";
import InnovationImg from "../../../assets/DigitalMarketingImg/Img2.jpg";
import VersatilityImg from "../../../assets/DigitalMarketingImg/img3.jpg";
import ConsistencyImg from "../../../assets/DigitalMarketingImg/img4.jpg";
import QualityImg from "../../../assets/DigitalMarketingImg/Img2.jpg";
import TailoredOfferingsImg from "../../../assets/DigitalMarketingImg/img5.jpg";

const DigitalMarketing = () => {
  const servicesAbout = [
    {
      title: "Expert Team",
      description:
        "Our team of seasoned digital marketers is dedicated to driving your business forward. They ensure that every campaign resonates with your target audience and achieves optimal results.",
      image: ExpertTeamImg,
    },
    {
      title: "Innovation",
      description:
        "We deliver innovative digital marketing solutions that captivate and engage your audience keeping you ahead of the curve in today's competitive market.",
      image: InnovationImg,
    },
    {
      title: "Versatility",
      description:
        "From search engine optimization (SEO) and pay-per-click (PPC) advertising, our marketing services cater to all your needs, ensuring that your strategies are versatile and effective.",
      image: VersatilityImg,
    },
    {
      title: "Consistency",
      description:
        "We maintain consistency in delivering high-quality consulting services, ensuring that every solution aligns with your organization's values, vision, and objectives.",
      image: ConsistencyImg,
    },
    {
      title: "Quality",
      description:
        "Quality is at the forefront of our consulting approach. We adhere to the highest standards of professionalism and integrity, providing reliable advice and support to drive tangible results.",
      image: QualityImg,
    },
  ];

  const tailoredServices = [
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Increase your website visibility and drive tailored business goals.",
    },
    {
      title: "Pay-per-Click (PPC) Advertising",
      description:
        "Reach your target audience effectively with optimized campaigns.",
    },
    {
      title: "Content Marketing",
      description:
        "Customized content and social media platforms to connect with your audience.",
    },
    {
      title: "Email Marketing",
      description:
        "Nurture leads and drive conversions with targeted campaigns.",
    },
    {
      title: "Brand Strategy",
      description:
        "Develop strong branding strategies and establish thought leadership and build brand authority tailored to your audience's interests.",
    },
  ];

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: "200px", sm: "250px", md: "300px" },
          height: { xs: "40vh", sm: "40vh", md: "45vh" },
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: { xs: "56px", sm: "64px" },
          overflow: "hidden",
          px: { xs: 1, sm: 2 },
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
              px: { xs: 1, sm: 2 },
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            Digital Marketing
          </Typography>
        </motion.div>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        pt={5}
        justifyContent="center"
        mb={3}
      >
        <Divider
          sx={{
            flexGrow: 1,
            bgcolor: "#A5A585",
            height: 2,
            
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
          }}
        >
          CUSTOMIZED SERVICE
        </Typography>
        <Divider
          sx={{
            flexGrow: 1,
            bgcolor: "#A5A585",
            height: 2,
          }}
        />
      </Box>
      <Container sx={{ textAlign: "center" }}>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: { xs: "95%", sm: "80%", md: "70%" },
            mx: "auto",
            lineHeight: 1.8,
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
          }}
        >
          At Kraken Systems, our digital marketing services are tailored to meet
          your specific needs. Helping you coordinate and utilize the dynamics
          of online marketing and achieve your business objectives with full
          confidence.
        </Typography>
      </Container>

      <Container sx={{ py: { xs: 3, sm: 4, md: 5 } }}>
        {servicesAbout.map((service, index) => (
          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 4 }}
            key={index}
            alignItems="center"
            sx={{
              flexDirection: {
                xs: "column",
                md: index % 2 === 0 ? "row" : "row-reverse",
              },
              mb: { xs: 3, sm: 4, md: 5 },
            }}
          >
            <Grid item xs={12} md={6}>
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "350px",
                  borderRadius: "8px",
                  maxHeight: { xs: "250px", sm: "300px", md: "350px" },
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  color: "#6D6D4E",
                  fontWeight: "bold",
                  mb: 2,
                  fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#5A5A5A",
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                }}
              >
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
          padding: { xs: 2, sm: 3, md: 6 },
          background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
          maxWidth: { xs: "100%", sm: "90%", md: "1400px" },
          margin: "0 auto",
          my: { xs: 3, sm: 4 },
        }}
      >
        {/* Left Section: Text Content */}
        <Box
          sx={{
            flex: 1,
            pr: { md: 6 },
            mb: { xs: 3, md: 0 },
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
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              lineHeight: 1.2,
            }}
          >
            Tailored Offerings
            <Divider
              sx={{
                width: { xs: "60px", sm: "80px" },
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
                  py: { xs: 1.5, sm: 2 },
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
                        fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
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
                        fontSize: {
                          xs: "0.85rem",
                          sm: "0.9rem",
                          md: "0.95rem",
                        },
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
              width: { xs: "100%", sm: "90%", md: "80%" },
              height: { xs: "auto", md: "500px" },
              maxHeight: { xs: "300px", sm: "400px", md: "500px" },
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

export default DigitalMarketing;
