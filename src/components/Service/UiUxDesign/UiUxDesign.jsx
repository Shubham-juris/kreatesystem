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

// Assuming these should be unique images - update paths as needed
import ExpertTeamImg from "../../../assets/uiuxDesignimg/img1.jpg";
import CreativityImg from "../../../assets/uiuxDesignimg/img2.jpg";
import AdaptabilityImg from "../../../assets/uiuxDesignimg/img3.jpg";
import ConsistencyImg from "../../../assets/uiuxDesignimg/img4.jpg";
import QualityImg from "../../../assets/uiuxDesignimg/img1.jpg";
// import QualityAssuranceImg from "../../../assets/Bg.png";
import TailoredOfferingsImg from "../../../assets/uiuxDesignimg/img5.jpg";

const UiUxDesign = () => {
  const servicesAbout = [
    {
      title: "Expert Team",
      description:
        "Our team of skilled UI/UX designers is dedicated to creating intuitive and visually appealing interfaces. With their expertise and user-centric approach, they ensure that every design enhances usability and meets your objectives.",
      image: ExpertTeamImg,
    },
    {
      title: "Creativity ",
      description:
        " We infuse creativity into our UI/UX design solutions, delivering unique and innovative designs that captivate and inspire your audience..",
      image: CreativityImg,
    },
    {
      title: "Adaptability ",
      description:
        " From website interfaces and mobile apps to software applications and interactive prototypes, our UI/UX design services adapt to diverse industries and user preferences, ensuring seamless navigation and interaction.",
      image: AdaptabilityImg,
    },
    {
      title: "Consistency ",
      description:
        "We maintain consistency across all your UI/UX design elements, ensuring that every interface aligns seamlessly with your brand identity and reinforces your message.",
      image: ConsistencyImg,
    },
    {
      title: "Quality ",
      description:
        "Quality is paramount in our approach. We meticulously review and test every design to ensure that it meets the highest standards of usability, accessibility, and user satisfaction ",
      image: QualityImg,
    },
  ];

  const tailoredServices = [
    {
      title: "Website Interface Design:",
      description:
        " Create visually stunning and intuitive website interfaces that enhance user experience and drive engagement. ",
    },
    {
      title: "Mobile App Design:",
      description:
        " Design user-friendly and responsive mobile app interfaces that optimize functionality and usability across devices. ",
    },
    {
      title: "Software Application Design:",
      description:
        "Develop intuitive and efficient software application interfaces that streamline user workflows and maximize productivity. ",
    },
    {
      title: "Interactive Prototypes:",
      description:
        "  Bring your ideas to life with interactive prototypes that allow for user testing and feedback, ensuring optimal usability and satisfaction. ",
    },
    {
      title: "User Research and Testing:",
      description:
        "  Conduct thorough user research and testing to identify user needs and preferences, informing the design process and ensuring user satisfaction.",
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
            Ui/Ux Design
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
          CUSTOM DESIGN SOLUTIONS
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
            mb: 3,
            lineHeight: 1.8,
            fontSize: { xs: "0.95rem", sm: "1rem" },
          }}
        >
          Our UI/UX design services are tailored to meet your specific needs,
          enhancing user experience and engagement across digital platforms.
          With our comprehensive UI/UX design services, we help you unlock the
          full potential of digital experiences and achieve your business
          objectives with confidence.
        </Typography>
      </Container>

      <Container sx={{ py: 4 }}>
        {servicesAbout.map((service, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection={index % 2 === 0 ? "row" : "row-reverse"}
            alignItems="center"
            mb={5}
            gap={8}
          >
            <Box flex={1} display="flex" justifyContent="center">
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "350px",
                  
                  
                }}
              />
            </Box>

            <Box flex={1}>
              <Typography
                variant="h4"
                sx={{ color: "#6D6D4E", fontWeight: "bold", mb: 2 }}
              >
                {service.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "#5A5A5A" }}>
                {service.description}
              </Typography>
            </Box>
          </Box>
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

export default UiUxDesign;
