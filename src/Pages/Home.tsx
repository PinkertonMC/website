import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import React from "react";

import useStyles from "../Styles/styles"

export default function HomePage(): JSX.Element {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography></Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}