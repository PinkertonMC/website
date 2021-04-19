import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";

import useStyles from "../Styles/styles"

export default function HomePage(): JSX.Element {

    return (
        <Card variant="outlined" color="primary">
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

    );
}