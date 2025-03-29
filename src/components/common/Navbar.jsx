import * as React from "react";
import { useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact Us", "Careers"];

const slideDown = keyframes`
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }`;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [anchorElCaseStudies, setAnchorElCaseStudies] = useState(null);
  const openCaseStudies = Boolean(anchorElCaseStudies);

  const [anchorElServices, setAnchorElServices] = useState(null);
  const openServices = Boolean(anchorElServices);

  const handleClickServices = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleCloseServices = () => setAnchorElServices(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickCaseStudies = (event) => {
    setAnchorElCaseStudies(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseCaseStudies = () => {
    setAnchorElCaseStudies(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, color: "#283878", fontWeight: "bold" }}
      >
        Kreatesystem
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component={Link}
              to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
              sx={{ textAlign: "center" }}
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
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#fff" }}
        component="nav"
        sx={{
          animation: `${slideDown} 0.8s ease-out`,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderBottom: "3px solid #283878",
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
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
            <Box sx={{ display: "flex" }}>
              <Button component={Link} to="/" sx={navButtonStyle}>
                Home
              </Button>
              <Button component={Link} to="/about" sx={navButtonStyle}>
                About
              </Button>
              {/* SERVICES Dropdown */}
              <Button
                color="inherit"
                onClick={handleClickServices}
                sx={{ color: "#283878", fontWeight: "bold", fontSize: "16px" }}
              >
                SERVICES{" "}
                {openServices ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </Button>
              <Menu
                anchorEl={anchorElServices}
                open={openServices}
                onClose={handleCloseServices}
                MenuListProps={{ onMouseLeave: handleCloseServices }}
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: "#111",
                    color: "#fff",
                    borderRadius: "6px",
                    minWidth: "220px",
                  },
                }}
              >
                <MenuItem
                  component={Link}
                  to="/businessheader"
                  onClick={handleCloseServices}
                >
                  Business Process
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/consultingservices"
                  onClick={handleCloseServices}
                >
                  Consulting Service
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/businessheader"
                  onClick={handleCloseServices}
                >
                  Digital Marketing
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/businessheader"
                  onClick={handleCloseServices}
                  sx={{ color: "#D4AF37" }}
                >
                  Graphic Design
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/businessheader"
                  onClick={handleCloseServices}
                  sx={{ color: "#90EE90", fontWeight: "bold" }}
                >
                  UI/UX Design
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/businessheader"
                  onClick={handleCloseServices}
                >
                  Web Development
                </MenuItem>
              </Menu>
              {/* Dropdown Nav Item */}
              <Button
                color="inherit"
                onClick={handleClick}
                sx={{
                  color: "#283878",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                SOLUTIONS {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </Button>

              {/* Dropdown Menu */}
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }} // Close on hover out
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: "#111",
                    color: "#fff",
                    borderRadius: "6px",
                    minWidth: "200px",
                  },
                }}
              >
                <MenuItem
                  component={Link}
                  to="/ecommerceheader"
                  onClick={handleClose}
                  sx={{ fontSize: "14px", padding: "10px 20px" }}
                >
                  E-commerce Solutions
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/softwaresolutionssection"
                  onClick={handleClose}
                  sx={{ fontSize: "14px", padding: "10px 20px" }}
                >
                  Software Development
                </MenuItem>
              </Menu>
              <Button
                color="inherit"
                onClick={handleClickCaseStudies}
                sx={{
                  color: "#283878",
                  fontWeight: "bold",
                  fontSize: "16px",
                  marginLeft: "20px",
                }}
              >
                CASE STUDIES{" "}
                {openCaseStudies ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </Button>
              <Menu
                anchorEl={anchorElCaseStudies}
                open={openCaseStudies}
                onClose={handleCloseCaseStudies}
                MenuListProps={{ onMouseLeave: handleCloseCaseStudies }}
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: "#111",
                    color: "#fff",
                    borderRadius: "6px",
                    minWidth: "200px",
                  },
                }}
              >
                <MenuItem
                  component={Link}
                  to="/"
                  onClick={handleCloseCaseStudies}
                  sx={{ fontSize: "14px", padding: "10px 20px" }}
                >
                  IT Cases
                </MenuItem>
              </Menu>
              <Button component={Link} to="/contactus" sx={navButtonStyle}>
                Contact Us
              </Button>
              <Button component={Link} to="/careers" sx={navButtonStyle}>
                Careers
              </Button>
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
              width: drawerWidth,
              background: "#f8f9fa",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

const navButtonStyle = {
  color: "#283878",
  fontSize: "1rem",
  fontWeight: "bold",
  mx: 1,
  textTransform: "uppercase",
  position: "relative",
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

export default Navbar;
