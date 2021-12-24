import "normalize.css"; // Import normalize.css (a css reset)
import "./Styles/styles.scss";
import "firebase/database"; // Import Firebase Database component
import "firebase/auth"; // Import Firebase Authentication component to do what it says

import { AppBar, Avatar, Button, Collapse, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, ListSubheader, TextField, ThemeProvider, Toolbar, Tooltip } from "@material-ui/core"; // Import our Material-UI Components
import { createTheme } from "@material-ui/core/styles"
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle"; // Import account icon, for when user is not logged in for the drawer
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"; // Import Chevron Icon
import DnsIcon from "@material-ui/icons/Dns";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import GroupIcon from "@material-ui/icons/Group";
import HomeIcon from "@material-ui/icons/Home"; // Import Home Icon
import InfoIcon from "@material-ui/icons/Info";
import LinkIcon from "@material-ui/icons/Link";
import LinkOffIcon from "@material-ui/icons/LinkOff";
import Looks3Icon from "@material-ui/icons/Looks3"; // Import 3 icon
import LooksTwoIcon from "@material-ui/icons/LooksTwo"; // Import 3 icon
import MenuIcon from "@material-ui/icons/Menu"; // Import Menu Icon
import PublicIcon from "@material-ui/icons/Public"; // Icon for Earth
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset"; // Import Game Icon
import clsx from "clsx"; // Import conditional React class helper
import firebase from "firebase/app"; // Import Firebase core
import { SnackbarProvider, useSnackbar } from "notistack"; // Import Notistack for snackbars at bottom of screen.
import React, { Suspense } from "react";
import ReactDOM from "react-dom"; // Import React DOM
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"; // Import Firebase UI, to provide Firebase Login Front-end, because @isteiger is lazy.
import { BrowserRouter as Router, Link, Route, Switch as RouterSwitch } from "react-router-dom"; // Import router to have multiple pagers, route to define pages, switch for the router switch, and link to link pages with react-router

import FirebaseConfig from "./Configs/FirebaseConfig";
import copy from "./Snippets/Copy";
import useStyles from "./Styles/styles"; // Import our styles
import SuspenseLoader from "./Util/SuspenseLoader";
// Page Imports
// const HomePage = React.lazy(() => import("./Pages/Home"));
const HomeEarthPage = React.lazy(() => import("./Pages/HomeEarth"));
const HomePage = React.lazy(() => import("./Pages/Home"));
const ClassicPage = React.lazy(() => import("./Pages/Classic"));
const SeasonThree = React.lazy(() => import("./Pages/Season3"));
const MinigamesPage = React.lazy(() => import("./Pages/Minigames"));
const NotFoundPage = React.lazy(() => import("./Pages/NotFound"));
const AboutPage = React.lazy(() => import("./Pages/About"));
const PartnerPage = React.lazy(() => import("./Pages/Partners"));
// End Page Imports

