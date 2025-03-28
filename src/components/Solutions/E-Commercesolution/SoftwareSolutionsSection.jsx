import { Container, Typography, Box, Divider } from "@mui/material";

const SoftwareSolutionsSection = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", py: 5 }}>
      <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
        <Divider sx={{ flexGrow: 1, bgcolor: "#A5A585", height: 2, mx: 2 }} />
        <Typography
          variant="h4"
          fontFamily="'Times New Roman', serif"
          textTransform="uppercase"
          sx={{ fontWeight: 500, color: "#A5A585", whiteSpace: "nowrap" }}
        >
          Innovative custom software solutions
        </Typography>
        <Divider sx={{ flexGrow: 1, bgcolor: "#A5A585", height: 2, mx: 2 }} />
      </Box>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ maxWidth: "80%", mx: "auto" }}
      >
        At Kreate Solution Systems, we understand the pivotal role e-commerce
        plays in modern businesses&apos; success. We believe that a well-crafted
        online presence can significantly impact a company’s growth and
        profitability.
      </Typography>
    </Container>
  );
};

export default SoftwareSolutionsSection;
