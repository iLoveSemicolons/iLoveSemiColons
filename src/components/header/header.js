import React from "react"
import Styles from "./header.module.scss"
import NavIcon from "../navIcon/navIcon";
import IlovesemicolonsLogo from "../ilovesmeiolconslogo/ilovesemicolonsLogo";
import SunMoon from "../sunMoon/sunMoon"


export default function Header() {
    return (
        <div className={Styles.headerContainer}>
            <div className={Styles.headerContentContainer}>
                <div className={Styles.headerLeftContent}>
                    <IlovesemicolonsLogo/>
                </div>
                <div className={Styles.headerRightContent}>
                    <SunMoon/>
                    <NavIcon/>
                </div>
            </div>

            <div className={Styles.headerContentContainerUnderLining}>
                <div className={Styles.headerLeftContentUnderLining}/>
                <div className={Styles.headerRightContentUnderLining}>
                    <div className={Styles.sunMoonUnderLining}/>
                    <div className={Styles.navIconUnderLining}/>
                </div>
            </div>
        </div>
    );
}
