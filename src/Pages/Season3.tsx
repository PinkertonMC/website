import "../Styles/alex.scss";

import { Button, Card, CardContent, CardMedia, Grid, Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";
import FlashOnRoundedIcon from "@material-ui/icons/FlashOnRounded";
import GroupIcon from "@material-ui/icons/Group";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import LandscapeIcon from "@material-ui/icons/Landscape";
import SecurityRoundedIcon from "@material-ui/icons/SecurityRounded";

import ShowOffCardRight from "../Snippets/ShowOffCards/ShowOffCardRight";


export default function SeasonThreePage(): JSX.Element {
    document.title = "Season 3 | PinkertonMC";
    return (
        <div className="text-center s3-body">
            <Card color="primary" style={{ marginBottom: "2rem" }} className="head">
                <img src="/assets/images/pinkertons3website.png" className="logos" alt="Pinkerton Season 3 logo" />
                <h1 className="s3-heading">
                    <div className="marki markianimation">A Minecraft Server Like No Other.</div>
                </h1>
                <h3>With custom items, better terrain, more biomes, player shops, and more, Pinkerton S3 is the Minecraft Server of choice for anyone and everyone.
                </h3>
            </Card>
            <div className="main">
                <div className="box">
                    <div className="textheader cssanimation fadeInBottom" style={{ marginBottom: "2rem" }}>
                        <h2>Why should you join PinkertonMC Season 3?</h2>
                        <p>Whether you're a new player just starting out or a Minecraft pro, Season 3 is right for you.</p>
                        <hr />
                    </div>
                    <Grid container spacing={5}>
                        <Grid item sm={6}>
                            <div style={{ paddingTop: "7%", paddingLeft: "3.5%" }}>
                                <div className="outerboxleft cssanimation fadeInBottom" style={{ width: "100%" }}>
                                    <a href="/assets/images/terrain.png"><img className="innerboxleft scaleimg" src="/assets/images/terrain.png" alt="Pinkerton S3 Terrain" /></a>
                                </div>
                            </div>
                        </Grid>
                        <Grid item sm={6} style={{ display: "flex", alignItems: "center" }}>
                            <div className="textarearight cssanimation fadeInBottom">
                                <h1>It's got <mark>custom</mark> world generation.</h1>
                                <p>Season 3 brings custom world generation with the legendary plugin <a href="https://www.spigotmc.org/resources/terra.85151/">Terra</a> and custom config. Experience
                        this for yourself with custom biomes, more natural materials, and
                        better terrain variation. We've also included <code>/wild</code>, which lets you find a remote spot to start a
                        life in Pinkerton S3.</p>
                                <Button variant="outlined" className="homepagebutton" color="primary" startIcon={<LandscapeIcon />}>
                                    Learn More
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <ShowOffCardRight buttonText="Join our Community" buttonStartIcon={<GroupIcon />} buttonClickLink="https://discord.io/pinkerton" text="PinkertonMC has an active and growing community of players, builders, developers, and admins. In the Discord server, you can ask questions, get help, just chat, or post your creations. We've also linked server chat to the Discord server, so you can chat multi-platform and have fun both ways." textHeading={<h1>An <mark>active</mark> and <mark>growing</mark> community.</h1>} cardContent={<iframe className="innerboxright scaleimgl" src="https://discord.com/widget?id=797179595572248597&theme=dark" title="PinkertonMC Discord" style={{ border: 0 }}></iframe>} cardContentDescription="PinkertonMC Discord" />
                <div className="box">
                    <Grid container spacing={3}>
                        <Grid item sm={6} style={{ width: "100%", display: "flex" }}>
                            <div style={{ paddingTop: "7%", width: "100%", height: "100%", paddingLeft: "3.5%" }}>
                                <div className="outerboxleft cssanimation fadeInBottom" style={{ width: "100%" }}>
                                    <a href="/assets/images/customitems.png"><img className="innerboxleft scaleimg" src="/assets/images/customitems.png" alt="Pinkerton S3 Custom Items" /></a>
                                </div>
                            </div>
                        </Grid>
                        <Grid item sm={6} style={{ display: "flex", alignItems: "center" }}>
                            <div className="textarearight cssanimation fadeInBottom">
                                <h1>With custom <mark>tools</mark> and <mark>items</mark>.</h1>
                                <p>Pinkerton Season 3 has many custom items, including emerald tools, emerald armor, emerald netherite armor, and more food items. We've also made previously uncraftable items craftable, such as horse armor, saddles, name tags, and more. All of these recipies also work in the crafting guide, so you don't have to memorize anything.</p>
                                <Button variant="outlined" className="homepagebutton" color="primary" startIcon={<BuildIcon />}>
                                    Learn More
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div className="box cssanimation fadeInBottom">
                    <h1>Other Features</h1>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Card raised color="primary" style={{ width: "18rem", height: "100%", display: "flex", flexWrap: "wrap" }}>
                                <CardMedia className="s3-cardtop">
                                    <HomeRoundedIcon fontSize="inherit" className="s3-cardtop-icon" />
                                </CardMedia>
                                <CardContent style={{ flexGrow: 1 }}>
                                    <Typography component="h5" variant="h5" style={{ fontWeight: "bold" }}>
                                        Player Shops
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Create your own shop by buying a cheap plot, then either buying a shop design or creating your own. Click here to see the available shops and click here to look into buying a plot or shop.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card raised color="primary" style={{ width: "18rem", height: "100%", display: "flex", flexWrap: "wrap" }}>
                                <CardMedia className="s3-cardtop">
                                    <FlashOnRoundedIcon fontSize="inherit" className="s3-cardtop-icon" />
                                </CardMedia>
                                <CardContent style={{ flexGrow: 1 }}>
                                    <Typography component="h5" variant="h5" style={{ fontWeight: "bold" }}>
                                        Fast Servers
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        We use machines we own to host the server, to increase fleibility and decrease server downtime. We've also preloaded all of the chunks within 10k blocks of spawn, so lag stays minimal.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card raised color="primary" style={{ width: "18rem", height: "100%", display: "flex", flexWrap: "wrap" }}>
                                <CardMedia className="s3-cardtop">
                                    <SecurityRoundedIcon fontSize="inherit" className="s3-cardtop-icon" />
                                </CardMedia>
                                <CardContent style={{ flexGrow: 1 }}>
                                    <Typography component="h5" variant="h5" style={{ fontWeight: "bold" }}>
                                        Antigrief Claims
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Keep your house and items safe from griefers and otherwise unwanted groups. Other players won't be able to break or place blocks, rotate items, or open trapdoors in your claim.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <h1>Ready to Play?</h1>
                    <p>Follow the instructions below to join.</p>
                    <Stepper activeStep={-1} alternativeLabel>
                        <Step>
                            <StepLabel>Get the Server Address from the homepage & join.</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Go through the S3 Portal in the lobby or type <code>/server seasonthree</code>.</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Profit.</StepLabel>
                        </Step>
                    </Stepper>
                </div>
            </div>
        </div>
    );
}