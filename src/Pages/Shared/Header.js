import {
    AppBar,
    Box,
    Button,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack,
    Tab,
    Tabs,
    Toolbar,
    Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { ColorModeContext } from "../../Context/ColorModeContext";
import { Container } from "@mui/system";
import logo from "../../assets/logo/job-seeker-logo.png";
import { MuiSwitch } from "../../Components/MuiSwitch";

const drawerWidth = 240;

const navItems = [
    {
        id: 0,
        path: "/home",
        label: "Home",
    },
    {
        id: 1,
        path: "/about",
        label: "About",
    },
    {
        id: 2,
        path: "/contact",
        label: "Contact Us",
    },
    {
        id: 3,
        path: "/login",
        label: "Login",
    },
    {
        id: 4,
        path: "/signup",
        label: "SignUp",
    },
];

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const { colorMode } = React.useContext(ColorModeContext);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <img style={{ width: "150px", marginRight: "200px" }} src={logo} alt="logo"></img>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <Link style={{ textDecoration: "none" }} to={`${item.path}`}>
                                <ListItemText primary={item.label} sx={{ color: "primary.green" }} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
                <Box sx={{ textAlign: "left", mx: "10px" }}>
                    <Link to={"/login"} style={{ textDecoration: "none" }}>
                        <Button sx={{ backgroundColor: "primary.green" }}>Login</Button>
                    </Link>
                    <Link to={"/signup"} style={{ textDecoration: "none" }}>
                        <Button sx={{ backgroundColor: "primary.green" }}>SignUp</Button>
                    </Link>
                </Box>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: "primary.main", boxShadow: "none" }}>
                <Container>
                    <Toolbar
                        sx={{
                            display: "flex",
                            justifyContent: { xs: "space-evenly", sm: "space-evenly", md: "space-between" },
                        }}
                    >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{
                                mr: 2,
                                display: { md: "none" },
                                backgroundColor: "primary.main",
                                "&:hover": {
                                    backgroundColor: "secondary.main",
                                },
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ pt: 1 }}>
                            <img style={{ width: "130px" }} src={logo} alt="logo"></img>
                        </Box>

                        <Tabs
                            value={value}
                            onChange={handleChange}
                            sx={{
                                "& button.Mui-selected": { backgroundColor: "green" },
                                // color: "primary.white",
                                // indicator: {
                                //     backgroundColor: "primary.white",
                                // },
                                display: { xs: "none", md: "block" },
                                "& .MuiTabs-indicator": {
                                    textColor: "primary.white",
                                    backgroundColor: "primary.green",
                                },
                            }}
                        >
                            {navItems.map((item) => (
                                <Link key={item.id} style={{ textDecoration: "none" }} to={`${item.path}`}>
                                    <Tab
                                        value={item.id}
                                        onChange={handleChange}
                                        label={item.label}
                                        sx={{
                                            color: "primary.white",
                                        }}
                                        variant="text"
                                        color="primary.white"
                                    />
                                </Link>
                            ))}
                        </Tabs>
                        <Stack direction="row" spacing={2} sx={{ display: "flex", flexDirection: "row" }}>
                            <MuiSwitch onClick={colorMode.toggleMode} />
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    // container={container}
                    variant="temporary"
                    // open={state.top}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", md: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default Header;
