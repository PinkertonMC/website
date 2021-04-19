import "normalize.css"; // Import normalize.css (a css reset)
import "./Styles/styles.scss";

import { AppBar, Avatar, createMuiTheme, Divider, Drawer, IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, ThemeProvider, Toolbar, Tooltip } from "@material-ui/core"; // Import our Material-UI Components
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle"; // Import account icon, for when user is not logged in for the drawer
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"; // Import Chevron Icon
import HomeIcon from "@material-ui/icons/Home"; // Import Home Icon
import Looks3Icon from "@material-ui/icons/Looks3"; // Import 3 icon
import LooksTwoIcon from "@material-ui/icons/LooksTwo"; // Import 3 icon
import MenuIcon from "@material-ui/icons/Menu"; // Import Menu Icon
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset"; // Import Game Icon
import clsx from "clsx"; // Import conditional React class helper
import React, { Suspense } from "react";
import ReactDOM from "react-dom"; // Import React DOM
import { BrowserRouter as Router, Route, Switch as RouterSwitch } from "react-router-dom"; // Import router to have multiple pagers, route to define pages, switch for the router switch, and link to link pages with react-router

import useStyles from "./Styles/styles"; // Import our styles
import SuspenseLoader from "./Util/SuspenseLoader";
// Page Imports
const HomePage = React.lazy(() => import("./Pages/Home"));
// End Page Imports

// set default theme
const defaultTheme = createMuiTheme({ // Set default styles, will probably be overridden
    palette: {
        type: "light",
        primary: {
            light: "#003E81",
            main: "#003E81",
            contrastText: "#fff",
        },
        secondary: {
            light: "#FCD20F",
            main: "#FCD20F",
            contrastText: "#fff",
        },
    },
});
/**
 * The top part of the drawer with auth info.
 */
function DrawerTop(): JSX.Element {
    const [authName, authNameSet] = React.useState<string>("Sign In"); // Set name to sign in until we know if the user is signed in or not
    const [authEmail, authEmailSet] = React.useState<string>("Click here to sign in."); // Set email line to sign in text until we know if the user is signed in or not.
    const [authPic, authPicSet] = React.useState<string>(""); // Set the auth pic to null until we know if the user is signed in or not
    return (
        <>
            <ListItemAvatar>
                <Avatar alt={authName} src={authPic}> {/* alt = users name, src = users profile pic */}
                    <AccountCircleIcon /> {/* Display if not logged in, user has no PFP, or image fails loading */}
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={authName} secondary={authEmail} /> {/* List item with name of the user and their email, or just not logged in things. */}
        </>
    );
}
function MainApp(): JSX.Element {
    const globalStyles: ClassNameMap<string> = useStyles(); // Get styles
    const [drawerOpen, drawerSetOpen] = React.useState<boolean>(false); // Drawer open state
    const handleDrawerOpen = () => { // Function for drawer open
        drawerSetOpen(true);
    };

    const handleDrawerClose = () => { // Function for drawer close
        drawerSetOpen(false);
    };
    function rickRoll(): "shrek" {
        window.location.replace("https://www.youtube.com/watch?v=oHg5SJYRHA0");
        return "shrek";
    }
    return (
        <>
            <AppBar position="static" className={clsx(globalStyles.appBar, {
                [globalStyles.appBarShift]: drawerOpen,
            })}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon onClick={handleDrawerOpen} className={clsx(globalStyles.menuButton, drawerOpen && globalStyles.hide)} />
                    </IconButton>
                    <img src="/assets/images/transparentLogo.svg" alt="PinkertonMC logo" height="36" />
                </Toolbar>
            </AppBar>
            <Drawer
                className={globalStyles.drawer}
                variant="persistent"
                anchor="left"
                open={drawerOpen}
                classes={{
                    paper: globalStyles.drawerPaper,
                }}
            >
                <div className={globalStyles.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <Tooltip title="Click to sign in/out.">
                    <ListItem button>
                        <DrawerTop />
                    </ListItem>
                </Tooltip>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><Looks3Icon /></ListItemIcon>
                        <ListItemText primary="Season 3" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><VideogameAssetIcon /></ListItemIcon>
                        <ListItemText primary="Minigames" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><LooksTwoIcon /></ListItemIcon>
                        <ListItemText primary="Classic" />
                    </ListItem>
                </List>
            </Drawer>
            <main className={clsx(globalStyles.content, {
                [globalStyles.contentShift]: drawerOpen,
            })} >
                <Suspense fallback={<SuspenseLoader />}>
                    <RouterSwitch>
                        {/* Start game URLS */}
                        <Route path="/rick">
                            {() => { rickRoll(); }}
                        </Route>
                        <Route path="/">
                            <HomePage />
                        </Route>
                    </RouterSwitch>
                </Suspense>
            </main>
        </>
    )
}
ReactDOM.render(
    <Router>
        <ThemeProvider theme={defaultTheme}>
            <MainApp />
        </ThemeProvider>
    </Router>,
    document.getElementById("root")
);

