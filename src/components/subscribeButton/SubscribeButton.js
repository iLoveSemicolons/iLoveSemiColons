import React from "react";
import "./subscribeButton.scss";
import {Link} from "react-router-dom";


//TODO clicking on subscribe button will show an email input

export default function SubscribeButton() {
    return (
        <Link to={"../../../subscribe"}>
            <button type="button" className="subscribeButton">Subscribe</button>
        </Link>
    );
}