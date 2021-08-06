import "../Styles/stars.sass"



export default function EarthPage(): JSX.Element {
    document.title = "Earth | PinkertonMC";
    return (
        <div className="text-center s3-body starBody" style={{ backgroundColor: "black" }}>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div></div>
        </div>
    );
}