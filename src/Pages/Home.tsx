import "../Styles/alex.scss";

import { Button, Card, CardActions, CardContent, CardMedia, Grid, SvgIcon, Typography } from "@material-ui/core";
import LocalMallRoundedIcon from "@material-ui/icons/LocalMallRounded";
import StorageIcon from "@material-ui/icons/Storage";

import copy from "../Snippets/Copy";
export default function HomePage(): JSX.Element {
    document.title = "PinkertonMC";
    return (
        <div className="text-center s3-body">
            <Card color="primary" style={{ marginBottom: "2rem" }} className="head">
                <img src="/assets/images/transparentLogo.svg" className="logos" alt="Pinkerton Season 3 logo" />
                <h1 className="s3-heading">
                    <div className="marki markianimation">Welcome to The Pinkerton Minecraft Server Network.</div>
                </h1>
                <h3>
                    According to all known laws of avation, there is no way a bee should be able to fly. It's tiny wings are just to small to get its fat little body off the ground.
                </h3>
            </Card>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
                <Card raised color="primary" style={{ width: "18rem", height: "100%", display: "flex", flexWrap: "wrap" }}>
                    <CardMedia className="s3-cardtop">
                        <SvgIcon fontSize="inherit" className="s3-cardtop-icon" viewBox="0 0 42.5 42.5">
                            <circle cx="21.25" cy="21.25" r="21.25" color="#FFFFFF" />
                            <path color="#E41321" d="M29,28.5h-5.3c-0.3,0-0.5-0.2-0.5-0.5V14.6c0-0.3,0.2-0.5,0.5-0.5h4.9c3.7,0,4.5,2.2,4.5,4
	                    c0,1.1-0.3,1.9-0.8,2.5c1.4,0.6,2.1,1.8,2.1,3.7C34.3,26.9,32.3,28.5,29,28.5 M21.2,28.5H10.1c-0.3,0-0.5-0.2-0.5-0.5l0,0V14.6
	                    c0-0.3,0.2-0.5,0.5-0.5h5.2c3.2,0,5.2,1.7,5.2,4.7c0,1.9-1,3.5-2.5,4.1l3.7,4.8c0.2,0.2,0.2,0.6-0.1,0.8
	                    C21.5,28.5,21.3,28.5,21.2,28.5 M21.2,1.2c-11,0-20,8.9-20,20c0,11,8.9,20,20,20s20-8.9,20-20S32.2,1.2,21.2,1.2" />
                        </SvgIcon>
                    </CardMedia>
                    <CardContent style={{ flexGrow: 1 }}>
                        <Typography component="h5" variant="h5" style={{ fontWeight: "bold" }}>
                            New Merch Available!
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Visit our store on RedBubble to buy our merch. It's high quality and long-lasing, and we get a cut of the profit to help develop our server.                    </Typography>
                    </CardContent>
                    <CardActions style={{ width: "100%", justifyContent: "center" }}>
                        <Button variant="outlined" className="homepagebutton" color="primary" startIcon={<LocalMallRoundedIcon />}>
                            Get the Goods
                        </Button>
                    </CardActions>
                </Card>
            </div>
            <div className="textheader cssanimation fadeInBottom" style={{ marginBottom: "2rem" }}>
                <h2>Why should you join PinkertonMC?</h2>
                <p>
                    If you'd like to grind and get the best resources, or just play for the fun of it, PinkertonMC strikes a good balance between the two. With our multiple servers and gamemodes, you're sure to have a good time playing.
                </p>
                <hr />
            </div>
            <h2>Our Servers</h2>
            <Grid container justify="center" spacing={2}>
                <Grid item>
                    <Card variant="outlined" color="primary" style={{ width: "18rem", height: "100%", display: "flex", flexWrap: "wrap" }}>
                        <CardMedia
                            image="/assets/images/s3teaser.png"
                            title="Pinkerton S3 Show-Off Image"
                            component="img"
                        />
                        <CardContent style={{ flexGrow: 1 }}>
                            <Typography component="h5" variant="h5">
                                Pinkerton Season 3
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                An All New Minecraft Experience
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card variant="outlined" color="primary" style={{ width: "18rem", height: "100%", display: "flex", flexWrap: "wrap" }}>
                        <CardMedia
                            image="/assets/images/s3teaser.png"
                            title="Pinkerton S3 Show-Off Image"
                            component="img"
                        />
                        <CardContent style={{ flexGrow: 1 }}>
                            <Typography component="h5" variant="h5">
                                Pinkerton Classic
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Classic MC SMP
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card variant="outlined" color="primary" style={{ width: "18rem", height: "100%", display: "flex", flexWrap: "wrap" }}>
                        <CardMedia
                            image="/assets/images/s3teaser.png"
                            title="Pinkerton S3 Show-Off Image"
                            component="img"
                        />
                        <CardContent style={{ flexGrow: 1 }}>
                            <Typography component="h5" variant="h5">
                                Pinkerton Minigames
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Tons of Minigames
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <h1>Ready to Play?</h1>
            <p>Click the button below to copy the Server Address:</p>
            <div style={{ display: "block" }}>
                <Button variant="outlined" className="homepagebutton" onClick={() => { copy("mc.reedystudents.games") }} startIcon={<StorageIcon />} style={{ marginBottom: "1rem" }}>
                    Java Edition
                </Button>
            </div>
            <Button variant="outlined" className="homepagebutton" onClick={() => { copy("geyser.mc.reedystudents.games") }} startIcon={<StorageIcon />}>
                Bedrock Edition
            </Button>
        </div >
    );
}