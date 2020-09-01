import React from "react";
import style from "./footer.module.scss";
import Styles from "../header/header.module.scss";
import {Link} from "react-router-dom";


export default function Footer() {
    return (

        <div className={style.footer}>
            <div className={style.footerContentContainerUpperLining}>
                <div className={style.footerLeftContentUpperLining}>
                </div>
                <div className={style.footerRightContentUpperLining}>
                    <div className={style.sunMoonUpperLining} />
                    <div className={style.navIconUpperLining} />
                </div>
            </div>

            <div className={style.footerContainer}>
                <div>
                    &copy; 2020 iLoveSemicolons.io
                </div>

                <div className={style.footerRightContainer}>
                    <div>
                        <Link to={"../../../contact"}>
                        Contact
                        </Link>
                    </div>
                    <div className={style.separator}>|</div>
                    <div>
                         Mentions légales
                    </div>
                </div>
            </div>
        </div>
    );
}