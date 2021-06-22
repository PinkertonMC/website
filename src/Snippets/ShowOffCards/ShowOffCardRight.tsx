import "../../Styles/alex.scss";

import { Button, Grid } from "@material-ui/core";

export default function ShowOffCardRight(props: { buttonText: string, buttonStartIcon: JSX.Element, buttonClickLink: string, cardContent: JSX.Element | string, cardContentDescription: string, text: JSX.Element | string, textHeading: JSX.Element | String }): JSX.Element {
    return (
        <div className="box">
            <Grid container spacing={3}>
                <Grid item sm={6} style={{ display: "flex", alignItems: "center" }} className="discordtext">
                    <div>
                        <div className="textarealeft cssanimation fadeInBottom" style={{ width: "100%" }}>
                            {typeof props.textHeading == "string" ? <h1>{props.textHeading}</h1> : props.textHeading}
                            {typeof props.text == "string" ? <p>{props.text}</p> : props.text}
                            <Button variant="outlined" className="homepagebutton" color="primary" startIcon={props.buttonStartIcon} onClick={() => { window.open(props.buttonClickLink, "_blank"); }}>
                                {props.buttonText}
                            </Button>
                        </div>
                    </div>
                </Grid>
                <Grid item sm={6} style={{ width: "100%" }} className="discordboxiframe">
                    <div style={{ paddingTop: "7%", paddingRight: "4%" }}>
                        <div className="outerboxright cssanimation fadeInBottom" style={{ width: "100%" }}>
                            {typeof props.cardContent == "string" ? <img className="innerboxleft scaleimgl" style={{ marginLeft: "4%" }} src={(props.cardContent) as string} alt={props.cardContentDescription} /> : props.cardContent}                            </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}