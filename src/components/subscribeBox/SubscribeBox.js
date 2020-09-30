import React from "react";
import styles from "./subscribeBox.module.scss";
import SubscribeButton from "../subscribeButton/SubscribeButton";
import styled from "styled-components";





export default function SubscribeBox() {


    const SubscribeBoxContainer = styled.div`
    background-color : ${({theme}) => theme.subscribeBoxContainerBackgroundColor};
    `;

    const SubscribeBoxText  = styled.div`
   color : ${({theme}) => theme.subscribeBoxContainerTextColor}; 
    `;



    return (
        <SubscribeBoxContainer className={styles.subscribeBoxContainer}>
            <div className={styles.subscribeBoxLeftContainer}>
                <img src="/me.svg" className={styles.myImageHomePage} alt="Sirage AL DBIYAT"/>
            </div>
            <div className={styles.subscribeBoxRightContainer}>
                <SubscribeBoxText className={styles.subscribeBoxText}>
                    Je suis développeur web Fullstack. passionné
                    par les projets OpenSource et la contribution
                    à la modernisation du Web.
                </SubscribeBoxText>

                <div className={styles.subscribeButtonContainer}>
                    <SubscribeButton/>
                </div>
            </div>
        </SubscribeBoxContainer>


    );
}
