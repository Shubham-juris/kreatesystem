import React, { useState } from "react";
import {AppBar,Box,CssBaseline,Divider,Drawer,IconButton,List,ListItem,ListItemButton,ListItemText,Toolbar,Typography,Button,Menu,MenuItem,useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useTheme } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";

// Constants
const DRAWER_WIDTH = 245;
const NAV_ITEMS = [
  "Home",
  "About",
  "CASE STUDIES",
  "SOLUTIONS",
  "Contact Us",
  "SERVICES",
  "Careers",
];

// Animation
const slideDown = keyframes`
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

// Styles
const navButtonStyle = {
  color: "#283878",
  fontSize: "1rem",
  fontWeight: "bold",
  mx: 1,
  textTransform: "uppercase",
  "&:hover": {
    color: "#ff6b6b",
    "&::after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "3px",
      backgroundColor: "#ff6b6b",
      bottom: "-6px",
      left: 0,
    },
  },
};

const menuStyle = {
  "& .MuiPaper-root": {
    backgroundColor: "#111",
    color: "#fff",
    borderRadius: "6px",
    minWidth: "220px",
  },
  "& .MuiMenuItem-root": {
    justifyContent: "flex-start", // Left-align menu items
  },
};

function Navbar({ window }) {
  // State Management
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElServices, setAnchorElServices] = useState(null);
  const [anchorElSolutions, setAnchorElSolutions] = useState(null);
  const [anchorElCaseStudies, setAnchorElCaseStudies] = useState(null);

  // Theme and Responsive Handling
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Menu State Booleans
  const isServicesOpen = Boolean(anchorElServices);
  const isSolutionsOpen = Boolean(anchorElSolutions);
  const isCaseStudiesOpen = Boolean(anchorElCaseStudies);

  // Event Handlers
  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
  
  const handleMenuOpen = (event, type) => {
    switch (type) {
      case "SERVICES":
        setAnchorElServices(event.currentTarget);
        break;
      case "SOLUTIONS":
        setAnchorElSolutions(event.currentTarget);
        break;
      case "CASE STUDIES":
        setAnchorElCaseStudies(event.currentTarget);
        break;
      default:
        break;
    }
  };

  const handleMenuClose = (type) => {
    switch (type) {
      case "SERVICES":
        setAnchorElServices(null);
        break;
      case "SOLUTIONS":
        setAnchorElSolutions(null);
        break;
      case "CASE STUDIES":
        setAnchorElCaseStudies(null);
        break;
      default:
        break;
    }
  };

  // Drawer Content
  const drawerContent = (
    <Box sx={{ textAlign: "left", p: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h6" sx={{ color: "#283878", fontWeight: "bold" }}>
          Kreatesystem
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon sx={{ color: "#283878" }} />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item} disablePadding>
            {item === "SERVICES" ? (
              <>
                <ListItemButton onClick={(e) => handleMenuOpen(e, "SERVICES")}>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                      color: "#283878",
                      textTransform: "uppercase",
                    }}
                  />
                  {isServicesOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItemButton>
                <Menu
                  anchorEl={anchorElServices}
                  open={isServicesOpen}
                  onClose={() => handleMenuClose("SERVICES")}
                  sx={menuStyle}
                >
                  <MenuItem component={Link} to="/businessheader" onClick={() => handleMenuClose("SERVICES")}>
                    Business Process
                  </MenuItem>
                  <MenuItem component={Link} to="/consultingservices" onClick={() => handleMenuClose("SERVICES")}>
                    Consulting Service
                  </MenuItem>
                  <MenuItem component={Link} to="/digitalmarketing" onClick={() => handleMenuClose("SERVICES")}>
                    Digital Marketing
                  </MenuItem>
                  <MenuItem component={Link} to="/graphicdesign" onClick={() => handleMenuClose("SERVICES")}>
                    Graphic Design
                  </MenuItem>
                  <MenuItem component={Link} to="/UiUxDesign" onClick={() => handleMenuClose("SERVICES")}>
                    UI/UX Design
                  </MenuItem>
                  <MenuItem component={Link} to="/webdevelopement" onClick={() => handleMenuClose("SERVICES")}>
                    Web Development
                  </MenuItem>
                </Menu>
              </>
            ) : item === "SOLUTIONS" ? (
              <>
                <ListItemButton onClick={(e) => handleMenuOpen(e, "SOLUTIONS")}>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                      color: "#283878",
                      textTransform: "uppercase",
                    }}
                  />
                  {isSolutionsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItemButton>
                <Menu
                  anchorEl={anchorElSolutions}
                  open={isSolutionsOpen}
                  onClose={() => handleMenuClose("SOLUTIONS")}
                  sx={menuStyle}
                >
                  <MenuItem component={Link} to="/ecommerceheader" onClick={() => handleMenuClose("SOLUTIONS")}>
                    E-commerce Solutions
                  </MenuItem>
                  <MenuItem component={Link} to="/softwaresolutionssection" onClick={() => handleMenuClose("SOLUTIONS")}>
                    Software Development
                  </MenuItem>
                </Menu>
              </>
            ) : item === "CASE STUDIES" ? (
              <>
                <ListItemButton onClick={(e) => handleMenuOpen(e, "CASE STUDIES")}>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                      color: "#283878",
                      textTransform: "uppercase",
                    }}
                  />
                  {isCaseStudiesOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItemButton>
                <Menu
                  anchorEl={anchorElCaseStudies}
                  open={isCaseStudiesOpen}
                  onClose={() => handleMenuClose("CASE STUDIES")}
                  sx={menuStyle}
                >
                  <MenuItem component={Link} to="/" onClick={() => handleMenuClose("CASE STUDIES")}>
                    IT Cases
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <ListItemButton
                component={Link}
                to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    color: "#283878",
                    textTransform: "uppercase",
                  }}
                />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          animation: `${slideDown} 0.8s ease-out`,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderBottom: "3px solid #283878",
        }}
        component="nav"
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon sx={{ color: "#283878", fontSize: "2rem" }} />
            </IconButton>
          )}
          <Typography
            variant="h5"
            fontWeight="bold"
            component="div"
            sx={{ color: "#283878", flexGrow: 1 }}
          >
            Kreatesystem
          </Typography>
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {NAV_ITEMS.map((item) =>
                item === "SERVICES" ? (
                  <Box key={item}>
                    <Button
                      onClick={(e) => handleMenuOpen(e, "SERVICES")}
                      sx={navButtonStyle}
                    >
                      {item} {isServicesOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </Button>
                    <Menu
                      anchorEl={anchorElServices}
                      open={isServicesOpen}
                      onClose={() => handleMenuClose("SERVICES")}
                      MenuListProps={{ onMouseLeave: () => handleMenuClose("SERVICES") }}
                      sx={menuStyle}
                    >
                      <MenuItem component={Link} to="/businessheader" onClick={() => handleMenuClose("SERVICES")}>
                        Business Process
                      </MenuItem>
                      <MenuItem component={Link} to="/consultingservices" onClick={() => handleMenuClose("SERVICES")}>
                        Consulting Service
                      </MenuItem>
                      <MenuItem component={Link} to="/digitalmarketing" onClick={() => handleMenuClose("SERVICES")}>
                        Digital Marketing
                      </MenuItem>
                      <MenuItem component={Link} to="/graphicdesign" onClick={() => handleMenuClose("SERVICES")}>
                        Graphic Design
                      </MenuItem>
                      <MenuItem component={Link} to="/UiUxDesign" onClick={() => handleMenuClose("SERVICES")}>
                        UI/UX Design
                      </MenuItem>
                      <MenuItem component={Link} to="/webdevelopement" onClick={() => handleMenuClose("SERVICES")}>
                        Web Development
                      </MenuItem>
                    </Menu>
                  </Box>
                ) : item === "SOLUTIONS" ? (
                  <Box key={item}>
                    <Button
                      onClick={(e) => handleMenuOpen(e, "SOLUTIONS")}
                      sx={navButtonStyle}
                    >
                      {item} {isSolutionsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </Button>
                    <Menu
                      anchorEl={anchorElSolutions}
                      open={isSolutionsOpen}
                      onClose={() => handleMenuClose("SOLUTIONS")}
                      MenuListProps={{ onMouseLeave: () => handleMenuClose("SOLUTIONS") }}
                      sx={menuStyle}
                    >
                      <MenuItem component={Link} to="/ecommerceheader" onClick={() => handleMenuClose("SOLUTIONS")}>
                        E-commerce Solutions
                      </MenuItem>
                      <MenuItem component={Link} to="/softwaresolutionssection" onClick={() => handleMenuClose("SOLUTIONS")}>
                        Software Development
                      </MenuItem>
                    </Menu>
                  </Box>
                ) : item === "CASE STUDIES" ? (
                  <Box key={item}>
                    <Button
                      onClick={(e) => handleMenuOpen(e, "CASE STUDIES")}
                      sx={navButtonStyle}
                    >
                      {item} {isCaseStudiesOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </Button>
                    <Menu
                      anchorEl={anchorElCaseStudies}
                      open={isCaseStudiesOpen}
                      onClose={() => handleMenuClose("CASE STUDIES")}
                      MenuListProps={{ onMouseLeave: () => handleMenuClose("CASE STUDIES") }}
                      sx={menuStyle}
                    >
                      <MenuItem component={Link} to="/" onClick={() => handleMenuClose("CASE STUDIES")}>
                        IT Cases
                      </MenuItem>
                    </Menu>
                  </Box>
                ) : (
                  <Button
                    key={item}
                    component={Link}
                    to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                    sx={navButtonStyle}
                  >
                    {item}
                  </Button>
                )
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
              background: "#f8f9fa",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;