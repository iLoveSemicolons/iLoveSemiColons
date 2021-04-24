import React  from "react"
import "./ilovesemicolonslogo.scss";
import {NavLink} from "react-router-dom";

export default function IlovesemicolonsLogo() {


    /*    const Logo = () => {
            const theme = useContext(AppContext);
            const currentTheme = theme.currentTheme.id;

            const DarkModeLogo = () => {
                return (
                    <img src="/ilovesemicolonsLogoDarkMode.png" alt="ilovesemiolcons logo" className="ilovesemicolonslogo"/>

                // <img src="/ilovesemicolonslogoDarkMode.svg" alt="ilovesemiolcons logo" className="ilovesemicolonslogo"/>
                );
            }
            const LightModeLogo = () => {
                return (
                    <img src="/ilovesemicolonsLogoLightMode.png" alt="ilovesemiolcons logo" className="ilovesemicolonslogo"/>
                );
            }
            if (currentTheme === "dark") {
                return <DarkModeLogo/>
            }
            if (currentTheme === "light") {
                return <LightModeLogo/>
            }
        }*/

    const Logo = () => {
        return (
            <img src="/ilovesemicolonsLogoDarkMode.png" alt="ilovesemiolcons logo" className="ilovesemicolonslogo"/>
        );
    }

    return (
        <div>
            <NavLink to={"../../../"}>
                <Logo/>
            </NavLink>
        </div>
    )
}