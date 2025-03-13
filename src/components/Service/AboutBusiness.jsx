import React from "react";
import { Container, Grid, Typography } from "@mui/material";

// Import images
import CustomizedServiceImg from "../../assets/Bg.png";
import DedicatedTeamImg from "../../assets/Bg.png";
import ProcessEnhancementImg from "../../assets/Bg.png";
import IndustryInsightImg from "../../assets/Bg.png";
import ConsistentDeliveryImg from "../../assets/Bg.png";
import QualityAssuranceImg from "../../assets/Bg.png";
import CustomerSupportImg from "../../assets/Bg.png";
import DataEntryImg from "../../assets/Bg.png";
import FinanceAccountingImg from "../../assets/Bg.png";
import HumanResourcesImg from "../../assets/Bg.png";
import BackOfficeImg from "../../assets/Bg.png";

const services = [
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

const AboutBusiness = () => {
  return (
    <Container sx={{ py: 5 }}>
      {services.map((service, index) => (
        <Grid
          container
          spacing={4}
          key={index}
          alignItems="center"
          sx={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
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
  );
};

export default AboutBusiness;
