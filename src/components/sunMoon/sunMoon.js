import React from "react"
import ReactDOM from "react-dom"
import "./sunMoon.css"

/*export default function Sunoon(){
    return(
        <div className = "sunMoonContainer" >
            <img onClick={toggleMode} src="/sun.svg" alt="sun icon" id="sunMoon" className="sunMoon" />
        </div>
    );
}



let state = true;
function toggleMode (){
    let modeIcon = document.getElementById("sunMoon");

    let sun = "/sun.svg";
    let moon = "/moon.svg";

    if(state){
        modeIcon.src = moon;
        state = false;
        window.alert(modeIcon.src);
    } else {
        modeIcon.src = sun;
        state = true;
        window.alert(modeIcon.src);
    }
}*/

const iconPath = {
    sun: "/sun.svg",
    moon: "/moon.svg"
}

export default class SunMoon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true
        }
        this.getImageName = this.getImageName.bind(this);
        this.toggleIcon = this.toggleIcon.bind(this);
    }

    toggleIcon() {
        this.setState(state => ({open: !state.open}));
    }

    getImageName() {
        return this.state.open ? 'sun' : 'moon';
    }

    render() {
        const imageName = this.getImageName();
        return (
            <div className="sunMoonContainer">
                <img onClick={this.toggleIcon} src={iconPath[imageName]} alt="sun icon" id="sunMoon"
                     className="sunMoon"/>
            </div>
        );
    }
}


