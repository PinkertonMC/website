import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom"; // Import router to have multiple pagers, route to define pages, switch for the router switch, and link to link pages with react-router


export default function ShowOffCardEarthLeft(props: { buttonText: string, buttonStartIcon: JSX.Element, buttonClickLink: string, cardContent: JSX.Element | string, cardContentDescription: string, text: JSX.Element | string, textHeading: JSX.Element | String, routerLink?: boolean, attributeText?: String, attributeLink?: string }): JSX.Element {
    return (
        <div className="box">
            <Grid container spacing={3}>
                <Grid item sm={6} style={{ width: "100%" }} className="discordboxiframe">
                    <div style={{ paddingTop: "7%", paddingLeft: "3.5%", marginBottom: "1rem" }}>
                        <div className="outerboxleft cssanimation fadeInBottom" style={{ width: "100%", borderRadius: "15px" }}>
                            {typeof props.cardContent == "string" ? <img className="innerboxleft scaleimg" style={{ borderRadius: "15px" }} src={(props.cardContent) as string} alt={props.cardContentDescription} /> : props.cardContent}
                        </div>
                    </div>
                    {typeof props.attributeText == "string" ? <a className="earth-a" href={props.attributeLink}>{props.attributeText}</a> : ""}
                </Grid>
                <Grid item sm={6} style={{ display: "flex", alignItems: "center" }} className="discordtext">
                    <div>
                        <div className="textarearight cssanimation fadeInBottom" style={{ width: "100%", textAlign: "right" }}>
                            {typeof props.textHeading == "string" ? <h1>{props.textHeading}</h1> : props.textHeading}
                            {typeof props.text == "string" ? <p style={{ marginBottom: "2rem" }}>{props.text}</p> : props.text}
                            {props.routerLink ?
                                <Button className="earth-btn" color="primary" size="large" component={Link} startIcon={props.buttonStartIcon} to={props.buttonClickLink}>{props.buttonText}</Button> :
                                <Button className="earth-btn" color="primary" size="large" startIcon={props.buttonStartIcon} onClick={() => { window.open(props.buttonClickLink, "_blank"); }}>{props.buttonText}</Button>}
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}