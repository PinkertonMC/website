import { IconButton } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import React from "react";

export default function Carousel(props: { children: JSX.Element[] }): JSX.Element {
    const [ind, indSet] = React.useState(0);
    const indMax = React.Children.count(props.children) - 1;
    function doNextSlide() {
        if (ind === indMax) {
            indSet(0);
        } else {
            indSet(ind + 1);
        }
    }
    function doLastSlide() {
        if (ind === 0) {
            indSet(indMax);
        } else {
            indSet(ind - 1);
        }
    }
    let timeout = setTimeout(() => {
        doNextSlide();
    }, 5000);
    React.useEffect(() => {
        return function cleanup() {
            clearTimeout(timeout);
        }
    });
    return (
        <div style={{ marginBottom: "2rem", position: "relative" }}>
            {props.children[ind]}
            <IconButton style={{ position: "absolute", color: "white", top: "calc(50% - 24px)", right: "5px" }} onClick={() => { clearTimeout(timeout); doNextSlide(); }}><NavigateNextIcon /></IconButton>
            <IconButton style={{ position: "absolute", color: "white", top: "calc(50% - 24px)", left: "5px" }} onClick={() => { clearTimeout(timeout); doLastSlide(); }}><NavigateBeforeIcon /></IconButton>
        </div>
    );
}