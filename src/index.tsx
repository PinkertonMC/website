import "normalize.css"; // Import normalize.css (a css reset)

import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@material-ui/core"; // Import our Material-UI Components
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"; // Import Chevron Icon
import MenuIcon from "@material-ui/icons/Menu"; // Import Menu Icon
import clsx from "clsx"; // Import conditional React class helper
import React from "react";
import ReactDOM from "react-dom"; // Import React DOM

import useStyles from "./Styles/styles"; // Import our styles

function MainApp() {
    const globalStyles: ClassNameMap<string> = useStyles(); // Get styles
    const [drawerOpen, drawerSetOpen] = React.useState<boolean>(false); // Drawer open state
    const handleDrawerOpen = () => { // Function for drawer open
        drawerSetOpen(true);
    };

    const handleDrawerClose = () => { // Function for drawer close
        drawerSetOpen(false);
    };
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

                <List>
                    <ListItem button>
                        <ListItemIcon><MenuIcon /></ListItemIcon>
                        <ListItemText primary="Test" />
                    </ListItem>
                </List>
            </Drawer>
            <main className={clsx(globalStyles.content, {
                [globalStyles.contentShift]: drawerOpen,
            })} >
            </main>
        </>
    )
}
ReactDOM.render(
    <MainApp />,
    document.getElementById("root")
);

