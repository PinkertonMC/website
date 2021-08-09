import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, SvgIcon, Typography } from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";
import GitHubIcon from "@material-ui/icons/GitHub";
import RedditIcon from "@material-ui/icons/Reddit";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@material-ui/lab";

function AboutStaffVerticalRight(props: { uname: string, discord: string, quote: string, uuid: string, github?: string, youtube?: string, twitter?: string, twitch?: string, reddit?: string }) {
    return (
        <Grid item>
            <div style={{ backgroundImage: "linear-gradient(135deg, rgb(169, 64, 255) 0%, #0084ff 100%)", display: "inline-block", borderRadius: "4px", marginTop: "7%", height: "100%", boxShadow: "0px 0px 5px rgba(0, 0, 0, .5)" }}>
                <Card color="primary" style={{ width: "18rem", height: "100%", flexWrap: "wrap", textAlign: "center", justifyContent: "center", marginTop: "-7%", marginBottom: "7%", marginLeft: "7%", overflow: "visible", display: "flex" }}>
                    <div style={{ backgroundImage: "linear-gradient(45deg, rgba(64, 209, 255, 1) 0%, #00ffae 100%)", width: "100%", borderTopRightRadius: "4px", borderTopLeftRadius: "4px", display: "inherit", paddingTop: "0.5rem", paddingBottom: "0.5rem" }}>
                        <CardMedia
                            image={`https://crafatar.com/renders/head/${props.uuid}?scale=10&overlay=true`}
                            title={props.uname}
                            component="img"
                        />
                    </div>
                    <CardContent style={{ flexGrow: 1, width: "100%" }}>
                        <Typography component="h5" variant="h5">
                            {props.uname}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {props.discord}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            {props.quote}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {props.github ? <IconButton onClick={() => { window.open(`https://github.com/${props.github}`, "_blank"); }}><GitHubIcon /></IconButton> : ""}
                        {props.reddit ? <IconButton onClick={() => { window.open(`https://www.reddit.com/user/${props.reddit}`, "_blank"); }}><RedditIcon /></IconButton> : ""}
                        {props.twitch ? <IconButton onClick={() => { window.open(`https://www.twitch.tv/${props.twitch}`, "_blank"); }}><SvgIcon><path d="M11.64 5.93H13.07V10.21H11.64M15.57 5.93H17V10.21H15.57M7 2L3.43 5.57V18.43H7.71V22L11.29 18.43H14.14L20.57 12V2M19.14 11.29L16.29 14.14H13.43L10.93 16.64V14.14H7.71V3.43H19.14Z" /></SvgIcon></IconButton> : ""}
                        {props.twitter ? <IconButton onClick={() => { window.open(`https://twitter.com/${props.twitter}`, "_blank"); }}><TwitterIcon /></IconButton> : ""}
                        {props.youtube ? <IconButton onClick={() => { window.open(`https://www.youtube.com/channel/${props.youtube}`, "_blank"); }}><YouTubeIcon /></IconButton> : ""}
                    </CardActions>
                </Card>
            </div>
        </Grid>
    )
}
function AboutStaffVerticalLeft(props: { uname: string, discord: string, quote: string, uuid: string, github?: string, youtube?: string, twitter?: string, twitch?: string, reddit?: string }) {
    return (
        <Grid item>
            <div style={{ backgroundImage: "linear-gradient(45deg, rgba(64, 209, 255, 1) 0%, #00ffae 100%)", display: "inline-block", borderRadius: "4px", marginTop: "7%", height: "100%", boxShadow: "0px 0px 5px rgba(0, 0, 0, .5)" }}>
                <Card color="primary" style={{ width: "18rem", height: "100%", flexWrap: "wrap", textAlign: "center", justifyContent: "center", marginTop: "-7%", marginBottom: "7%", marginLeft: "-7%", overflow: "visible", display: "flex" }}>
                    <div style={{ backgroundImage: "linear-gradient(135deg, rgb(169, 64, 255) 0%, #0084ff 100%)", width: "100%", borderTopRightRadius: "4px", borderTopLeftRadius: "4px", display: "inherit", paddingTop: "0.5rem", paddingBottom: "0.5rem" }}>
                        <CardMedia
                            image={`https://crafatar.com/renders/head/${props.uuid}?scale=10&overlay=true`}
                            title={props.uname}
                            component="img"
                        />
                    </div>
                    <CardContent style={{ flexGrow: 1, width: "100%" }}>
                        <Typography component="h5" variant="h5">
                            {props.uname}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {props.discord}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            {props.quote}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {props.github ? <IconButton onClick={() => { window.open(`https://github.com/${props.github}`, "_blank"); }}><GitHubIcon /></IconButton> : ""}
                        {props.reddit ? <IconButton onClick={() => { window.open(`https://www.reddit.com/user/${props.reddit}`, "_blank"); }}><RedditIcon /></IconButton> : ""}
                        {props.twitch ? <IconButton onClick={() => { window.open(`https://www.twitch.tv/${props.twitch}`, "_blank"); }}><SvgIcon><path d="M11.64 5.93H13.07V10.21H11.64M15.57 5.93H17V10.21H15.57M7 2L3.43 5.57V18.43H7.71V22L11.29 18.43H14.14L20.57 12V2M19.14 11.29L16.29 14.14H13.43L10.93 16.64V14.14H7.71V3.43H19.14Z" /></SvgIcon></IconButton> : ""}
                        {props.twitter ? <IconButton onClick={() => { window.open(`https://twitter.com/${props.twitter}`, "_blank"); }}><TwitterIcon /></IconButton> : ""}
                        {props.youtube ? <IconButton onClick={() => { window.open(`https://www.youtube.com/channel/${props.youtube}`, "_blank"); }}><YouTubeIcon /></IconButton> : ""}
                    </CardActions>
                </Card>
            </div>
        </Grid>
    )
}
export default function AboutPage(): JSX.Element {
    document.title = "About Us | PinkertonMC";
    return (
        <>
            <div className="s3-body">
                <Card color="primary" style={{ marginBottom: "2rem", backgroundColor: "#003e81", backgroundImage: "revert" }} className="head s3-body">
                    <img src="/assets/images/pinkertonAboutUs.png" className="logos" alt="About Us" />
                    <h3 className="s3-heading">
                        <div className="marki markianimation">We are a group of passionate Minecraft-obsessed people who want to redefine what a Minecraft server network is and can be.</div>
                    </h3>
                </Card>
                <h1>The <mark>People</mark> Behind it All.</h1>
                <Grid container spacing={5} style={{ margin: 0, width: "100%" }}>
                    <Grid item style={{ flexGrow: 1, width: "18rem" }}>
                        <Typography component="h5" variant="h5">
                            Co-Owners
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            These people run Pinkerton and make most of the decisions around it. They were with Pinkerton from the beginning, and are very close. Even if it doesn't look like much is happening on the outside of Pinkerton, these people are always hard at work on something.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <AboutStaffVerticalRight uname="AlexTheSavage07" quote="Graphic Designer & Developer" uuid="3142a128-d6e7-40f2-97e0-417e3d6bbff0" github="asavage7" youtube="UCbEnlral5D80rJr8k8xrHuQ" discord="Asavage7#0001" twitter="alexthesavage07" twitch="g3mlive" reddit="AlexTheSavage07" />
                    </Grid>
                    <Grid item>
                        <AboutStaffVerticalRight uname="isteiger11" quote="Main Developer" uuid="f0b3fa4b-e16d-433c-a3df-18b73999a8ee" github="isteiger" youtube="UCX8m1Mtl75RQp3qlRxK1FXg" discord="isteiger11#7458" twitch="isteiger11" />
                    </Grid>
                    <Grid item>
                        <AboutStaffVerticalRight uname="Redpug111" quote="Backend Developer" uuid="3dd3bc81-b5e5-4714-90cd-ae2b72a129cc" github="Redpug111" discord="Redpug111#1111" twitter="Redpug111" twitch="Redpug111" />
                    </Grid>
                </Grid>
                <Grid container spacing={5} style={{ margin: 0, width: "100%" }}>
                    <Grid item>
                        <AboutStaffVerticalLeft uname="Rising_Phoenix" quote="Head Moderator" uuid="ed6319cd-3c3a-4628-88cb-c20d21eb7ea9" github="RisingPhoenix-24" discord="Rising_Phoenix#0024" />
                    </Grid>
                    <Grid item>
                        <AboutStaffVerticalLeft uname="Imitzation954" quote="Moderator" uuid="9749b03c-a34f-4102-beb3-4c64b0a035d9" discord="Imitzation954#9578" youtube="UCUXk_fkZPjhZ0zsV9yWGC0w" />
                    </Grid>
                    <Grid item style={{ flexGrow: 1, width: "18rem" }}>
                        <Typography component="h5" variant="h5" align="right">
                            Moderators
                        </Typography>
                        <Typography variant="body1" color="textSecondary" align="right">
                            Moderators make sure everyone is behaving and enforce the rules if they don't. They are everyday normal players just like you and me. If you would like to become one, click the button below to bring up the form.
                        </Typography>
                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
                            <Button variant="outlined" className="homepagebutton" color="primary" startIcon={<BuildIcon />} onClick={() => { window.open("forms.google.com", "_blank"); }}>Apply for Mod Position</Button>
                        </div>
                    </Grid>
                </Grid>
                <h1>Our <mark>History</mark></h1>
            </div>
            <Timeline align="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography color="textSecondary">December 2020</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography>Pinkerton founded as an SMP for a Discord community called Smarty's Hangout by isteiger11.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography color="textSecondary">January 2021</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography>The Smarty's Hangout MC server outgrows the Discord and seperates, renaming to The Minecraft Country of Pinkerton. Smarty's Hangout admins AlexTheSavage07, Redpug111, and Minerkid08 join Pinkerton as admins, with isteiger11 still owning it.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography color="textSecondary">Feburary 7th, 2021</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography>LArobot is removed from admin post.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography color="textSecondary">9:00 am</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography>Repeat</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </>
    );
}