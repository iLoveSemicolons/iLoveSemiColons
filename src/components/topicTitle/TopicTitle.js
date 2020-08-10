import React from "react";
import "./topicTitle.scss";


export default function TopicTitle(props) {

    return (
        <div className="topicTitle">
            {props.title}
        </div>
    );
}


