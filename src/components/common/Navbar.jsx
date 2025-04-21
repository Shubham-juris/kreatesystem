import React, { useState, useEffect } from "react";
import {
  AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton,
  ListItemText, Toolbar, Typography, Button, Menu, MenuItem, useMediaQuery, Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useTheme } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import { Link, useLocation } from "react-router-dom";

const DRAWER_WIDTH = 245;
const NAV_ITEMS = [
  "Home",
  "About",
  "SERVICES",
  "SOLUTIONS",
  "Contact Us",
  "CASE STUDIES",
  "Careers",
];

const slideDown = keyframes`
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

function Navbar({ window }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElServices, setAnchorElServices] = useState(null);
  const [anchorElSolutions, setAnchorElSolutions] = useState(null);
  const [anchorElCaseStudies, setAnchorElCaseStudies] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  const isServicesOpen = Boolean(anchorElServices);
  const isSolutionsOpen = Boolean(anchorElSolutions);
  const isCaseStudiesOpen = Boolean(anchorElCaseStudies);

  useEffect(() => {
    setAnchorElServices(null);
    setAnchorElSolutions(null);
    setAnchorElCaseStudies(null);
    setMobileOpen(false);
  }, [location]);

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

  const navButtonStyle = (path) => ({
    color: location.pathname === path ? "#ff6b6b" : "#283878",
    fontSize: "1rem",
    fontWeight: "bold",
    mx: 1,
    textTransform: "uppercase",
    borderBottom: location.pathname === path ? "3px solid #ff6b6b" : "none",
  });

  const menuItemStyle = (path) => ({
    color: location.pathname === path ? "#ff6b6b" : "#fff",
    fontWeight: location.pathname === path ? "bold" : "normal",
    backgroundColor: location.pathname === path ? "rgba(255, 107, 107, 0.1)" : "transparent",
    "&:hover": {
      backgroundColor: location.pathname === path ? "rgba(255, 107, 107, 0.2)" : "rgba(255, 255, 255, 0.1)",
    },
  });

  const menuStyle = {
    "& .MuiPaper-root": {
      backgroundColor: "#111",
      color: "#fff",
      borderRadius: "6px",
      minWidth: "220px",
    },
    "& .MuiMenuItem-root": {
      justifyContent: "flex-start",
    },
  };

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
            {["SERVICES", "SOLUTIONS", "CASE STUDIES"].includes(item) ? (
              <>
                <ListItemButton onClick={(e) => handleMenuOpen(e, item)}>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                      color: "#283878",
                      textTransform: "uppercase",
                    }}
                  />
                  {(item === "SERVICES" && isServicesOpen) ||
                  (item === "SOLUTIONS" && isSolutionsOpen) ||
                  (item === "CASE STUDIES" && isCaseStudiesOpen) ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </ListItemButton>
                <Menu
                  anchorEl={
                    item === "SERVICES"
                      ? anchorElServices
                      : item === "SOLUTIONS"
                      ? anchorElSolutions
                      : anchorElCaseStudies
                  }
                  open={
                    item === "SERVICES"
                      ? isServicesOpen
                      : item === "SOLUTIONS"
                      ? isSolutionsOpen
                      : isCaseStudiesOpen
                  }
                  onClose={() => handleMenuClose(item)}
                  sx={menuStyle}
                >
                  {item === "SERVICES" && (
                    <>
                      <MenuItem component={Link} to="/businessheader" sx={menuItemStyle("/businessheader")}>
                        Business Process
                      </MenuItem>
                      <MenuItem component={Link} to="/consultingservices" sx={menuItemStyle("/consultingservices")}>
                        Consulting Service
                      </MenuItem>
                      <MenuItem component={Link} to="/digitalmarketing" sx={menuItemStyle("/digitalmarketing")}>
                        Digital Marketing
                      </MenuItem>
                      <MenuItem component={Link} to="/graphicdesign" sx={menuItemStyle("/graphicdesign")}>
                        Graphic Design
                      </MenuItem>
                      <MenuItem component={Link} to="/UiUxDesign" sx={menuItemStyle("/UiUxDesign")}>
                        UI/UX Design
                      </MenuItem>
                      <MenuItem component={Link} to="/webdevelopement" sx={menuItemStyle("/webdevelopement")}>
                        Web Development
                      </MenuItem>
                    </>
                  )}
                  {item === "SOLUTIONS" && (
                    <>
                      <MenuItem component={Link} to="/ecommerceheader" sx={menuItemStyle("/ecommerceheader")}>
                        E-commerce Solutions
                      </MenuItem>
                      <MenuItem component={Link} to="/softwaresolutionssection" sx={menuItemStyle("/softwaresolutionssection")}>
                        Software Development
                      </MenuItem>
                    </>
                  )}
                  {item === "CASE STUDIES" && (
                    <MenuItem component={Link} to="/" sx={menuItemStyle("/")}>
                      IT Cases
                    </MenuItem>
                  )}
                </Menu>
              </>
            ) : (
              <ListItemButton component={Link} to={`/${item.toLowerCase().replace(/\s+/g, "")}`}>
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
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            {isMobile && (
              <IconButton edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
                <MenuIcon sx={{ color: "#283878", fontSize: "2rem" }} />
              </IconButton>
            )}
            <Typography variant="h5" fontWeight="bold" sx={{ color: "#283878" }}>
              Kreatesystem
            </Typography>
            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {NAV_ITEMS.map((item) =>
                  ["SERVICES", "SOLUTIONS", "CASE STUDIES"].includes(item) ? (
                    <Box key={item}>
                      <Button onClick={(e) => handleMenuOpen(e, item)} sx={navButtonStyle("")}>
                        {item}
                        {(item === "SERVICES" && isServicesOpen) ||
                        (item === "SOLUTIONS" && isSolutionsOpen) ||
                        (item === "CASE STUDIES" && isCaseStudiesOpen) ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )}
                      </Button>
                      <Menu
                        anchorEl={
                          item === "SERVICES"
                            ? anchorElServices
                            : item === "SOLUTIONS"
                            ? anchorElSolutions
                            : anchorElCaseStudies
                        }
                        open={
                          item === "SERVICES"
                            ? isServicesOpen
                            : item === "SOLUTIONS"
                            ? isSolutionsOpen
                            : isCaseStudiesOpen
                        }
                        onClose={() => handleMenuClose(item)}
                        sx={menuStyle}
                      >
                        {item === "SERVICES" && (
                          <>
                            <MenuItem component={Link} to="/businessheader" sx={menuItemStyle("/businessheader")}>
                              Business Process
                            </MenuItem>
                            <MenuItem component={Link} to="/consultingservices" sx={menuItemStyle("/consultingservices")}>
                              Consulting Service
                            </MenuItem>
                            <MenuItem component={Link} to="/digitalmarketing" sx={menuItemStyle("/digitalmarketing")}>
                              Digital Marketing
                            </MenuItem>
                            <MenuItem component={Link} to="/graphicdesign" sx={menuItemStyle("/graphicdesign")}>
                              Graphic Design
                            </MenuItem>
                            <MenuItem component={Link} to="/UiUxDesign" sx={menuItemStyle("/UiUxDesign")}>
                              UI/UX Design
                            </MenuItem>
                            <MenuItem component={Link} to="/webdevelopement" sx={menuItemStyle("/webdevelopement")}>
                              Web Development
                            </MenuItem>
                          </>
                        )}
                        {item === "SOLUTIONS" && (
                          <>
                            <MenuItem component={Link} to="/ecommerceheader" sx={menuItemStyle("/ecommerceheader")}>
                              E-commerce Solutions
                            </MenuItem>
                            <MenuItem component={Link} to="/softwaresolutionssection" sx={menuItemStyle("/softwaresolutionssection")}>
                              Software Development
                            </MenuItem>
                          </>
                        )}
                        {item === "CASE STUDIES" && (
                          <MenuItem component={Link} to="/" sx={menuItemStyle("/")}>
                            IT Cases
                          </MenuItem>
                        )}
                      </Menu>
                    </Box>
                  ) : (
                    <Button
                      key={item}
                      component={Link}
                      to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                      sx={navButtonStyle(`/${item.toLowerCase().replace(/\s+/g, "")}`)}
                    >
                      {item}
                    </Button>
                  )
                )}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;