import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import AboutImage from "../../assets/Bg.png"; 

const AboutKreateSystem = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
        ABOUT KREATE SYSTEMS
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Our Company
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                We are a leading IT company that specializes in web development and design. 
                Our team of experts has years of experience in creating high-quality websites 
                that are user-friendly and visually appealing.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ boxShadow: 3, mt: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Our Expertise
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                We offer a wide range of IT services including web development, web design, 
                e-commerce development, mobile app development, and digital marketing. 
                Our team is dedicated to providing customized solutions that meet our clients' specific needs.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ boxShadow: 3, mt: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Our Team
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Our team is made up of highly skilled and experienced professionals who are passionate 
                about what they do. We work together to ensure that our clients receive the best 
                possible service and results.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={AboutImage} 
            alt="Team working together"
            style={{ width: "100%", height: "100%", borderRadius: "8px", boxShadow: "3px 3px 10px rgba(0,0,0,0.1)" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutKreateSystem;
