import React, {useContext} from "react"
import "./ilovesemicolonslogo.scss";
import {NavLink} from "react-router-dom";
import {AppContext} from "../../index";


export default function IlovesemicolonsLogo() {


    const Logo = () => {
        const theme = useContext(AppContext);
        const currentTheme = theme.currentTheme.id;

        const DarkModeLogo = () => {
            return (
                <img src="/ilovesemicolonslogoDarkMode.svg" alt="ilovesemiolcons logo" className="ilovesemicolonslogo"/>
            );
        }
        const LightModeLogo = () => {
            return (
                <img src="/ilovesemicolonslogoLightMode.svg" alt="ilovesemiolcons logo" className="ilovesemicolonslogo"/>
            );
        }
        if (currentTheme === "dark") {
            return <DarkModeLogo/>
        }
        if (currentTheme === "light") {
            return <LightModeLogo/>
        }
    }

    return (
        <div>
            <NavLink to={"../../../"}>
                <Logo/>
            </NavLink>
        </div>
    )
}