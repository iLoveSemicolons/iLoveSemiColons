import React from "react";
import "./subscribeBox.scss";
import SubscribeButton from "../subscribeButton/SubscribeButton";


export default function SubscribeBox() {
    return (

        <div className="subscribeBoxContainer">
            <div className="subscribeBoxLeftContainer">
                <img src="/me.svg" className="myImageHomePage" alt="Sirage AL DBIYAT"/>
            </div>
            <div className="subscribeBoxRightContainer">
                <div className="subscribeBoxText">
                    Je suis développeur web Fullstack. passionné
                    par les projets OpenSource et la contribution
                    à la modernisation du Web.
                </div>

                <div className="subscribeButtonContainer">
                    <SubscribeButton/>
                </div>
            </div>
        </div>


    );
}
