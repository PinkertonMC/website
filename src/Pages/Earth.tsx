import "../Styles/stars.sass"

import { Card, CardContent, CardMedia, Grid, Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";
import FlashOnRoundedIcon from "@material-ui/icons/FlashOnRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import LandscapeIcon from "@material-ui/icons/Landscape";
import SecurityRoundedIcon from "@material-ui/icons/SecurityRounded";

import ShowOffCardLeft from "../Snippets/ShowOffCards/ShowOffCardLeft";
import ShowOffCardRight from "../Snippets/ShowOffCards/ShowOffCardRight";


export default function EarthPage(): JSX.Element {
    document.title = "Earth | PinkertonMC";
    return (
        <div className="text-center s3-body starBody" style={{ backgroundColor: "black" }}>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div></div>
        </div>
    );
}