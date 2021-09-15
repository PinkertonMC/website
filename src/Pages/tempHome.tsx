import { Button, Card, CardActionArea } from "@material-ui/core";
import GroupIcon from "@material-ui/icons/Group";
import LooksTwoIcon from "@material-ui/icons/LooksTwo"; // Import 3 icon
import PublicIcon from "@material-ui/icons/Public";
import StorageIcon from "@material-ui/icons/Storage";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset"; // Import Game Icon
import { Alert } from "@material-ui/lab";
import { useSnackbar } from "notistack"; // Import Notistack for snackbars at bottom of screen.

import Carousel from "../Snippets/Carousel";
import copy from "../Snippets/Copy";
import ShowOffCardLeft from "../Snippets/ShowOffCards/ShowOffCardLeft";
import ShowOffCardRight from "../Snippets/ShowOffCards/ShowOffCardRight";
export default function TempHomePage(): JSX.Element {
    document.title = "PinkertonMC";
    const { enqueueSnackbar } = useSnackbar();

    return (
        <div className="text-center s3-body">
            <Alert severity="info" variant="filled" style={{ marginBottom: "24px" }}>This site is temporary. A full site redesign is coming soon!</Alert>
            <Carousel>
                <Card color="primary">
                    <CardActionArea onClick={() => { window.open("https://www.youtube.com/watch?v=eUOyhu6fa0o", "_blank") }} className="head">
                        <img src="/assets/images/earth/pinkertonearth.svg" className="logos" alt="Pinkerton Earth logo" />
                        <h1 className="s3-heading" style={{ marginBottom: 0 }}>
                            <div className="marki markianimation">
                                Pinkerton Earth Closed Beta Out Now
                            </div>
                        </h1>
                        <h3>
                            Watch the Tralier
                        </h3>
                    </CardActionArea>
                </Card>
                <Card color="primary">
                    <CardActionArea onClick={() => { window.open("https://www.redbubble.com/people/pinkertonmc/shop", "_blank") }} className="head" style={{ backgroundImage: "linear-gradient(90deg, #a940ff 0%, #0084ff 100%)" }}>
                        <img src="/assets/images/home/redbubble.svg" className="logos" alt="Redbubble Logo" />
                        <h1 className="s3-heading" style={{ marginBottom: 0 }}>
                            <div className="marki markianimation">
                                New Merch Available
                            </div>
                        </h1>
                        <h3>
                            Click to check it out!
                        </h3>
                    </CardActionArea>
                </Card>
            </Carousel>
            <div className="textheader cssanimation fadeInBottom" style={{ marginBottom: "2rem" }}>
                <h2>Why should you join PinkertonMC?</h2>
                <p>
                    If you'd like to grind and get the best resources, or just play for the fun of it, PinkertonMC strikes a good balance between the two. With our multiple servers and gamemodes, you're sure to have a good time playing.
                </p>
                <hr />
            </div>
            <div className="main">
                <ShowOffCardLeft buttonText="Learn More" buttonStartIcon={<PublicIcon />} buttonClickLink="/earth" routerLink text="A brand new server. Factions on a scale map of the Earth. Dynmap. Full 1.17 support. Rewards. Need we say more?" textHeading="Pinkerton Earth" cardContent="/assets/images/earth/earth.png" cardContentDescription="Pinkerton Earth" />

                <ShowOffCardRight buttonText="Join Now" buttonStartIcon={<LooksTwoIcon />} buttonClickLink="#joinNow" text="Pinkerton Classic is the classic SMP experience you know and love, with some improvements, such as better sleeping, an auction house for selling your items, concrete creation in cauldrons, chest shops, and much more." textHeading={"Pinkerton Classic"} cardContent="/assets/images/classic.png" cardContentDescription="Pinkerton Classic Goverment Headquarters" />
                <ShowOffCardLeft buttonText="Coming Back in the Future" buttonStartIcon={<VideogameAssetIcon />} buttonClickLink="#joinNow" text="Classic Minigames, such as bedwars, skywars, PvE, Parkor, and even new ones, such as Among Us in Minecraft." textHeading="Pinkerton Minigames" cardContent="/assets/images/minigames/minigames.png" cardContentDescription="Pinkerton Minigames" />

                <ShowOffCardRight buttonText="Join our Community" buttonStartIcon={<GroupIcon />} buttonClickLink="https://discord.io/pinkerton" text="PinkertonMC has an active and growing community of players, builders, developers, and admins. In the Discord server, you can ask questions, get help, just chat, or post your creations. We've also linked the server chats to the Discord server, so you can chat multi-platform and have fun both ways." textHeading={<h1>An <mark>active</mark> and <mark>growing</mark> community.</h1>} cardContent={<div className="aspect-ratio"><iframe className="innerboxright scaleimgl" src="https://discord.com/widget?id=797179595572248597&theme=dark" title="PinkertonMC Discord" style={{ border: 0 }}></iframe></div>} cardContentDescription="PinkertonMC Discord" />
            </div>
            <h1>Ready to Play?</h1>
            <p>Click the button below to copy the Server Address:</p>
            <div id="joinNow">
                <div style={{ display: "block" }}>
                    <Button variant="outlined" className="homepagebutton" onClick={() => {
                        copy("play.pinkertonmc.com"); enqueueSnackbar("Copied link to clipboard!", {
                            variant: "success",
                        });
                    }} startIcon={<StorageIcon />} style={{ marginBottom: "1rem" }}>
                        Java Edition
                    </Button>
                </div>
                <Button variant="outlined" className="homepagebutton" onClick={() => {
                    copy("bedrock.pinkertonmc.com"); enqueueSnackbar("Copied link to clipboard!", {
                        variant: "success",
                    });
                }} startIcon={<StorageIcon />}>
                    Bedrock Edition
                </Button>
            </div>
        </div >
    );
}