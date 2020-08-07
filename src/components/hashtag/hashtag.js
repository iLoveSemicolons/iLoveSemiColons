import React from "react"
import Styles from "./hashtag.module.scss"

export default function Hashtag(props){
    return (
            <div className={Styles.hashtagText}># {props.hashtagText}</div>
    );
}