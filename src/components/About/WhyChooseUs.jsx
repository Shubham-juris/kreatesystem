import React from "react";
import { Box, Grid, Typography, Paper, Container } from "@mui/material";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Enterprise Quality at a Freelancer Price",
      description:
        "We are graduates trained in the latest technologies. Since we are a new company with minimal overhead, we are able to pass on these savings to our clients, without taking away an ounce of quality.",
    },
    {
      title: "Local Business",
      description:
        "You've acknowledged the cost advantage of overseas developers/designers but highlighted the importance of face-to-face communication for clients. You assure clients that with your company, they won't face communication challenges post-payment and emphasize customer satisfaction as your top priority.",
    },
    {
      title: "One Stop Shop",
      description:
        "Our team is diverse enough to provide you with all your digital solution needs. We have a solution for you! Pair together multiple solutions, whether it's a logo and a website combo. Please contact us for more information.",
    },
    {
      title: "Top Notch Customer Service",
      description:
        "Encourage customers to maintain a relationship with your company, highlighting your willingness to assist with any needs, from website edits to logo file formats. Emphasize dedication to customer satisfaction and invite them to explore testimonials showcasing your exemplary service.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#F9F8F4", py: 8 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 4,
        }}
      >
        <Box sx={{ flexGrow: 1, height: "2px", bgcolor: "#8B8B5E" }} />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#8B8B5E",
            textAlign: "center",
            mx: { xs: 1, sm: 2 },
          }}
        >
          WHY CHOOSE US?
        </Typography>
        <Box sx={{ flexGrow: 1, height: "2px", bgcolor: "#8B8B5E" }} />
      </Box>

      <Container>
        <Grid container spacing={4} justifyContent="center">
          {reasons.map((reason, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: "16px",
                  backgroundColor: "#fff",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#8B7E66", mb: 1 }}
                >
                  {reason.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {reason.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
