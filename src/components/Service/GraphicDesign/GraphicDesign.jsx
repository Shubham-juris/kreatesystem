import { Box, Typography, useTheme, useMediaQuery, Container, Grid, Divider, List, ListItem, ListItemText } from "@mui/material";
import { motion } from "framer-motion";
import bgImage from "../../../assets/Bg.png";


import CustomizedServiceImg from "../../../assets/GraphicDesign/img1.jpg";
import DedicatedTeamImg from "../../../assets/GraphicDesign/img2.jpg";
import ProcessEnhancementImg from "../../../assets/GraphicDesign/img3.jpg";
import IndustryInsightImg from "../../../assets/GraphicDesign/img4.jpg";
import ConsistentDeliveryImg from "../../../assets/GraphicDesign/img1.jpg";
import TailoredOfferingsImg from "../../../assets/GraphicDesign/img5.jpg";
 
const GraphicDesign = () => {
    const servicesAbout = [ 
        {
            title: "Expert Team",
            description:
                "Our team of skilled graphic designers is dedicated to bringing your vision to life. With their expertise and creativity, they ensure that every design reflects your brand identity and resonates with your audience . ",
            image: CustomizedServiceImg,
        },
        {
            title: "Innovation  ",
            description:
                "We deliver innovative graphic design solutions that captivate and engage your audience, helping you make a memorable impression in today's competitive market",
            image: DedicatedTeamImg,
        },
        {
            title: "Versatility  ",
            description:
                "From branding and logo design to marketing collateral and digital assets, our graphic design services cater to diverse industries and purposes, ensuring that your designs are versatile and effective. ",
            image: ProcessEnhancementImg,
        },
        {
            title: "Consistency ",
            description:
                "We maintain consistency across all your graphic design assets, ensuring that every piece aligns seamlessly with your brand identity and reinforces your message.",
            image: IndustryInsightImg,
        },
        {
            title: "Quality ",
            description:
                "Quality is our top priority. We meticulously review every design to ensure that it meets the highest standards of craftsmanship and attention to detail.",
            image: ConsistentDeliveryImg,
        }
    ];

    const tailoredServices = [
        {
            title: "Branding and Logo Design:",
            description:
                "Create a strong brand identity with a custom logo and branding materials that reflect your unique personality and values ",
        },
        {
            title: "Marketing Collateral:",
            description:
                " From business cards and brochures to posters and flyers, we design eye-catching marketing materials that leave a lasting impression on your audience",
        },
        {
            title: "Digital Assets:  ",
            description:
                "Enhance your online presence with engaging digital assets, including social media graphics, website banners, and email templates. ",
        },
        {
            title: "Business Process Optimization",
            description:
                " Identify inefficiencies in your business processes and implement solutions to enhance productivity, reduce costs, and improve overall performance. ",
        },
        {
            title: "Change Management",
            description:
                " Implement effective change management strategies to facilitate smooth transitions, minimize resistance, and ensure successful organizational change initiatives",
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
                        Graphic Design
                    </Typography>
                </motion.div>
            </Box>

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
                        CUSTOM DESIGN 
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
                     Our graphic design services are customized to suit your unique requirements, ensuring your brand stands out in today's digital clutter. We work closely with you to understand your objectives and create visually compelling designs that resonate with your audience, helping you leave a lasting impact in the competitive online space.</Typography>
                  </Container>
            

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
                                
                                style={{ width: "80%", height: "80",  borderRadius: "8px" }}
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

export default GraphicDesign;