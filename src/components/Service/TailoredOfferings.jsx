import React from 'react';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  Divider 
} from '@mui/material';
import TailoredOfferingsImg from "../../assets/Bg.png";

const TailoredOfferings = () => {
  const services = [
    {
      title: "Customer Support Outsourcing",
      description: "Enhance customer satisfaction and loyalty with our premium outsourced customer support services, featuring 24/7 helpdesk support and seamless multichannel assistance."
    },
    {
      title: "Data Entry and Management",
      description: "Streamline your operations with our meticulous data entry processes and robust data management solutions, ensuring precision and reliability."
    },
    {
      title: "Finance and Accounting Outsourcing",
      description: "Optimize financial efficiency with our comprehensive outsourcing services, including accounts payable/receivable, bookkeeping, and financial reporting."
    },
    {
      title: "Human Resources Outsourcing",
      description: "Elevate HR operations with our expert solutions in payroll management, benefits administration, and regulatory compliance."
    },
    {
      title: "Back Office Operations Outsourcing",
      description: "Maximize productivity by delegating administrative tasks, document processing, and inventory management to our skilled professionals."
    }
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: 2, sm: 4, md: 6 },
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        maxWidth: '1400px',
        margin: '0 auto',
        my: 4,
      }}
    >
      {/* Left Section: Text Content */}
      <Box
        sx={{
          flex: 1,
          pr: { md: 6 },
          mb: { xs: 4, md: 0 },
          maxWidth: { md: '50%' },
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 700,
            color: '#1a237e',
            mb: 3,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            lineHeight: 1.2,
          }}
        >
          Tailored Offerings
          <Divider
            sx={{
              width: '80px',
              borderColor: '#3f51b5',
              borderWidth: '2px',
              mt: 1,
              mb: 3,
            }}
          />
        </Typography>

        <List sx={{ py: 0 }}>
          {services.map((service, index) => (
            <ListItem
              key={index}
              sx={{
                py: 2,
                px: 0,
                borderBottom: '1px solid #eee',
                '&:last-child': { borderBottom: 'none' },
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(63, 81, 181, 0.04)',
                  transform: 'translateX(8px)',
                },
              }}
            >
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: '#333',
                      fontSize: '1.1rem',
                    }}
                  >
                    {service.title}
                  </Typography>
                }
                secondary={
                  <Typography
                    sx={{
                      color: '#666',
                      mt: 0.5,
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Right Section: Image */}
      <Box
        sx={{
          flex: 1,
          maxWidth: { md: '50%' },
          display: { xs: 'none', sm: 'block' },
          minHeight: { sm: '400px', md: '100px' }, // Increased minimum height
        }}
      >
        <Box
          component="img"
          src={TailoredOfferingsImg}
          alt="Professional team collaboration"
          sx={{
            width: '100%',
            height: { sm: '400px', md: '500px' }, // Explicitly set taller height
            borderRadius: 2,
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
            objectFit: 'cover', 
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default TailoredOfferings;