// set default theme
const defaultTheme = createTheme({ // Set default styles, will probably be overridden
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

firebase.initializeApp(FirebaseConfig); // Initialize Firebase
/**
 * The top part of the drawer with auth info.
 */
function DrawerTop(): JSX.Element {
    const [authName, authNameSet] = React.useState<string>("Sign In"); // Set name to sign in until we know if the user is signed in or not
    const [authEmail, authEmailSet] = React.useState<string>("Click here to sign in."); // Set email line to sign in text until we know if the user is signed in or not.
    const [authPic, authPicSet] = React.useState<string>(""); // Set the auth pic to null until we know if the user is signed in or not
    firebase.auth().onAuthStateChanged((user: firebase.User | null) => { // Do when the Firebase Auth component is loaded
        if (user) { // If the user is signed in
            authNameSet(user.displayName || "Sign In"); // Set the name to their display name
            authEmailSet(user.email || "Click here to sign in."); // Set the email to their email
            authPicSet(user.photoURL || ""); // Set the picture to their profile picture
        }
    });
    return (
        <>
            <ListItemAvatar>
                <Avatar alt={authName} src={authPic}> {/* alt = users name, src = users profile pic */}
                    <AccountCircleIcon style={{ color: "white" }} /> {/* Display if not logged in, user has no PFP, or image fails loading */}
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={authName} secondary={authEmail} /> {/* List item with name of the user and their email, or just not logged in things. */}
        </>
    );
}

function AccountDialog(props: { handleClose: () => void }) {
    const globalStyles: ClassNameMap<string> = useStyles(); // Import global styles
    const [mcAvatar, setMcAvatar] = React.useState("c06f8906-4c8a-4911-9c29-ea1dbd1aab82");
    const [mcUsername, setMcUsername] = React.useState("Loading...");
    const [mcLinked, setMcLinked] = React.useState(true);
    const uid = firebase.auth()?.currentUser?.uid;
    firebase.database().ref(`/users/${uid}/linkedmc/`).once("value").then((snapshot: firebase.database.DataSnapshot) => {
        const snapshotval = snapshot.val();
        if (snapshotval?.linked === "1") {
            setMcAvatar(snapshotval.uuid);
            setMcUsername(snapshotval.username);
            setMcLinked(true);
        } else {
            setMcUsername("No Account Linked!");
            setMcLinked(false);
        }
    });
    return (
        <>
            <DialogTitle className={globalStyles.dialog}>Settings</DialogTitle> {/* Dialog title */}
            <DialogContent className={globalStyles.dialog}> {/* Start dialog content wrapper*/}
                <Grid container spacing={2}>
                    <Grid item>
                        <img src={`https://crafatar.com/renders/body/${mcAvatar}?default=MHF_Steve`} alt="Your Minecraft Avatar" style={{ filter: "drop-shadow(0px 0px 6px)" }} />
                    </Grid>
                    <Grid item style={{ flexGrow: 1 }}>
                        <List> {/* Start list */}
                            {mcLinked ? <ListItemText primary={mcUsername} secondary="Linked Minecraft Account" /> : <ListItem button onClick={() => { copy(`/linkacc ${uid}`); }}><ListItemIcon><LinkIcon /></ListItemIcon><ListItemText primary="Link Account" secondary={`Do /linkacc ${firebase.auth()?.currentUser?.uid} to link. Click to copy.`} /></ListItem>}
                            <ListSubheader>Options</ListSubheader> {/* Options subheader */}
                            {mcLinked ? <ListItem button onClick={() => { firebase.database().ref(`/users/${uid}/linkedmc/linked`).set("0"); firebase.database().ref(`/users/${firebase.auth()?.currentUser?.uid}/linkedmc/username`).remove(); firebase.database().ref(`/users/${firebase.auth()?.currentUser?.uid}/linkedmc/uuid`).remove(); }}><ListItemIcon><LinkOffIcon /></ListItemIcon><ListItemText primary="Unlink Minecraft Account" /></ListItem> : ""}

                            <ListItem button onClick={() => { firebase.auth().signOut(); window.location.reload(); }}>
                                {/* Note for later: I was doing the link account button thing */}
                                <ListItemIcon>
                                    <ExitToAppIcon />
                                </ListItemIcon>
                                <ListItemText primary="Sign Out" />
                            </ListItem>
                            {firebase.auth().currentUser?.providerData[0]?.providerId === "password" ? // If the user's provider is email, which is known as password to Firebase
                                <> {/* JSX parent holder element */}
                                    <ListSubheader>Email Account Settings</ListSubheader> {/* List subheader for account settings */}
                                    <div id="emailSettings"> {/* Settings to change email */}
                                        <ListItem> {/* List Item holder for email changing header */}
                                            <ListItemText primary="Change your Email" /> {/* Header for changing email */}
                                        </ListItem> {/* End List Item holder for changing email header */}
                                        <ListItem style={{ display: "block" }}> {/* Start list item */}
                                            <TextField style={{ width: "100%" }} color="primary" id="changeAccountEmailTextBox" label="Change Email" autoComplete="email" variant="filled" /><br /><br /> {/* Text field for changing email */}
                                            <div style={{ display: "flex", justifyContent: "flex-end" }}> {/* Div containing button with flex properties to align button to the right */}
                                                <Button variant="contained" onClick={() => { // Button for submitting email change, and we are currently in the onclick for it
                                                    firebase.auth().currentUser?.updateEmail((document.getElementById("changeAccountEmailTextBox") as HTMLInputElement)?.value).then(() => { // Set email to contents of text box
                                                        alert("Email change successful! Click ok to reload."); // Alert showing that the email was changed
                                                        window.location.reload(); // Reload the page once the user clicks ok.
                                                    }).catch((error) => { // If an error occurrs chaning the users email
                                                        // The most likely error to occur is the user needs to log in again, as Firebase requires the user to be recently logged in to change the email.
                                                        alert(`An error occurred. You may need to log out out and log in again, or input a valid email. More info: \n ${error}`); // Send an alert saying an error occurred, provide a fix for a common error, and then provide the error Firebase gives us.
                                                    });
                                                }}>
                                                    Change Email {/* The text inside the submit button */}
                                                </Button>{/* End submit change email button */}
                                            </div> {/* End right-aligning content div for button */}
                                        </ListItem> {/* End list item for changing the email */}
                                    </div> {/* End div to change email */}
                                    <div id="passwordSettings"> {/* Start div to change password */}
                                        <ListItem> {/* List item holder for changing password header */}
                                            <ListItemText primary="Change your Password" /> {/* Header for changing password */}
                                        </ListItem> {/* End list item holder for changing password header */}
                                        <ListItem style={{ display: "block" }}> {/* Start list item for text field for changing the password. Also, display: block is used to make it so the submit button can be on another line */}
                                            <TextField style={{ width: "100%" }} color="primary" id="changeAccountPasswordTextBox" label="Change Password" type="password" autoComplete="new-password" variant="filled" /><br /><br /> {/* Text field for changing the password. Also, width: 100% is used so the next item will be on another line. */}
                                            <div style={{ display: "flex", justifyContent: "flex-end" }}> {/* Start div containing the button. It has flex display and justify content flex end so the button gets pushed to the right */}
                                                <Button variant="contained" onClick={() => { // Button for submitting password change, and we are currently in the onclick for it!
                                                    firebase.auth().currentUser?.updatePassword((document.getElementById("changeAccountPasswordTextBox") as HTMLInputElement)?.value).then(() => { // Change the password to the contents of the password text field.
                                                        alert("Email change successful! Click ok to reload."); // Send an alert to the user if this succeeds, which will then reload the page after they click OK.
                                                        window.location.reload(); // Reload the page after the user clicks ok.
                                                    }).catch((error) => { // If an error occurs changing the users password
                                                        // The most likely error to occur is the user needs to log in again, as Firebase requires the user to be recently logged in to change the password.
                                                        alert(`An error occurred. You may need to log out out and log in again, or input a valid password. More info: \n ${error}`); // Send an alert saying an error occurred, provide a fix for a common error, and then provide the error Firebase gives us.
                                                    });
                                                }}>
                                                    Change Password {/* The text inside the submit button */}
                                                </Button> {/* End submit password change button */}
                                            </div> {/* End div for changing password submit button aligning */}
                                        </ListItem> {/* End list item for changing the password */}
                                    </div> {/* End div for the password settings. */}
                                </> // End email settings code block
                                :
                                true
                            }

                        </List> {/* End of the settings list (god damn finally!) */}
                    </Grid>
                </Grid>
            </DialogContent> {/* End dialog content wrapper */}
            <DialogActions className={globalStyles.dialog}> {/* Start dialog actions */}
                <Button onClick={props.handleClose}> {/* Close dialog */}
                    Close
                </Button>
            </DialogActions> {/* End dialog actions */}
        </>
    )
}
/**
 * Dialog for logging in and signing out
 * @param {Object} props 
 * @param {Boolean} props.authOpen If the dialog should be open.
 * @param {Function} props.handleClose The function to handle the dialog closing.
 */
function AuthDialog(props: { authOpen: boolean, handleClose: () => void }): JSX.Element {
    const globalStyles: ClassNameMap<string> = useStyles(); // Import global styles
    const [signedIn, signedInSet] = React.useState<boolean>(false); // Set state for if signed in
    const { enqueueSnackbar } = useSnackbar();
    const uiConfig: firebaseui.auth.Config = { // Configuration for FirebaseUI
        callbacks: { // Uh, callbacks
            signInSuccessWithAuthResult: () => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                props.handleClose; enqueueSnackbar("Successfully signed in.", {
                    variant: "success",
                });
                return true;
            },
        },
        tosUrl: "/termsAndConditions", // Terms of Service URL
        privacyPolicyUrl: "/privacyPolicy", // Privacy Policy URL
        signInFlow: "popup", // How the sign in should be, which in our case will go to another page
        signInOptions: [ // The sign providers for signing in
            firebase.auth.GoogleAuthProvider.PROVIDER_ID, // Google Auth Provider
            firebase.auth.EmailAuthProvider.PROVIDER_ID, // Email and Password Auth Provider
        ], // End sign in providers
    }; // End config for FirebaseUI
    firebase.auth().onAuthStateChanged((user: firebase.User | null) => { // When the Firebase auth component is ready
        if (user) { // If the user is signed in 
            signedInSet(true); // Set signed in to yes
        }
    });
    return (
        <Dialog
            open={props.authOpen} // If it is open
            onClose={props.handleClose} // Function to run on close
            maxWidth="md" // Set max width to small
            fullWidth={true} // Force the dialog to use the max width possible
        >
            {signedIn === true ? <AccountDialog handleClose={props.handleClose} /> : <> <DialogTitle className={globalStyles.dialog}>Sign In</DialogTitle> <DialogContent className={globalStyles.dialog}><StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /></DialogContent><DialogActions className={globalStyles.dialog}> <Button onClick={props.handleClose}></Button></DialogActions></>}
        </Dialog> // End sign in dialog
    )
} // End AuthDialog function
function MainApp(): JSX.Element {
    const globalStyles: ClassNameMap<string> = useStyles(); // Get styles
    const [drawerOpen, drawerSetOpen] = React.useState<boolean>(false); // Drawer open state
    const [authOpen, authSetOpen] = React.useState<boolean>(false); // If the auth dialog is open or not
    const [serversOpen, serversSetOpen] = React.useState(false);

    const handleDrawerOpen = () => { // Function for drawer open
        drawerSetOpen(true);
    };

    const handleDrawerClose = () => { // Function for drawer close
        drawerSetOpen(false);
    };
    function rickRoll(): void {
        window.location.replace("https://www.youtube.com/watch?v=oHg5SJYRHA0");
    }
    function earthDynmap(): void {
        window.location.replace("http://dynmap.earth.pinkertonmc.com");
    }
    const handleAuthDialogOpen: () => void = () => { // Function for when the authentication dialog is opened
        authSetOpen(true); // Set authentication dialog to opened
    };

    const handleAuthDialogClose: () => void = () => { // Function for when the authentication dialog is closed
        console.log("closed");
        authSetOpen(false); // Set authentication dialog state to closed
    };
    const handleServerClick = () => {
        serversSetOpen(!serversOpen);
    };

    return (
        <>
            <AppBar position="static" className={clsx(globalStyles.appBar, {
                [globalStyles.appBarShift]: drawerOpen,
            })}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen} className={clsx(globalStyles.menuButton, drawerOpen && globalStyles.hide)} >
                        <MenuIcon />
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
                    <ListItem button onClick={handleAuthDialogOpen}>
                        <DrawerTop />
                    </ListItem>
                </Tooltip>
                <Divider />
                <List>
                    <ListItem button component={Link} to="/" onClick={handleDrawerClose}>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button onClick={handleServerClick}>
                        <ListItemIcon>
                            <DnsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Servers" />
                        {serversOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={serversOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding className={globalStyles.nested}>
                            <ListItem button component={Link} to="/earth" onClick={handleDrawerClose}>
                                <ListItemIcon><PublicIcon /></ListItemIcon>
                                <ListItemText primary="Earth" />
                            </ListItem>
                            <ListItem button component={Link} to="/season3" onClick={handleDrawerClose}>
                                <ListItemIcon><Looks3Icon /></ListItemIcon>
                                <ListItemText primary="Season 3" />
                            </ListItem>
                            <ListItem button component={Link} to="/classic" onClick={handleDrawerClose}>
                                <ListItemIcon><LooksTwoIcon /></ListItemIcon>
                                <ListItemText primary="Classic" />
                            </ListItem>
                            <ListItem button component={Link} to="/minigames" onClick={handleDrawerClose}>
                                <ListItemIcon><VideogameAssetIcon /></ListItemIcon>
                                <ListItemText primary="Minigames" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button component={Link} to="/partners" onClick={handleDrawerClose}>
                        <ListItemIcon><GroupIcon /></ListItemIcon>
                        <ListItemText primary="Partners" />
                    </ListItem>
                    <ListItem button component={Link} to="/about" onClick={handleDrawerClose}>
                        <ListItemIcon><InfoIcon /></ListItemIcon>
                        <ListItemText primary="About Us" />
                    </ListItem>
                </List>
            </Drawer>
            <main className={clsx(globalStyles.content, {
                [globalStyles.contentShift]: drawerOpen,
            })} >
                <Suspense fallback={<SuspenseLoader />}>
                    <RouterSwitch>
                        {/* Start game URLS */}
                        <Route path="/earth/dynmap">
                            {() => { earthDynmap(); }}
                        </Route>
                        <Route path="/about">
                            <div style={{ padding: "24px" }}>
                                <AboutPage />
                            </div>
                        </Route>
                        <Route path="/oldHome">
                            <div style={{ padding: "24px" }}>
                                <HomePage />
                            </div>
                        </Route>
                        <Route path="/season3">
                            <div style={{ padding: "24px" }}>
                                <SeasonThree />
                            </div>
                        </Route>
                        <Route path="/earth">
                            <HomeEarthPage />
                        </Route>
                        <Route path="/classic">
                            <div style={{ padding: "24px" }}>
                                <ClassicPage />
                            </div>
                        </Route>
                        <Route path="/minigames">
                            <div style={{ padding: "24px" }}>
                                <MinigamesPage />
                            </div>
                        </Route>
                        <Route path="/partners">
                            <div style={{ padding: "24px" }}>
                                <PartnerPage />
                            </div>
                        </Route>
                        <Route path="/rick">
                            {() => { rickRoll(); }}
                        </Route>
                        <Route path="/" exact>
                            <div style={{ padding: "24px" }}>
                                <HomePage />
                            </div>
                        </Route>
                        <Route>
                            <NotFoundPage />
                        </Route>
                    </RouterSwitch>
                </Suspense>
            </main>
            <div> {/* Auth Dialog */}
                <AuthDialog authOpen={authOpen} handleClose={handleAuthDialogClose} />
            </div>
        </>
    )
}

ReactDOM.render(
    <Router>
        <ThemeProvider theme={defaultTheme}>
            <SnackbarProvider>
                <MainApp />
            </SnackbarProvider>
        </ThemeProvider>
    </Router>,
    document.getElementById("root")
);

