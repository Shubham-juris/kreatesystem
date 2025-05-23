import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import WebImage from "../../assets/WebDevelopementimg/img1.jpg";
import AppImage from "../../assets/DigitalMarketingImg/img4.jpg";
import SocialImage from "../../assets/uiuxDesignimg/img1.jpg";
import MarketingImage from "../../assets/GraphicDesign/img4.jpg";
import SupportImage from "../../assets/uiuxDesignimg/img5.jpg";
import CRMImage from "../../assets/DigitalMarketingImg/img5.jpg";

const ServiceCard = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Box sx={{ flexGrow: 1, height: "2px", bgcolor: "#8B8B5E" }} />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#8B8B5E",
            mx: 2,
            textAlign: "center",
            py: 4,
          }}
        >
          How can we help you?
        </Typography>
        <Box sx={{ flexGrow: 1, height: "2px", bgcolor: "#8B8B5E" }} />
      </Box>

      <Container>
        <Grid container spacing={4} justifyContent="center" sx={{ py: 4 }}>
          {[
            {
              image: WebImage,
              title: "Web Development",
              description:
                "A small business MUST have an online presence. Our packages range from simple websites to full e-commerce platforms.",
            },
            {
              image: AppImage,
              title: "App Development",
              description:
                "We build hybrid apps, ensuring you get an app that runs on both iOS and Android at an affordable price.",
            },
            {
              image: SocialImage,
              title: "Social Media",
              description:
                "We manage and update your social media accounts to help retain active users on your platforms.",
            },
            {
              image: MarketingImage,
              title: "Marketing",
              description:
                "We consult and manage businesses on leveraging digital marketing on Google My Business and Facebook.",
            },
            {
              image: SupportImage,
              title: "Support & Maintenance",
              description:
                "We host and maintain your website, including content updates and existing website improvements.",
            },
            {
              image: CRMImage,
              title: "Customer Relationship Management",
              description:
                "Enhance customer relationships with our advanced CRM solutions to streamline communication and drive growth.",
            },
          ].map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 2,
                  borderRadius: 8,
                  boxShadow: 1,
                  height: "100%",
                }}
              >
                <CardMedia
                  component="img"
                  image={service.image}
                  alt={service.title}
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    objectFit: "cover",
                    mb: 2,
                  }}
                />
                <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{ color: "#8B7E66" }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceCard;
