import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  styled,
  Container,
} from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile';


const JobContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(5),
  
  backgroundColor: "white",
  color: "black", 
  
  
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

const Bookkeeper = () => {
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
          paddingBottom: theme => theme.spacing(1),
        }}
      >
        WE'RE HIRING!
      </Typography>

      <Box sx={{ 
        display: "flex", 
        flexDirection: { xs: "column", md: "row" }, 
        gap: { xs: 2, md: 4 },
      }}>
        <Box sx={{ flex: 1, maxWidth: { md: "55%" } }}>
          <SectionTitle variant="h5">Bookkeeper</SectionTitle>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "black" }}>
            Job Details
          </Typography>
          
          <Typography sx={{ mb: 3, fontSize: "1rem", lineHeight: 1.6 }}>
            • <strong>Location:</strong> Innisfail, AB T4G 1N4 <br />
            • <strong>Salary:</strong> $30.00 hourly / 40 hours per week <br />
            • <strong>Terms:</strong> Permanent employment / Full time <br />
            • <strong>Shifts:</strong> Day, Morning <br />
            • <strong>Start Date:</strong> Starts as soon as possible <br />
            • <strong>Benefits:</strong> Health benefits <br />
            • <strong>Vacancies:</strong> 2 positions
          </Typography>

          <SectionTitle variant="h5">Overview</SectionTitle>
          <Box sx={{ mb: 3 }}>
            <Typography component="div" sx={{ fontWeight: 600, mb: 1, color: "#6D4C41", fontSize: "1.2rem" }}>
              Languages
            </Typography>
            <Typography component="div" sx={{ mb: 2 }}>English</Typography>
            <Typography component="div" sx={{ fontWeight: 600, mb: 1, color: "#6D4C41", fontSize: "1.2rem" }}>
              Education
            </Typography>
            <Typography component="div" sx={{ mb: 2 }}>
              • College, CEGEP or other non-university certificate or diploma from a program of 1 year to 2 years <br />
              • or equivalent experience
            </Typography>
            <Typography component="div" sx={{ fontWeight: 600, mb: 1, color: "#6D4C41", fontSize: "1.2rem" }}>
              Experience
            </Typography>
            <Typography component="div">1 year to less than 2 years</Typography>
          </Box>

          <SectionTitle variant="h5">Responsibilities</SectionTitle>
          <Typography sx={{ mb: 3, fontSize: "1rem", lineHeight: 1.6 }}>
            <strong>Tasks:</strong> <br />
            • Calculate and prepare cheques for payroll <br />
            • Calculate fixed assets and depreciation <br />
            • Keep financial records and establish, maintain and balance various accounts using manual and computerized bookkeeping systems <br />
            • Maintain general ledgers and financial statements <br />
            • Post journal entries <br />
            • Prepare other statistical, financial and accounting reports <br />
            • Prepare tax returns <br />
            • Prepare trial balance of books <br />
            • Reconcile accounts
          </Typography>

          <SectionTitle variant="h5">Benefits</SectionTitle>
          <Typography sx={{ mb: 3, fontSize: "1rem", lineHeight: 1.6 }}>
            <strong>Health Benefits:</strong> <br />
            • Dental plan <br />
            • Health care plan
          </Typography>

          <SectionTitle variant="h5">How to apply</SectionTitle>
          <Typography sx={{ mb: 3, fontSize: "1rem", lineHeight: 1.6 }}>
            <strong>By email:</strong> <br />
            kreatesystems8@gmail.com <br />
            Here is what you must include in your application: <br />
            • Cover letter <br />
            <Typography component="div" sx={{ mt: 1 }}>
              This job posting includes screening questions. Please answer the following when applying: <br />
              • Are you available for the advertised start date? <br />
              • Are you currently legally able to work in Canada?
            </Typography>
          </Typography>
        </Box>

        <Box sx={{ 
          width: { xs: "100%", md: "50%" }, 
          p: { xs: 2, md: 4 },
          backgroundColor: "white",
          borderRadius: 2,
        }}>
          <SectionTitle variant="h5">Apply Now</SectionTitle>
          
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            InputProps={{ sx: { color: "black", borderColor: "black" } }}
            InputLabelProps={{ sx: { color: "black" } }}
            sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "black" } } }}
          />
          
          <TextField
            fullWidth
            label="Phone"
            variant="outlined"
            margin="normal"
            InputProps={{ sx: { color: "black", borderColor: "black" } }}
            InputLabelProps={{ sx: { color: "black" } }}
            sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "black" } } }}
          />
          
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            required
            InputProps={{ sx: { color: "black", borderColor: "black" } }}
            InputLabelProps={{ sx: { color: "black" } }}
            sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "black" } } }}
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
            sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "black" } } }}
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
          
          <SubmitButton 
            fullWidth
            variant="contained"
            size="large"
          >
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
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
          </Typography>
        </Box>
      </Box>
    </JobContainer>
  );
};

export default Bookkeeper;