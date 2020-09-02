import React,{useState} from "react"
import "./sunMoon.scss"


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


