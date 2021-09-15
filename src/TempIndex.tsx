import "normalize.css"; // Import normalize.css (a css reset)
import "./Styles/styles.scss";
import "firebase/database"; // Import Firebase Database component
import "firebase/auth"; // Import Firebase Authentication component to do what it says

import { AppBar, ThemeProvider, Toolbar } from "@material-ui/core"; // Import our Material-UI Components
import { createTheme } from "@material-ui/core/styles"
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import firebase from "firebase/app"; // Import Firebase core
import { SnackbarProvider } from "notistack"; // Import Notistack for snackbars at bottom of screen.
import React, { Suspense } from "react";
import ReactDOM from "react-dom"; // Import React DOM
import { BrowserRouter as Router, Route, Switch as RouterSwitch } from "react-router-dom"; // Import router to have multiple pagers, route to define pages, switch for the router switch, and link to link pages with react-router

import FirebaseConfig from "./Configs/FirebaseConfig";
import TempHomePage from "./Pages/tempHome";
import useStyles from "./Styles/styles"; // Import our styles
import SuspenseLoader from "./Util/SuspenseLoader";
// Page Imports
// const HomePage = React.lazy(() => import("./Pages/Home"));
const HomeEarthPage = React.lazy(() => import("./Pages/HomeEarth"));
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

function MainApp(): JSX.Element {
    const globalStyles: ClassNameMap<string> = useStyles(); // Get styles


    function rickRoll(): void {
        window.location.replace("https://www.youtube.com/watch?v=oHg5SJYRHA0");
    }


    return (
        <>
            <AppBar position="static" className={globalStyles.appBar}>
                <Toolbar>
                    <img src="/assets/images/transparentLogo.svg" alt="PinkertonMC logo" height="36" />
                </Toolbar>
            </AppBar>
            <main className={globalStyles.content} >
                <Suspense fallback={<SuspenseLoader />}>
                    <RouterSwitch>

                        <Route path="/earth">
                            <HomeEarthPage />
                        </Route>
                        <Route path="/rick">
                            {() => { rickRoll(); }}
                        </Route>
                        <Route>
                            <div style={{ padding: "24px" }}>
                                <TempHomePage />
                            </div>
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
            <SnackbarProvider>
                <MainApp />
            </SnackbarProvider>
        </ThemeProvider>
    </Router>,
    document.getElementById("root")
);

