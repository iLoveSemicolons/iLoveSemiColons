import React from "react"
import style from "./sunMoon.module.scss"
import {useState} from "react";

/*
const iconPath = {
    sun: "/sun.svg",
    moon: "/moon.svg"
}

export default class SunMoon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
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
                         className={style.sunMoon}/>
                </div>
        );
    }
}*/


export default function SunMoon() {

    const iconPath = {
        sun: "/sun.svg",
        moon: "/moon.svg"
    }

    const [open, setOpen] = useState(true);


    const imageToggler = () => {
        open === true ? setOpen(false) : setOpen(true);
    }

    return (
        <div className="sunMoonContainer">
            <img onClick={imageToggler} src={open ? iconPath['sun'] : iconPath['moon']} alt="sun icon" id="sunMoon"
                 className={style.sunMoon}/>
        </div>
    );

}