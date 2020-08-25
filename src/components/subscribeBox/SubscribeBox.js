import React from "react";
import styles from "./subscribeBox.module.scss";
import SubscribeButton from "../subscribeButton/SubscribeButton";


export default function SubscribeBox() {
    return (

        <div className={styles.subscribeBoxContainer}>
            <div className={styles.subscribeBoxLeftContainer}>
                <img src="/me.svg" className={styles.myImageHomePage} alt="Sirage AL DBIYAT"/>
            </div>
            <div className={styles.subscribeBoxRightContainer}>
                <div className={styles.subscribeBoxText}>
                    Je suis développeur web Fullstack. passionné
                    par les projets OpenSource et la contribution
                    à la modernisation du Web.
                </div>

                <div className={styles.subscribeButtonContainer}>
                    <SubscribeButton/>
                </div>
            </div>
        </div>


    );
}
