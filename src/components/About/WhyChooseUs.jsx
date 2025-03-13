import React from "react";
import { Box, Grid, Typography } from "@mui/material";

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
    <Box sx={{ textAlign: "center", padding: "50px 20px" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        WHY CHOOSE US?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {reasons.map((reason, index) => (
          <Grid item xs={12} md={5} key={index}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              {reason.title}
            </Typography>
            <Typography variant="body1">{reason.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
