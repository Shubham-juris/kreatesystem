import React, { useState } from "react";
import PropTypes from "prop-types";
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Link,
  styled,
  Container,
  Divider,
} from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile';

const JobContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(5),
  paddingTop: theme.spacing(12),
  backgroundColor: "white",
  color: "black", 
  [theme.breakpoints.down('sm')]: {
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

const OfficeClerk = () => {
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
        {/* Job Details Section */}
        <Box sx={{ flex: 1, maxWidth: { md: "55%" } }}>
          <SectionTitle variant="h5">Office Clerk</SectionTitle>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "black" }}>
            Job Details
          </Typography>
          
          <Typography sx={{ mb: 3, fontSize: "1rem", lineHeight: 1.6 }}>
            • <strong>Location:</strong> Innisfail, AB T4G 1N4 <br />
            • <strong>Salary:</strong> $25.50 hourly / 40 hours per week <br />
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
              • Secondary (high) school graduation certificate <br />
              • or equivalent experience
            </Typography>
            <Typography component="div" sx={{ fontWeight: 600, mb: 1, color: "#6D4C41", fontSize: "1.2rem" }}>
              Experience
            </Typography>
            <Typography component="div">1 to less than 7 months</Typography>
          </Box>

          <SectionTitle variant="h5">Responsibilities</SectionTitle>
          <Typography sx={{ mb: 3, fontSize: "1rem", lineHeight: 1.6 }}>
            <strong>Tasks:</strong> <br />
            • Type and proofread correspondence, forms and other documents <br />
            • Receive and forward telephone or electronic enquiries <br />
            • Work on reports from manual or electronic files, inventories and databases <br />
            • Sort, process and verify applications, receipts and other documents <br />
            • Process incoming and outgoing mail manually or electronically <br />
            • Send and receive messages <br />
            • Perform basic bookkeeping tasks <br />
            • Prepare invoices and bank deposits <br />
            • Photocopy and collate documents for distribution, mailing and filing <br />
            • Order office supplies and maintain inventory <br />
            • Perform data entry <br />
            • Maintain files according to retention and disposal schedules <br />
            • Locate and retrieve files requested <br />
            • Organize and schedule office work <br />
            • Prepare and monitor contracts and budgets <br />
            • Store, update and retrieve financial data
          </Typography>

          <SectionTitle variant="h5">Benefits</SectionTitle>
          <Typography sx={{ mb: 3, fontSize: "1rem", lineHeight: 1.6 }}>
            <strong>Health Benefits:</strong> <br />
            • Dental plan <br />
            • Health care plan
          </Typography>

          <SectionTitle variant="h5">Who can apply to this job?</SectionTitle>
          <Typography sx={{ mb: 3, fontSize: "1rem", lineHeight: 1.6 }}>
            <strong>Only apply to this job if:</strong> <br />
            • Canadian citizen, permanent or temporary resident <br />
            • Valid Canadian work permit <br />
            <Typography component="span" sx={{ mt: 1, display: "block", fontStyle: "italic", color: "#666" }}>
              If not authorized to work in Canada, do not apply. Employer will not respond.
            </Typography>
          </Typography>

          <SectionTitle variant="h5">How-to-apply instructions</SectionTitle>
          <Typography sx={{ mb: 3, fontSize: "1rem", lineHeight: 1.6 }}>
            
           Kreatesystems8@gmail.com 
           <br />
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
          width: { xs: "100%", md: "40%" }, 
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
          
          
        </Box>
      </Box>
    </JobContainer>
  );
};


export default OfficeClerk;