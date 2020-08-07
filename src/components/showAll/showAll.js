import React from "react"
import Styles from "./showAll.module.scss"


export default function ShowAll(props) {
    return (
                <div className={Styles.showAll}>
                        <a href={props.goTo}>{props.text}</a>
                </div>
    )
        ;
}