import React, {useReducer} from "react"
import "./ilovesemicolonslogo.scss";
import {NavLink} from "react-router-dom";
import {initialThemeState, themeReducer} from "../themeReducer";


const logos  ={
    darkModeLogoSourceLink : "/ilovesemicolonslogoDarkMode.svg",
    lightModeLogoSourceLink : "/ilovesemicolonslogoLightMode.svg"
}




export default function IlovesemicolonsLogo() {

    const [themeState, dispatch] = useReducer(themeReducer, initialThemeState);
    const {currentTheme} = themeState;


    window.alert(currentTheme.dar);

    return (
        <div>
            <NavLink to={"../../../"}>
                <img src="/ilovesemicolonslogoDarkMode.svg" alt="ilovesemiolcons logo" className="ilovesemicolonslogo"/>
            </NavLink>
        </div>
    )
}