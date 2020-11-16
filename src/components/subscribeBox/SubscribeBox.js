import React from "react";
import styles from "./subscribeBox.module.scss";
import SubscribeButton from "../subscribeButton/SubscribeButton";
import styled from "styled-components";


const SubscribeBoxContainer = styled.div`
    background-color : ${({theme}) => theme.subscribeBoxContainerBackgroundColor};
    `;

const SubscribeBoxText  = styled.div`
   color : ${({theme}) => theme.subscribeBoxContainerTextColor}; 
    `;

export default function SubscribeBox() {
    return (
        <SubscribeBoxContainer className={styles.subscribeBoxContainer}>
            <div className={styles.subscribeBoxLeftContainer}>
                <img src="/me.svg" className={styles.myImageHomePage} alt="Sirage AL DBIYAT"/>
            </div>
            <div className={styles.subscribeBoxRightContainer}>
                <SubscribeBoxText className={styles.subscribeBoxText}>
                    I am a full stack web developer, passionate about open-source projects and the contribution to web modernization
                </SubscribeBoxText>

                <div className={styles.subscribeButtonContainer}>
                    <SubscribeButton/>
                </div>
            </div>
        </SubscribeBoxContainer>


    );
}
