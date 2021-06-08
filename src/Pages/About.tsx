import { Card, CardActions, CardContent, CardMedia, Grid, IconButton, SvgIcon, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import RedditIcon from "@material-ui/icons/Reddit";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

function AboutStaffVertical(props: { uname: string, discord: string, quote: string, uuid: string, github?: string, youtube?: string, twitter?: string, twitch?: string, reddit?: string }) {
    return (
        <Grid item>
            <Card variant="outlined" color="primary" style={{ width: "18rem", height: "100%", display: "flex", flexWrap: "wrap", textAlign: "center", justifyContent: "center" }}>
                <CardMedia
                    image={`https://crafatar.com/renders/head/${props.uuid}?scale=10`}
                    title={props.uname}
                    component="img"
                />
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
        </Grid>
    )
}
export default function AboutPage(): JSX.Element {
    document.title = "About Us | PinkertonMC";
    return (
        <>
            <Card variant="outlined" color="primary" style={{ marginBottom: "2rem" }}>
                <div style={{ padding: "2rem" }}>
                    <CardMedia
                        component="img"
                        alt="Pinkerton Logo"
                        height="400"
                        image="/assets/images/transparentLogo.svg"
                        className="cardimg"
                    />
                </div>
            </Card>
            <Grid container justify="center" spacing={2}>
                <AboutStaffVertical uname="AlexTheSavage07" quote="Graphic Designer & Developer" uuid="3142a128-d6e7-40f2-97e0-417e3d6bbff0" github="asavage7" youtube="UCbEnlral5D80rJr8k8xrHuQ" discord="asavage7#3718" twitter="alexthesavage07" twitch="g3mlive" reddit="AlexTheSavage07" />
                <AboutStaffVertical uname="isteiger11" quote="Main Developer & Sorta Graphic Designer" uuid="f0b3fa4b-e16d-433c-a3df-18b73999a8ee" github="isteiger" youtube="UCX8m1Mtl75RQp3qlRxK1FXg" discord="isteiger11#7458" twitch="isteiger11" />
                <AboutStaffVertical uname="Redpug111" quote="Backend Developer" uuid="3dd3bc81-b5e5-4714-90cd-ae2b72a129cc" github="Redpug111" discord="Redpug111#1111" twitter="Redpug111" twitch="Redpug111" />
                <AboutStaffVertical uname="Rising_Phoenix" quote="Server Administrator" uuid="ed6319cd-3c3a-4628-88cb-c20d21eb7ea9" github="RisingPhoenix-24" discord="Rising_Phoenix#0024" />
            </Grid>

        </>
    );
}