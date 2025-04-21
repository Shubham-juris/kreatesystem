import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  TextField,
  Button,
  styled,
  Container,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const JobContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(5),
  paddingTop: theme.spacing(12), 
  backgroundColor: "white", 
  color: "black", 
  minHeight: "calc(100vh - 64px)", 
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(10),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  color: "#6D4C41", 
  fontSize: "1.5rem",
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  fontWeight: 700,
  backgroundColor: "#D4E157", 
  color: "black",
  borderRadius: "50px",
  textTransform: "uppercase",
  "&:hover": {
    backgroundColor: "#C0CA33",
    color: "black",
  },
}));

const Receptionist = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    event.target.value = null; 
  };

  const handleAttachClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <JobContainer component="main" maxWidth="lg">
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: 800,
          letterSpacing: "2px",
          mb: 4,
          color: "#6D4C41",
          textTransform: "uppercase",
          borderBottom: "2px solid #6D4C41",
          paddingBottom: (theme) => theme.spacing(1),
        }}
      >
        WE'RE HIRING!
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 2, md: 4 },
        }}
      >
      
        <Box sx={{ flex: 1, maxWidth: { md: "55%" } }}>
          <SectionTitle variant="h5">Receptionist</SectionTitle>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "black" }}>
            Job Details
          </Typography>

          <Typography sx={{ mb: 3, fontSize: "1rem", lineHeight: 1.6 }}>
            • <strong>Location:</strong> Innisfail, AB T4G 1N4 <br />
            • <strong>Salary:</strong> 21.00 hourly / 40 hours per week <br />
            • <strong>Terms of employment:</strong> Permanent employment, Full time <br />
            • <strong>Day, Morning</strong> <br />
            • <strong>Start date:</strong> Starts as soon as possible <br />
            • <strong>Benefits:</strong> Health benefits, Other benefits <br />
            • <strong>vacancies:</strong> 1 vacancy
          </Typography>

          <SectionTitle variant="h5">Overview</SectionTitle>
          <Box sx={{ mb: 3 }}>
            <Typography
              component="div"
              sx={{ fontWeight: 600, mb: 1, color: "#6D4C41", fontSize: "1.2rem" }}
            >
              Languages
            </Typography>
            <Typography component="div" sx={{ mb: 2 }}>
              English
            </Typography>
            <Typography
              component="div"
              sx={{ fontWeight: 600, mb: 1, color: "#6D4C41", fontSize: "1.2rem" }}
            >
              Education
            </Typography>
            <Typography component="div" sx={{ mb: 2 }}>
              • College, CEGEP or other non-university certificate or diploma from a program of 3 months to less than 1 year <br />
              • or equivalent experience
            </Typography>
            <Typography
              component="div"
              sx={{ fontWeight: 600, mb: 1, color: "#6D4C41", fontSize: "1.2rem" }}
            >
              Experience
            </Typography>
            <Typography component="div">1 to less than 7 months</Typography>
          </Box>

          <SectionTitle variant="h5">Responsibilities</SectionTitle>
          <Typography sx={{ mb: 3, fontSize: "1rem", lineHeight: 1.6 }}>
            <strong>Tasks:</strong> <br />
            • Greet people and direct them to contacts or service areas <br />
            • Provide basic information to clients and the public <br />
            • Obtain and process information required to provide customer service <br />
            • Operate switchboard or telephone system <br />
            • Order office supplies <br />
            • Record and relay information <br />
            • Schedule and confirm appointments <br />
            • Maintain work records and logs <br />
            • Perform clerical duties, such as filing and sorting and distributing mail <br />
            • Answer telephone and relay telephone calls and messages <br />
            • Perform data entry <br />
            • Provide customer service
          </Typography>

          <SectionTitle variant="h5">Additional Information</SectionTitle>
          <Typography sx={{ mb: 3, fontSize: "1rem", lineHeight: 1.6 }}>
            <strong>Work conditions and physical capabilities:</strong> <br />
            • Ability to work independently <br />
            • Fast-paced environment <br />
            • Repetitive tasks <br />
            • Attention to detail
          </Typography>

          <SectionTitle variant="h5">Benefits</SectionTitle>
          <Typography sx={{ mb: 3, fontSize: "1rem", lineHeight: 1.6 }}>
            <strong>Health benefits:</strong> <br />
            • Dental plan <br />
            • Health care plan <br />
            • Vision care benefits <br />
            <strong>Other benefits:</strong> <br />
            • Free parking available
          </Typography>

          <SectionTitle variant="h5">How to apply</SectionTitle>
          <Typography sx={{ mb: 3, fontSize: "1rem", lineHeight: 1.6 }}>
            <strong>By email:</strong> <br />
            kreatesystems8@gmail.com <br />
            <Typography component="div" sx={{ mt: 1 }}>
              <strong>How-to-apply instructions:</strong> <br />
              Here is what you must include in your application: <br />
              • Cover letter <br />
              This job posting includes screening questions. Please answer the following questions when applying: <br />
              • Are you currently legally able to work in Canada? <br />
              • Are you willing to relocate for this position?
            </Typography>
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            p: { xs: 2, md: 4 },
            backgroundColor: "white",
            borderRadius: 2,
          }}
        >
          <SectionTitle variant="h5">Apply Now</SectionTitle>

          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            InputProps={{ sx: { color: "black", borderColor: "black" } }}
            InputLabelProps={{ sx: { color: "black" } }}
            sx={{
              "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "black" } },
            }}
          />

          <TextField
            fullWidth
            label="Phone"
            variant="outlined"
            margin="normal"
            InputProps={{ sx: { color: "black", borderColor: "black" } }}
            InputLabelProps={{ sx: { color: "black" } }}
            sx={{
              "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "black" } },
            }}
          />

          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            required
            InputProps={{ sx: { color: "black", borderColor: "black" } }}
            InputLabelProps={{ sx: { color: "black" } }}
            sx={{
              "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "black" } },
            }}
          />

          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            margin="normal"
            multiline
            rows={6}
            InputProps={{ sx: { color: "black", borderColor: "black" } }}
            InputLabelProps={{ sx: { color: "black" } }}
            sx={{
              "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "black" } },
            }}
          />

          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
            multiple
          />

          <Typography
            sx={{
              my: 2,
              display: "flex",
              alignItems: "center",
              color: "#6D4C41",
              cursor: "pointer",
              "&:hover": { color: "#D4E157" },
            }}
            onClick={handleAttachClick}
          >
            <AttachFileIcon sx={{ mr: 1, color: "inherit" }} /> Attach Resume
            <Typography sx={{ ml: "auto", fontSize: "0.9rem", color: "black" }}>
              Attachments ({selectedFiles.length})
            </Typography>
          </Typography>

          <SubmitButton fullWidth variant="contained" size="large">
            Submit Application
          </SubmitButton>

          <Typography
            sx={{
              fontSize: "0.75rem",
              textAlign: "center",
              mt: 3,
              color: "#666",
            }}
          >
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of
            Service apply.
          </Typography>
        </Box>
      </Box>
    </JobContainer>
  );
};

export default Receptionist;