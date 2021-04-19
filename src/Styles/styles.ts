import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ClassNameMap } from "@material-ui/styles";

const drawerWidth = 280; // Main drawer width
const useStyles: () => ClassNameMap<string> = // Define the styles we will use elsewhere
    makeStyles((theme: Theme) => createStyles({
        appBar: {
            backgroundColor: "#003E81",
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            })
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: "none",
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: "flex-end",
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        contentShift: {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: drawerWidth,
        },
        cardimg: {
            objectFit: "contain",
        }
    }));

export default useStyles; // Export the styles for use elsewhere