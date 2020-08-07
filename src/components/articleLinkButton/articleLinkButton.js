import React from 'react'
import Styles from "./articleLinkButton.module.scss"


export default function ArticleLinkButton() {
    return (
        <a href={"www.google.com"}>
            <button className={Styles.button}>Lire</button>
        </a>
    );
}