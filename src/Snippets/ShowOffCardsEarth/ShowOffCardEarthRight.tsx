import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom"; // Import router to have multiple pagers, route to define pages, switch for the router switch, and link to link pages with react-router


export default function ShowOffCardEarthRight(props: { buttonText: string, buttonStartIcon: JSX.Element, buttonClickLink: string, cardContent: JSX.Element | string, cardContentDescription: string, text: JSX.Element | string, textHeading: JSX.Element | String, routerLink?: boolean, attributeText?: String, attributeLink?: string }): JSX.Element {
    return (
        <div className="box">
            <Grid container spacing={3}>
                <Grid item sm={6} style={{ display: "flex", alignItems: "center" }} className="discordtext">
                    <div>
                        <div className="textarealeft cssanimation fadeInBottom" style={{ width: "100%", textAlign: "left" }}>
                            {typeof props.textHeading == "string" ? <h1>{props.textHeading}</h1> : props.textHeading}
                            {typeof props.text == "string" ? <p style={{ marginBottom: "2rem" }}>{props.text}</p> : props.text}
                            {props.routerLink ?
                                <Button className="earth-btn" color="primary" size="large" component={Link} startIcon={props.buttonStartIcon} to={props.buttonClickLink}>{props.buttonText}</Button> :
                                // @ts-ignore
                                <Button className="earth-btn" color="primary" size="large" startIcon={props.buttonStartIcon} onClick={() => { window.location = props.buttonClickLink; }}>{props.buttonText}</Button>}
                        </div>
                    </div>
                </Grid>
                <Grid item sm={6} style={{ width: "100%" }} className="discordboxiframe">
                    <div style={{ paddingTop: "7%", paddingRight: "4%" }}>
                        <div className="outerboxright cssanimation fadeInBottom" style={{ width: "100%", marginBottom: "1rem", borderRadius: "15px" }}>
                            {typeof props.cardContent == "string" ? <img className="innerboxleft scaleimgl imageLeftMarginFix" style={{ borderRadius: "15px" }} src={(props.cardContent) as string} alt={props.cardContentDescription} /> : props.cardContent}</div>
                    </div>
                    {typeof props.attributeText == "string" ? <a className="earth-a" href={props.attributeLink}>{props.attributeText}</a> : ""}
                </Grid>
            </Grid>
        </div >
    );
}