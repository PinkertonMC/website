import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";

export default function HomePage(): JSX.Element {
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
        </>
    );
}