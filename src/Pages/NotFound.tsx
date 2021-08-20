import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";
import { Link } from "react-router-dom";

import useStyles from "../Styles/styles";
import HomePageEarth from "./HomeEarth";

export default function NotFoundPage(): JSX.Element {
    const globalStyles: ClassNameMap<string> = useStyles();
    document.title = "404 Not Found | PinkertonMC";
    return (
        <>
            <HomePageEarth />
            <Dialog
                open={true}
            >
                <DialogTitle className={globalStyles.dialog}>404: Page Not Found</DialogTitle>
                <DialogContent className={globalStyles.dialog}>
                    <DialogContentText>
                        We couldn't find the page you were looking for. Check the URL. If you followed a link on this site and got here, submit an issue.
                    </DialogContentText>
                </DialogContent>
                <DialogActions className={globalStyles.dialog}>
                    <Button component={Link} to="/">
                        Go Home
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}