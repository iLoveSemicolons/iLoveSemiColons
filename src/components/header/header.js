import React from "react"
import Styles from "./header.module.scss"
import NavIcon from "../navIcon/navIcon";
import IlovesemicolonsLogo from "../ilovesmeiolconslogo/ilovesemicolonsLogo";
import SunMoon from "../sunMoon/sunMoon"

export default function Header() {
    return (
        <div className={Styles.header}>
            <div className={Styles.headerContentContainer}>
                <div className={Styles.headerLeftContent}>
                    <IlovesemicolonsLogo className="logo"/>
                </div>
                <div className={Styles.headerRightContent}>
                    <SunMoon className="sunMoon"/>
                    <NavIcon className="navIcon"/>
                </div>
            </div>

            <div className={Styles.headerContentContainerUnderLining}>
                <div className={Styles.headerLeftContentUnderLining}>
                </div>
                <div className={Styles.headerRightContentUnderLining}>
                    <div className={Styles.sunMoonUnderLining} > </div>
                    <div className={Styles.navIconUnderLining} > </div>
                </div>
            </div>

        </div>
    );
}
