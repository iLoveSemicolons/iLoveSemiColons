import React from "react"
import Styles from "./socialNetworkingButton.module.scss"

export default function SocialNetworkingButton(props) {
    return (
        <div>
            <div className={Styles.buttonContainer}>
                <a className={Styles.socialNetworkingButton} href={props.goTo} rel="noopener noreferrer"
                   target="_blank">
                    <div>
                        <img src={props.src} alt={props.alt} className={Styles.socialNetworkingIcon}/>
                    </div>
                    <div>
                        {props.text}
                    </div>
                </a>
            </div>
        </div>
    );
}