import { Button } from "@material-ui/core";
import { Card, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@material-ui/icons/ArrowDropUpRounded";
import BugReportRoundedIcon from "@material-ui/icons/BugReportRounded";
import EventAvailableRoundedIcon from "@material-ui/icons/EventAvailableRounded";
import FlashOnRoundedIcon from "@material-ui/icons/FlashOnRounded";
import MapRoundedIcon from "@material-ui/icons/Map";
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import NewReleasesRoundedIcon from "@material-ui/icons/NewReleasesRounded";
import React from "react";

import ShowOffCardEarthLeft from "../Snippets/ShowOffCardsEarth/ShowOffCardEarthLeft";
import ShowOffCardEarthRight from "../Snippets/ShowOffCardsEarth/ShowOffCardEarthRight";

export default function HomePageEarth(): JSX.Element {
    document.title = "Earth | PinkertonMC";
    React.useEffect(() => {
        //Get the button
        const mybutton = document.getElementById("roundbtn")!;

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = () => { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                mybutton.style.opacity = "100";
            } else {
                mybutton.style.opacity = "0";
            }
        }
        /* eslint-disable no-template-curly-in-string */
        async function pictureAnimation(pictureURL: string, frameCount: number, canvasID: string, divID: string) {
            const html = document.documentElement;
            // @ts-ignore
            const canvas: HTMLCanvasElement = document.getElementById(canvasID)!;
            const holdingDiv = document.getElementById(divID)!;
            const context = canvas.getContext("2d");
            const images: { src: any; }[] = [];

            const currentFrame = (index: number) => (
                // eslint-disable-next-line no-eval
                eval(pictureURL)
            )
            function checkVisible(elm: HTMLElement) {
                var rect = elm.getBoundingClientRect();
                var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
                return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
            }

            const preloadImages = () => {
                for (let i = 1; i < frameCount + 1; i++) {
                    images[i] = new Image();
                    images[i].src = currentFrame(i);
                }
            }

            const img = new Image()
            img.src = currentFrame(1);
            canvas.width = 1920;
            canvas.height = 1080;
            canvas.style.position = "sticky";
            canvas.style.top = "0";
            canvas.style.width = "100%";
            img.onload = function () {
                context?.drawImage(img, 0, 0);
            }

            const updateImage = (index: number) => {
                // @ts-ignore
                context.drawImage(images[index], 0, 0);
            }
            window.addEventListener("scroll", () => {
                if (checkVisible(holdingDiv)) {
                    const canvasRect = holdingDiv.getBoundingClientRect();
                    const scrollTop = html.scrollTop; // scroll top is number of pixels that the document is currently scrolled vertically.
                    const elementTopHeightOffset = holdingDiv.offsetTop; // the pixel amount of the canvas top from the top of the webpage
                    let scrollFraction;
                    if (scrollTop <= window.innerHeight || window.innerHeight > elementTopHeightOffset) {
                        scrollFraction = (scrollTop) / (canvasRect.height); // the amount of the page scrolled
                    } else {
                        scrollFraction = (scrollTop - elementTopHeightOffset + window.innerHeight) / (canvasRect.height); // the amount of the page scrolled
                    }
                    const frameIndex = Math.min(
                        frameCount - 1,
                        Math.ceil(scrollFraction * frameCount)
                    );
                    requestAnimationFrame(() => updateImage(frameIndex + 1))
                }
            });

            preloadImages();

        }

        pictureAnimation("`/assets/animations/globe/${index.toString().padStart(4, '0')}.webp`", 70, "world", "globe")
        pictureAnimation("`/assets/animations/1.17/${index.toString().padStart(4, '0')}.webp`", 80, "version", "ver")
        pictureAnimation("`/assets/animations/factions/${index.toString().padStart(4, '0')}.webp`", 80, "factions", "swords")
    }, []);
    return (
        <div className="text-center s3-body earth-body" >
            <div id="top"></div>
            <div className="earth-header">
                <div className="earth-headertext">
                    <div style={{ width: "100%" }}>
                        <img src="/assets/images/earth/logo.png" style={{ maxWidth: "100%" }} alt="pinkerton earth logo" />
                        <h1 id="bump">AN EXPERIENCE ON A GLOBAL LEVEL.</h1>
                        <a href="#join" className="earth-a"><Button className="earth-btn" variant="contained" size="large">APPLY FOR BETA TESTING</Button></a>
                    </div>
                    <a className="earth-floating earth-a" href="#bump">
                        <p>Learn More</p>
                        <ArrowDropDownRoundedIcon style={{ fontSize: "6vh" }} />
                    </a>
                </div>
            </div>
            <div id="globe" className="earth-slideimg">
                <canvas id="world"></canvas>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="main">
                <ShowOffCardEarthRight buttonText="View Dynamic Map" buttonStartIcon={<MapRoundedIcon />} buttonClickLink="http://dynmap.earth.pinkertonmc.com" text="You can explore the entirety of the real world, at 1:2000 scale. Plus, you can even view it in your browser. Click the button below to access it." textHeading="Yep. That's Right." cardContent="/assets/images/earth/earth-small.webp" cardContentDescription="map of earth" attributeText="Image from Mattias Brennecke" attributeLink="https://earth.motfe.net" />
            </div>
            <div id="swords" className="earth-slideimg">
                <canvas id="factions"></canvas>
            </div>
            <div className="main">
                <ShowOffCardEarthLeft buttonText="View Faction Guide" buttonStartIcon={<MenuBookRoundedIcon />} buttonClickLink="https://docs.google.com/document/d/e/2PACX-1vTOxds_YgCw7OlqZYyqSCB5lKtPpyUrO8mRfyZ9IoK60WafLw_gn7vqMGd4eLi50ZlhjRymUFL2Go24/pub" text="With SaberFactions, you can run a faction any way you want. Want to be neutral, competitive, or a nomad?
                        We've got you covered. Plus it integrates nicely into dynmap to plan out journeys and attacks." textHeading="Run a faction your way." cardContent="/assets/images/earth/factions.webp" cardContentDescription="new items 1.17" />
            </div>
            <div className="main">
                <ShowOffCardEarthRight buttonText="View Dynamic Map" buttonStartIcon={<MapRoundedIcon />} buttonClickLink="http://dynmap.earth.pinkertonmc.com" text="Want to play like it's a classic Pinkerton SMP? Go ahead. Want to raid all competitive factions? Go for
                        it. Want to just explore the world? We've got you covered, building the server from the ground up for
                        whatever you want to do." textHeading="Something for everyone." cardContent="/assets/images/earth/earth-small.webp" cardContentDescription="map of earth" attributeText="Image from Mattias Brennecke" attributeLink="https://earth.motfe.net" />
            </div>

            <div id="ver" className="earth-slideimg">
                <canvas id="version"></canvas>
            </div>
            <div className="main">
                <ShowOffCardEarthLeft buttonText="View 1.17 Changes" buttonStartIcon={<NewReleasesRoundedIcon />} buttonClickLink="https://feedback.minecraft.net/hc/en-us/articles/4402626897165-Minecraft-Caves-Cliffs-Part-1-1-17-Java-" text="Every new feature is here, without any compatability layers. Use copper blocks, tame axolotls, and more!
                        Plus, the map uses vanilla ores and caves, with some quality of life tweaks." textHeading="All on the Latest Version of Minecraft." cardContent="https://i.redd.it/rso9x5fp5at61.png" cardContentDescription="new items 1.17" attributeText="Image from u/Doctor_Rainbow" attributeLink="https://www.reddit.com/r/Minecraft/comments/mr8zgw/heres_another_quick_visualization_of_all_the_new/" />
            </div>

            <br /><br /><br /><br />
            <div className="earth-flex">
                <div className="earth-flex3">
                    <h1>Other Features:</h1>
                </div>
            </div>
            <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                    <Card raised color="primary" style={{ width: "18rem", height: "100%", display: "flex", flexWrap: "wrap" }} className="earth-card">
                        <CardMedia className="s3-cardtop">
                            <FlashOnRoundedIcon fontSize="inherit" className="s3-cardtop-icon" />
                        </CardMedia>
                        <CardContent style={{ flexGrow: 1 }}>
                            <Typography component="h5" variant="h5" style={{ fontWeight: "bold" }}>
                                Fast Hosting
                            </Typography>
                            <Typography variant="subtitle1">
                                We've optimized and improved our hosting to keep the server fast and steady. We've also reduced the
                                resources the server takes to run, to keep it smooth.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card raised color="primary" style={{ width: "18rem", height: "100%", display: "flex", flexWrap: "wrap" }} className="earth-card">
                        <CardMedia className="s3-cardtop">
                            <BugReportRoundedIcon fontSize="inherit" className="s3-cardtop-icon" />
                        </CardMedia>
                        <CardContent style={{ flexGrow: 1 }}>
                            <Typography component="h5" variant="h5" style={{ fontWeight: "bold" }}>
                                Less Bugs
                            </Typography>
                            <Typography variant="subtitle1">
                                Bugs aren't features, so we've worked to squash as many of them as possible even before beta starts, so
                                you can have the smoothest experience possible, even when testing.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card raised color="primary" style={{ width: "18rem", height: "100%", display: "flex", flexWrap: "wrap" }} className="earth-card">
                        <CardMedia className="s3-cardtop">
                            <EventAvailableRoundedIcon fontSize="inherit" className="s3-cardtop-icon" />
                        </CardMedia>
                        <CardContent style={{ flexGrow: 1 }}>
                            <Typography component="h5" variant="h5" style={{ fontWeight: "bold" }}>
                                Timed Rewards
                            </Typography>
                            <Typography variant="subtitle1">
                                Minecraft servers aren't fun unless there's things to come back to, so we've added daily and weekly
                                events to the server. These include random loot drops, daily cash, and more.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <div id="join" className="earth-flex earth-join">
                <h1 className="earth-flex3">So, what are you waiting for?</h1><a className="earth-flex3 earth-a" href="https://beta.pinkertonmc.com">
                    <Button className="earth-btn" variant="contained" size="large">Beta Test Today</Button>
                </a>
            </div>
            <a href="#top"><button className="earth-roundbtn" id="roundbtn"><ArrowDropUpRoundedIcon style={{ fontSize: "3vh" }} /></button></a>
        </div >
    );
}