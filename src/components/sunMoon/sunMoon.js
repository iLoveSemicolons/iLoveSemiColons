import React, {useContext} from "react"
import style from "./sunMoon.module.scss"
import {useState} from "react";
import {AppContext} from "../../index";


export default function SunMoon() {

    const {dispatch} = useContext(AppContext);



    const iconPath = {
        sun: "/sun.svg",
        moon: "/moon.svg"
    }

    const [open, setOpen] = useState(true);


    const imageToggler = () => {
        open === true ? setOpen(false) : setOpen(true);
    }

    const toggleTheme = () => {
         dispatch({type : "toggleTheme"});
    }

    const toggler = () => {
        toggleTheme();
        imageToggler();
    }

    return (
        <div className="sunMoonContainer">
            <img onClick={toggler} src={open ? iconPath['sun'] : iconPath['moon']} alt="sun icon" id="sunMoon"
                 className={style.sunMoon}/>
        </div>
    );

}