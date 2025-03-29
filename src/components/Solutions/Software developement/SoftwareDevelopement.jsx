import { Container, Typography, Box, List, ListItem, ListItemText, Grid, Card, CardContent, Avatar, Button, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/system";
import ITConsultingImg from "../../../assets/Solution Img/ITConsultingImg.jpg";
import CloudServicesImg from "../../../assets/Solution Img/CloudServices.png";
import CustomSoftwareDevelopmentImg from "../../../assets/Solution Img/DevelopmentImg.jpg";
import SoftwareDevelopmentImg from "../../../assets/Solution Img/top.jpg";
import HeaderImg from "../../../assets/Bg.png";
const services = [
  {
    title: 'Custom Software Development',
    description: 'Our approach to custom software development begins with understanding your business goals and processes. We leverage our industry expertise to create bespoke solutions that address your challenges and drive innovation across various sectors, including healthcare, finance, and beyond.',
    image: CustomSoftwareDevelopmentImg,
  },
  {
    title: 'Cloud Services',
    description: 'With years of experience in delivering custom software solutions, Kreate Solution Systems has earned a reputation for excellence across diverse industries. From optimizing healthcare workflows to revolutionizing financial management, our track record speaks for itself.',
    image: CloudServicesImg,
  },
  {
    title: 'IT Consulting',
    description: 'We pride ourselves on our innovative approach to custom software development. Our team combines creativity, technical expertise, and a client-centric mindset to deliver solutions that not only meet but exceed expectations, empowering your business to thrive in today’s competitive landscape.',
    image: ITConsultingImg,
  },
];

const ServiceCard = ({ title, description }) => (
  <Card elevation={3} sx={{ p: 3, borderRadius: '20px', textAlign: 'center' }}>
    <CardContent>
      <Typography variant="h5" gutterBottom>{title}</Typography>
      <Typography variant="body1" paragraph>{description}</Typography>
      <Button variant="contained" sx={{ backgroundColor: '#d4d7a1', color: '#000' }}>LEARN MORE</Button>
    </CardContent>
  </Card>
);

const SoftwareDevelopment = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <>
      {/* Header Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "30vh", sm: "40vh", md: "50vh" },
          backgroundImage: `url(${HeaderImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: { xs: 8, sm: 6 },
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
            Software Development
          </Typography>
        </motion.div>
      </Box>

      <Container sx={{ py: 5 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              src={SoftwareDevelopmentImg}
              alt="Code on screen"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Software Development Process
            </Typography>

            <Typography variant="body1" paragraph>
              Software development is the process of designing, coding, testing, and maintaining software systems or applications. It involves a combination of computer programming, problem-solving, and software engineering principles to create functional and reliable software products.
            </Typography>

            <List>
              {["Requirement Gathering", "Design", "Implementation"].map((step, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={`${index + 1}. ${step}`}
                    secondary={
                      index === 0
                        ? "This stage involves understanding and documenting the requirements of the software."
                        : index === 1
                        ? "In this phase, the software architecture and design are created."
                        : "This stage involves writing the code according to the design specifications."
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        <Box textAlign="center" py={5}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#808050' }}>
            WELCOME TO KREATE SYSTEMS
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ borderRadius: '16px', boxShadow: 3 }}>
                  <Avatar
                    src={service.image}
                    alt={service.title}
                    sx={{ width: 180, height: 180, mx: 'auto', mt: 3, borderRadius: '50%' }}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>{service.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', mb: 5 }}
      >
        TO INCREASE PRODUCTIVITY AND COST EFFECTIVENESS ON THE MARKET
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {[{
          title: "NETWORK MANAGEMENT & CUSTOMER SUPPORT",
          description: "Our expert network technicians can establish secure networks at your workplace as well as add users accordingly. We provide instant customer support 24*7. It encompasses activities such as network monitoring, configuration management, performance optimization."
        }, {
          title: "DATABASE MANAGEMENT",
          description: "Security and organization are the most important factors that business owners sometimes neglect. We are here to help you organize and secure your data to avoid any problems later. Our expert database technicians can set up and secure your private data in no time."
        }].map((service, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <ServiceCard title={service.title} description={service.description} />
          </Grid>
        ))}
      </Grid>
        
      </Container>
      
    </>
  );
};

export default SoftwareDevelopment;