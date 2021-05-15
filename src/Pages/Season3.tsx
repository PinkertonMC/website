import "../Styles/alex.scss";

import { Button, Card } from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";
import GroupIcon from "@material-ui/icons/Group";
import LandscapeIcon from "@material-ui/icons/Landscape";
import StorageIcon from "@material-ui/icons/Storage";

import copy from "../Snippets/Copy";

export default function SeasonThreePage(): JSX.Element {
    document.title = "Season 3 | PinkertonMC";
    return (
        <>
            <Card color="primary" style={{ marginBottom: "2rem" }} className="head">
                <img src="assets/img/logo.png" className="logos" />
                <h1>
                    <div className="marki markianimation">A Minecraft Server Like No Other.</div>
                </h1>
                <h3>With custom items, better terrain, more biomes, player shops, and more, Pinkerton S3 is the Minecraft Server of choice for anyone and everyone.
                </h3>
            </Card>
            <div className="main">
                <div className="box">
                    <div className="textheader cssanimation fadeInBottom">
                        <h2>Why should you join PinkertonMC Season 3?</h2>
                        <p>Whether you're a new player just starting out or a Minecraft pro, Season 3 is right for you.</p>
                        <hr />
                        <br /><br /><br /><br />
                    </div>
                    <div className="outerboxleft cssanimation fadeInBottom">

                        <a href="/assets/img/terrain.png"><img className="innerboxleft scaleimg" src="/assets/img/terrain.png" /></a>
                    </div>
                    <div className="textarearight cssanimation fadeInBottom">
                        <h1>It's got <mark>custom</mark> world generation.</h1>
                        <p>Season 3 brings custom world generation with the legendary plugin <a href="https://www.spigotmc.org/resources/terra.85151/">Terra</a> and some custom config. Experience this for yourself with custom biomes, more natural materials, and
                    better terrain variation.</p>
                        <Button variant="outlined" className="homepagebutton" color="primary" startIcon={<LandscapeIcon />}>
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className="box">
                    <div className="textarealeft cssanimation fadeInBottom">
                        <h1>An <mark>active</mark> and <mark>growing</mark> community.</h1>
                        <p>PinkertonMC has an active and growing community of server administrators and developers. Problem? Come talk with us on Discord and get real time support.</p>
                        <Button variant="outlined" className="homepagebutton" color="primary" startIcon={<GroupIcon />} onClick={() => { window.open("https://discord.io/pinkerton", "_blank"); }}>
                            Join Our Community
                        </Button>
                    </div>
                    <div className="outerboxright cssanimation fadeInBottom">
                        <div className="aspect-ratio">
                            <iframe className="innerboxright scaleimgl" src="https://discord.com/widget?id=797179595572248597&theme=dark" ></iframe>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="outerboxleft cssanimation fadeInBottom">
                        <a href="/assets/img/customitems.png"><img className="innerboxleft scaleimg" src="/assets/img/customitems.png" /></a>
                    </div>
                    <div className="textarearight cssanimation fadeInBottom">
                        <h1>With custom <mark>tools</mark> and <mark>items</mark>.</h1>
                        <p>Pinkerton Season 3 has many custom items, including emerald tools, emerald armor, emerald netherite armor, and more food items.</p>
                        <Button variant="outlined" className="homepagebutton" color="primary" startIcon={<BuildIcon />}>
                            Learn More
                        </Button>
                    </div>

                </div>
                <div className="box cssanimation fadeInBottom">
                    <h1>Ready to Play?</h1>
                    <p>Click the button below to copy the IP:</p>
                    <p>Java:</p>
                    <Button variant="outlined" className="homepagebutton" onClick={() => { copy("mc.reedystudents.games") }} color="primary" startIcon={<StorageIcon />}>
                        mc.reedystudents.games
                    </Button>
                    <br />
                    <p>Bedrock:</p>
                    <Button variant="outlined" className="homepagebutton" onClick={() => { copy("geyser.mc.reedystudents.games") }} color="primary" startIcon={<StorageIcon />}>
                        geyser.mc.reedystudents.games
                    </Button>
                </div>
            </div>
        </>
    );
}