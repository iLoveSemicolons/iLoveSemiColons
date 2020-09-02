import React from "react";
import "./subscribeButton.scss";
import {Link} from "react-router-dom";



export default function SubscribeButton() {
    return (
        <Link to={"../../../subscribe"}>
            <button type="button" className="subscribeButton">S'abonner</button>
        </Link>
    );
}