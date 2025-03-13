import React from "react";
import { Container, Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";

const services = [
  {
    title: "Customized Service",
    description:
      "At Kreate Systems, we offer tailored Business Process Outsourcing (BPO) solutions designed to optimize your operational efficiency and drive business growth. Our expertise lies in understanding your unique requirements and delivering streamlined processes that align seamlessly with your organizational goals.",
    image: "sec/assect/bg.png",
  },
  {
    title: "Dedicated Team",
    description:
      "Our team of seasoned professionals is committed to providing exceptional BPO services, ensuring that your business functions run smoothly and effectively. With a focus on excellence and efficiency, we deliver reliable outsourcing solutions tailored to your specific needs.",
    image: "sec/assect/bg.png",
  },
  {
    title: "Process Enhancement",
    description:
      "We specialize in identifying inefficiencies within your business processes and implementing strategies to optimize workflow, reduce costs, and enhance overall performance.",
    image: "sec/assect/bg.png",
  },
  {
    title: "Industry Insight",
    description:
      "With extensive experience across diverse industries, our consultants bring invaluable insights and expertise to the table. Whether you operate in finance, healthcare, retail, or any other sector.",
    image: "sec/assect/bg.png",
  },
  {
    title: "Consistent Delivery",
    description:
      "At Kreate Systems, consistency is key. We pride ourselves on delivering high-quality BPO services that consistently meet and exceed our clients' expectations. From initial consultation to ongoing support.",
    image: "sec/assect/bg.png",
  },
  {
    title: "Quality Assurance",
    description:
      "Quality is ingrained in everything we do. Our rigorous quality assurance processes guarantee professionalism, integrity, and reliability in every aspect of our BPO services. You can trust us to deliver consistent, high-quality solutions that drive tangible results for your business.",
    image: "sec/assect/bg.png",
  },
];

const AboutBusiness = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia component="img" height="200" image={service.image} alt={service.title} />
              <CardContent>
                <Typography variant="h6" gutterBottom>{service.title}</Typography>
                <Typography variant="body2" color="textSecondary">{service.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AboutBusiness;
