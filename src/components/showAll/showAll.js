import React from "react"
import Styles from "./showAll.module.scss"
import {NavLink} from "react-router-dom";

export default function ShowAll(props) {
    return (
        <div className={Styles.showAllContainer}>
            <div className={Styles.showAll}>
                <NavLink to={props.goTo}>{props.text}</NavLink>
            </div>
        </div>
    );
}