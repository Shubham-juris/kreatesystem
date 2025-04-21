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

import ExpertTeamImg from "../../../assets/WebDevelopementimg/img1.jpg";
import VersatilityImg from "../../../assets/WebDevelopementimg/img2.jpg";
import BrandConsistencyImg from "../../../assets/WebDevelopementimg/img5.jpg";
import ReliableConsultingImg from "../../../assets/WebDevelopementimg/img4.jpg";
import QualityAssuranceImg from "../../../assets/WebDevelopementimg/img1.jpg";
import TailoredOfferingsImg from "../../../assets/WebDevelopementimg/img2.jpg";

const WebDevelopement = () => {
  const servicesAbout = [
    {
      title: "Expert Team",
      description:
        "Our experienced web developers craft tailored solutions aligned with your business goals. With a wealth of expertise and a commitment to excellence, our team ensures that your website reflects your unique vision and objectives.  ",
      image: ExpertTeamImg,
    },
    {
      title: "Versatility   ",
      description:
        "Our solutions cater to diverse industries, ensuring your website reflects your unique identity. Whether you're in retail, hospitality, finance, or any other industry. ",
      image: VersatilityImg,
    },
    {
      title: "Consistency  ",
      description:
        "We ensure your website aligns seamlessly with your brand identity, leaving a lasting impression. From color schemes and typography to layout and user experience, we maintain consistency across every aspect of your website. ",
      image: BrandConsistencyImg,
    },
    {
      title: "Consistency ",
      description:
        "We maintain consistency in delivering high-quality consulting services, ensuring that every solution aligns with your organization's values, vision, and objectives.",
      image: ReliableConsultingImg,
    },
    {
      title: "Quality Assurance  ",
      description:
        "Quality is our top priority. We adhere to the highest standards of craftsmanship and attention to detail to ensure that your website is not only visually stunning but also technically flawless.",
      image: QualityAssuranceImg,
    },
  ];

  const tailoredServices = [
    {
      title: "Custom Development:",
      description:
        " Bespoke websites tailored to your brand's objectives. Whether you need a simple portfolio site or a complex enterprise solution.  ",
    },
    {
      title: "E-commerce Solutions: ",
      description:
        "• Drive sales with customized e-commerce platforms. From storefront design to payment processing integration. ",
    },
    {
      title: "Content Management Systems: ",
      description:
        " Manage website content effortlessly with our user-friendly systems ",
    },
    {
      title: "Web Applications:",
      description:
        " Streamline business processes with custom applications. Whether you need a CRM system, project management tool, or internal portal. ",
    },
    {
      title: "Maintenance and Support:",
      description: "  Ensure secure, optimized performance.",
    },
    {
      title: "Performance Improvement",
      description:
        " Assess performance metrics and key performance indicators (KPIs) to identify areas for improvement.",
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
            Web Developement
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
          CUSTOM WEB
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
            maxWidth: { xs: "90%", sm: "80%", md: "70%" },
            mx: "auto",
            lineHeight: 1.8,
            fontSize: { xs: "0.95rem", sm: "1rem" },
          }}
        >
          We specialize in crafting custom web solutions tailored to your
          business needs. From simple landing pages to complex e-commerce
          platforms, our team of experienced developers ensures that your
          website not only looks great but also functions seamlessly across all
          devices.
        </Typography>
      </Container>

      <Container sx={{ py: 5 }}>
        {servicesAbout.map((service, index) => (
          <Grid
            container
            spacing={4}
            key={index}
            alignItems="center"
            sx={{
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              mb: 5,
            }}
          >
            <Grid item xs={12} md={6}>
              <img
                src={service.image}
                alt={service.title}
                style={{ width: "100%", height: "350px", borderRadius: "8px" }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{ color: "#6D6D4E", fontWeight: "bold", mb: 2 }}
              >
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

export default WebDevelopement;
